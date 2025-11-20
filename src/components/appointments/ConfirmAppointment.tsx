import { APPOINTMENT_TYPES } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DoctorInfo from "./DoctorInfo";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

interface ConfirmAppointmentProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooking: boolean;
  onBack: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

function ConfirmAppointment({
  selectedDentistId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooking,
  onBack,
  onConfirm,
  onModify,
}: ConfirmAppointmentProps) {

  const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === selectedType);
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;

  return (
    <div className="space-y-6">
      {/* Header with back button */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={onBack}>
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          {dict.appointments.confirm.back}
        </Button>
        <h2 className="text-2xl font-semibold">{dict.appointments.confirm.title}</h2>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>{dict.appointments.confirm.summaryTitle}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* doctor info */}
          <DoctorInfo doctorId={selectedDentistId} />

          {/* appointment details */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground">{dict.appointments.confirm.fields.type}</p>
              <p className="font-medium">{appointmentType?.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{dict.appointments.confirm.fields.duration}</p>
              <p className="font-medium">{appointmentType?.duration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{dict.appointments.confirm.fields.date}</p>
              <p className="font-medium">
                {new Date(selectedDate).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{dict.appointments.confirm.fields.time}</p>
              <p className="font-medium">{selectedTime}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{dict.appointments.confirm.fields.location}</p>
              <p className="font-medium">{dict.appointments.confirm.locationName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{dict.appointments.confirm.fields.cost}</p>
              <p className="font-medium text-primary">{appointmentType?.price}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* action buttons */}
      <div className="flex gap-4">
        <Button variant="outline" onClick={onModify}>
          {dict.appointments.confirm.modify}
        </Button>
        <Button onClick={onConfirm} className="bg-primary" disabled={isBooking}>
          {isBooking ? dict.appointments.confirm.booking : dict.appointments.confirm.confirm}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmAppointment;
