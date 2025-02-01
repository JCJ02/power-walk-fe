import baseUrl from "../../../../utils/baseUrl";
import usePost from "../../../../hooks/usePost";
// import { useQueryClient } from "@tanstack/react-query";
import { Bounce, toast } from 'react-toastify';
import { SignUpType } from "../../../../utils/zod/AdminSchema";

interface SignUpAdminResponse {
    data: {
        admin: {
            id: number;
            firstname: string;
            lastname: string;
            email: string;
            createdAt: string;
            updatedAt: string;
            deletedAt: string | null;
            role: string;
        };
    };
    message: string;
    code: number;
};

const useSignUpMutation = () => {
    // const UseQueryClient = useQueryClient();
    const signUpAdminMutation = usePost<SignUpType, SignUpAdminResponse>({
        url: `${baseUrl}api/admin/`,
        // url: "http://localhost:8080/api/admin/",
        requiresAuthentication: false,
        onSuccess: () => {
            toast.success('Successfully Created!', {
                toastId: "signUpAdminSuccess",
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
            // UseQueryClient.invalidateQueries({queryKey: ["admins"]});
        }
    });

    return signUpAdminMutation;

}

export default useSignUpMutation;