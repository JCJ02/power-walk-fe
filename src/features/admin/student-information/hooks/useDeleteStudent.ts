// src/hooks/useDeleteClient.ts
import { Bounce, toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import baseUrl from "../../../../utils/baseUrl";
import useDelete from "../../../../hooks/useDelete";
import { StudentListResponse } from "../../../../types/StudentType";

const useDeleteStudent = (id: number) => {
    const UseQueryClient = useQueryClient();
    const deleteStudentMutation = useDelete<null, StudentListResponse>({
        url: `${baseUrl}api/student/${id}`,
        requiresAuthentication: true,
        onSuccess: () => {
            toast.success("Successfully Deleted!", {
                toastId: "deleteStudent",
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            UseQueryClient.invalidateQueries({queryKey: ["students"]});
        },
        onError: (error: any) => {
            toast.error(`Failed To Delete Student: ${error.response?.data?.message || "Unknown Error"}`, {
                toastId: "failedToDelete",
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        },
    });

    return deleteStudentMutation;
};

export default useDeleteStudent;