import useFetch from "../../../../hooks/useFetch";
import { RFIDListResponse } from "../../../../types/RFIDType";
import baseUrl from "../../../../utils/baseUrl";
import { useNavigate } from "react-router-dom";

const useFetchRFIDs = (query?: string, page?: number, limit?: number) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(!token) navigate("/log-in");
  
    const { data: RFIDData, isLoading: isRFIDLoading, isError: isRFIDError, error: RFIDError } = useFetch<RFIDListResponse>(
        "rfids",
        `${baseUrl}api/rfid/`,
        {
        params: {
            query,
            page,
            limit,
        },
        }
    );

    return { RFIDData, isRFIDLoading, isRFIDError, RFIDError };
};

export default useFetchRFIDs;