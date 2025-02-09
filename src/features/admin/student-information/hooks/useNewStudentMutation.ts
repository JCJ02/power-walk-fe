import { Bounce, toast } from 'react-toastify';
import { useQueryClient } from "@tanstack/react-query";
import baseUrl from '../../../../utils/baseUrl';
import usePost from '../../../../hooks/usePost';
import { NewStudentType } from '../../../../utils/zod/StudentSchema';

type NewStudentResponse = {
    id: number,
    uid: number,
    studentId: string,
    firstname: string,
    lastname: string,
    middlename?: string,
    email: string,
    dateOfBirth: Date;
    address: string
}

const useNewStudentMutation = () => {
    const UseQueryClient = useQueryClient();
    const newStudentMutation = usePost<NewStudentType, NewStudentResponse>({
        url: `${baseUrl}api/student/`,
        requiresAuthentication: true,
        onSuccess: () => {
            toast.success('Successfully Created!', {
                toastId: "createStudentSuccessfully",
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

    return newStudentMutation;

}

export default useNewStudentMutation;