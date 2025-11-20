import { useGetAppointments } from "@/hooks/use-appointments";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";


interface Appointment {
  id: string;
  date: Date;
  time: string;
  reason?: string | null;
  status: 'CONFIRMED' | 'COMPLETED' | string;
  user: {
    firstName: string | null;
    lastName: string | null;
    email: string;
  };
  doctor: {
    name: string;
    imageUrl: string;
  };
}

function RecentAppointments() {

  const { data: appointments = [] } = useGetAppointments();
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{dict.admin.recentAppointments.status.confirmed}</Badge>;
      case "COMPLETED":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{dict.admin.recentAppointments.status.completed}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          {dict.admin.recentAppointments.title}
        </CardTitle>
        <CardDescription>{dict.admin.recentAppointments.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader >
              <TableRow className="mr-[-200px]">
                <TableHead>{dict.admin.recentAppointments.table.patient}</TableHead>
                <TableHead>{dict.admin.recentAppointments.table.doctor}</TableHead>
                <TableHead>{dict.admin.recentAppointments.table.dateTime}</TableHead>
                <TableHead>{dict.admin.recentAppointments.table.reason}</TableHead>
                <TableHead>{dict.admin.recentAppointments.table.status}</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {appointments.map((appointment: Appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{appointment.user.firstName}</div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.user.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{appointment.doctor.name}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">
                        {new Date(appointment.date).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US')}
                      </div>
                      <div className="text-sm text-muted-foreground">{appointment.time}</div>
                    </div>
                  </TableCell>
                  <TableCell>{appointment.reason}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2"
                    >
                      {getStatusBadge(appointment.status)}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentAppointments;
