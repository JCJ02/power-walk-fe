import { Bounce, toast } from 'react-toastify';
import { useQueryClient } from "@tanstack/react-query";
import baseUrl from '../../../../utils/baseUrl';
import { UpdateStudentType } from '../../../../utils/zod/StudentSchema';
import usePut from '../../../../hooks/usePut';

type UpdateStudentResponse = {
    id: number,
    uid?: number,
    studentId: string,
    firstname: string,
    lastname: string,
    middlename?: string,
    email: string,
    dateOfBirth: Date;
    address: string
}

const useUpdateStudentMutation = (id: number) => {
    const UseQueryClient = useQueryClient();
    const updateStudentMutation = usePut<UpdateStudentType, UpdateStudentResponse>({
        url: `${baseUrl}api/student/${id}`,
        requiresAuthentication: true,
        onSuccess: () => {
            toast.success('Successfully Updated!', {
                toastId: "updateStudentSuccessfully",
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
        }
    });

    return updateStudentMutation;

}

export default useUpdateStudentMutation;