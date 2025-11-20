"use client"

import { useAvailableDoctors } from "@/hooks/use-doctors";
import { DoctorCardsLoading } from "./DoctorCardLoading";
import { Button } from "../ui/button";
import { CardContent, CardTitle } from '@/components/ui/card';
import { Card } from '@/components/ui/card';
import { Badge } from "../ui/badge";
import { MapPinIcon, PhoneIcon, StarIcon } from "lucide-react";
import { CardHeader } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import Image from "next/image";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

interface DoctorSelectionStepProps {
  selectedDentistId: string | null;
  onSelectDentist: (dentistId: string) => void;
  onContinue: () => void;
}

function SelectDentist({ selectedDentistId, onSelectDentist, onContinue }: DoctorSelectionStepProps) {
  
  const { data: dentists = [] , isLoading } = useAvailableDoctors()
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;

  if (isLoading)
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">{dict.appointments.selectDentist.title}</h2>
        <DoctorCardsLoading />
      </div>
    );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{dict.appointments.selectDentist.title}</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedDentistId === dentist.id ? "ring-2 ring-primary" : ""
            }`}
              onClick={() => onSelectDentist(dentist.id)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <Image
                  src={dentist.imageUrl!}
                  alt={dentist.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <CardTitle className="text-lg">{dentist.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {dentist.speciality || dict.appointments.selectDentist.generalSpeciality}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">5</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({dentist.appointmentCount} {dict.appointments.selectDentist.appointmentsUnit})
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="w-4 h-4" />
                <span>{dict.appointments.selectDentist.locationName}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PhoneIcon className="w-4 h-4" />
                <span>{dentist.phone}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {dentist.bio || dict.appointments.selectDentist.defaultBio}
              </p>
              <Badge variant="secondary">{dict.appointments.selectDentist.badgeLicensed}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedDentistId && (
        <div className="flex justify-end">
          <Button onClick={onContinue}>{dict.appointments.selectDentist.continue}</Button>
        </div>
      )}
    </div>
  );
}

export default SelectDentist