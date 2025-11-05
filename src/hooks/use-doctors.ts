"use client"

import { createDoctor, getDoctors, updateDoctor } from "@/lib/actions/getDoctors"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

export const useGetDoctors = () => {
    const result = useQuery({
        queryKey: ["getDoctors"],
        queryFn: () => getDoctors(),
    })
    return result
}

// ------------------------------------------------------------

export function useCreateDoctor() {
    const queryClient = useQueryClient();

    const result = useMutation({
        mutationFn: createDoctor,
        onSuccess: () => {
            // very important step as after creating a doctor we dont see it in the list , we need to refresh the data
            // so this line will automatically refresh the data when createDoctor is successful
        queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
        },
        onError: (error) => console.error("Failed to create doctor:", error),
    });
    return result;
}

// ------------------------------------------------------------

export function useUpdateDoctor() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateDoctor,
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
        queryClient.invalidateQueries({ queryKey: ["getAvailableDoctors"] });
        },
        onError: (error) => console.error("Failed to update doctor:", error),
    });
}