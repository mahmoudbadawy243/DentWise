"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function getAppointments() {
    try {
        const appointments = await prisma.appointment.findMany({
            include: {
              user:{
                select:{
                  firstName:true,
                  lastName:true,
                  email:true,
                }
              },
              doctor:{
                select:{
                  name:true,
                  imageUrl:true,
                }
              }
            },
            orderBy: {
                createdAt: "desc",
            },
        })
        return appointments
    }
    catch (error) {
        console.log(error)
        throw new Error ("Faild to fetch appointments") 
    }  
}

// ---------------------------------------------------------------------------

export async function getUserAppointmentStats() {
  try {
    
    // get authenticated user from Clerk
    const { userId } = await auth();
    if (!userId) throw new Error("You must be authenticated");

    // find user by clerkId from authenticated session
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) throw new Error("User not found");

    // these calls will run in parallel, instead of waiting each other
    const [totalCount, completedCount] = await Promise.all([
      prisma.appointment.count({
        where: { userId: user.id },
      }),
      prisma.appointment.count({
        where: {
          userId: user.id,
          status: "COMPLETED",
        },
      }),
    ]);
    return {
      totalAppointments: totalCount,
      completedAppointments: completedCount,
    };
  } 

  catch (error) {
    console.error("Error fetching user appointment stats:", error);
    return { totalAppointments: 0, completedAppointments: 0 };
  }
}