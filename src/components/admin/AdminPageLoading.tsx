import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from '@/components/Navbar';


function DoctorCardSkeleton() {
  return (
      <Card >
        <CardContent className="h-36">
          <div className="flex pt-10 gap-4">
            <Skeleton className="w-14 h-14 rounded-xl flex items-center justify-center"/>
            <div className="space-y-2">
              <Skeleton className="w-3 h-8"/>
              <Skeleton className="w-28 h-2"/>
            </div>
          </div>
        </CardContent>
      </Card>

  );
}

export default function AdminPageLoading() {
  return (
    <>
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-16 pt-24">
            <div className="mb-12 flex items-center justify-between rounded-3xl p-8 border ">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full">
                <Skeleton className="w-40 h-6" />
              </div>
              <div>
                  <Skeleton className="w-96 h-12 mb-2" />
                <Skeleton className="w-[800px] h-6" />
              </div>
            </div>

            <div className="hidden lg:block">
                <Skeleton className="w-32 h-32 rounded-full" />
            </div>
          </div>
    
          <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <DoctorCardSkeleton key={i} />
            ))}
          </div>
        
        </div>

    </>
  );
}
