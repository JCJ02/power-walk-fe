import { Bounce, toast } from 'react-toastify';
import { useQueryClient } from "@tanstack/react-query";
import baseUrl from '../../../../utils/baseUrl';
import usePost from '../../../../hooks/usePost';
import { NewRFIDType } from '../../../../utils/zod/RFIDSchema';

type NewRFIDResponse = {
    id: number,
    uid: string,
}

const useNewRFIDFormMutation = () => {
    const UseQueryClient = useQueryClient();
    const createRFIDMutation = usePost<NewRFIDType, NewRFIDResponse>({
        url: `${baseUrl}api/rfid/`,
        requiresAuthentication: true,
        onSuccess: () => {
            toast.success('Successfully Created!', {
                toastId: "createdRFIDSuccessfully",
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
            UseQueryClient.invalidateQueries({queryKey: ["rfids"]});
        }
    });

    return createRFIDMutation;

}

export default useNewRFIDFormMutation;