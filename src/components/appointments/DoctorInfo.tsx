import { useAvailableDoctors } from "@/hooks/use-doctors";
import Image from "next/image";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

function DoctorInfo({ doctorId }: { doctorId: string }) {
  const { data: doctors = [] } = useAvailableDoctors();
  const doctor = doctors.find((d) => d.id === doctorId);
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;

  if (!doctor) return null;

  return (
    <div className="flex items-center gap-4">
      <Image
        src={doctor.imageUrl!}
        alt={doctor.name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium">{doctor.name}</h3>
        <p className="text-sm text-muted-foreground">{doctor.speciality || dict.appointments.selectDentist.generalSpeciality}</p>
      </div>
    </div>
  );
}

export default DoctorInfo;
