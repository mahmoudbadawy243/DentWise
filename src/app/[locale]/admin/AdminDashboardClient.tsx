"use client"

import Navbar from "@/components/Navbar"
import { useGetDoctors } from "@/hooks/use-doctors";
import { useGetAppointments } from "@/hooks/use-appointments";
import { useUser } from "@clerk/nextjs";
import { SettingsIcon } from "lucide-react"
import AdminStats from "@/components/admin/AdminStats";
import DoctorsManagement from "@/components/admin/DoctorsManagement";
import RecentAppointments from "@/components/admin/RecentAppointments";
import AdminPageLoading from "@/components/admin/AdminPageLoading";
import { useParams } from "next/navigation";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

function AdminDashboardClient() {

  const { user } = useUser();
  const { locale } = useParams();
  const dict = (locale === 'ar' ? ar : en) as typeof en;

  const { data: doctors = [] , isLoading: doctorsLoading } = useGetDoctors();
  const { data: appointments = [] , isLoading: appointmentsLoading } = useGetAppointments();
  
  const states = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter((doctor) => doctor.isActive ).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter( (appointment) => appointment.status === "COMPLETED" ).length,
  }

  if(doctorsLoading || appointmentsLoading) return <AdminPageLoading />
  return (
    <div className="min-h-screen bg-background">
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
          {/* ADMIN WELCOME SECTION */}
          <div className="mb-12 flex items-center justify-between bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">{dict.admin.badge}</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  {dict.admin.welcomeBack}, {user?.firstName || "Admin"}!
                </h1>
                <p className="text-muted-foreground">
                  {dict.admin.subtitle}
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <SettingsIcon className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>

          {/* ADMIN DASHBOARD STATS */}
          <AdminStats 
          totalDoctors={states.totalDoctors}
          activeDoctors={states.activeDoctors}
          totalAppointments={states.totalAppointments}
          completedAppointments={states.completedAppointments}
          />
        
        <DoctorsManagement />

        <RecentAppointments />

        </div>

    </div>
  )
}

export default AdminDashboardClient