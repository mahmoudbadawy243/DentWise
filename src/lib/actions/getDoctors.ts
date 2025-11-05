"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { generateAvatar } from "../utils"
import { Gender } from "@prisma/client"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"


export const getDoctors = async () => {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        _count: { select: { appointments: true } },
      },
      orderBy: {
        createdAt: "desc",
      },
    })
    return doctors.map((doctor) => ({
      ...doctor,
      appointmentsCount: doctor._count.appointments,
    }))  
  }
  catch (error) {
    console.log(error)
    throw new Error ("Faild to fetch doctors") 
  }  
}

// ------------------------------------------------------------


interface CreateDoctorInput {
  name: string;
  email: string;
  phone: string;
  speciality: string;
  gender: Gender;
  isActive: boolean;
}

export async function createDoctor(input: CreateDoctorInput) {
  try {
    if (!input.name || !input.email) throw new Error("Name and email are required");

    const doctor = await prisma.doctor.create({
      data: {
        ...input,
        imageUrl: generateAvatar(input.name, input.gender),
      },
    });

    revalidatePath("/admin"); // It's typically placed after database operations to ensure the next time the admin page loads, it fetches fresh data

    return doctor;
  } catch (error: unknown) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        // handle unique constraint violation (email already exists) 
        // P2002 is a Prisma error code that indicates a unique constraint violation
            throw new Error("A doctor with this email already exists");
    }
    throw new Error("Failed to create doctor");
  }
}

// ------------------------------------------------------------

interface UpdateDoctorInput extends Partial<CreateDoctorInput> {
  id: string;
}

export async function updateDoctor(input: UpdateDoctorInput) {
  try {
    // validate
    if (!input.name || !input.email) throw new Error("Name and email are required");

    const currentDoctor = await prisma.doctor.findUnique({
      where: { id: input.id },
      select: { email: true },
    });

    if (!currentDoctor) throw new Error("Doctor not found");

    // if email is changing, check if the new email already exists
    if (input.email !== currentDoctor.email) {
      const existingDoctor = await prisma.doctor.findUnique({
        where: { email: input.email },
      });

      if (existingDoctor) {
        throw new Error("A doctor with this email already exists");
      }
    }

    const doctor = await prisma.doctor.update({
      where: { id: input.id },
      // ...input is going to trigger the unique constraint violation for email
      data: {
        name: input.name,
        email: input.email,
        phone: input.phone,
        speciality: input.speciality,
        gender: input.gender,
        isActive: input.isActive,
      },
    });

    return doctor;
  } catch (error) {
    console.error("Error updating doctor:", error);
    throw new Error("Failed to update doctor");
  }
}

// ------------------------------------------------------------