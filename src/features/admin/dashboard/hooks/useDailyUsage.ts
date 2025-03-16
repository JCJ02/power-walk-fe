import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import baseUrl from "../../../../utils/baseUrl";
import { HistoryResponse } from "../../../../types/RFIDType";


const useDailyUsage = (fromDate?: string, toDate?: string) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (!token) navigate("/log-in");

    // CONSTRUCT THE QUERY STRING DYNAMICALLY
    const queryParams = [];
    if (fromDate) queryParams.push(`from=${fromDate}`);
    if (toDate) queryParams.push(`to=${toDate}`);
    const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";

    const {
        data: historyData,
        isLoading: historyLoading,
        isError: isHistoryError,
        error: historyError
    } = useFetch<HistoryResponse>(
        "daily-usage",
        `${baseUrl}api/rfid/history${queryString}`,
    );

    // ENSURE DATA IS FORMATTED CORRECTLY FOR THE CHART
    // const formattedData = Array.isArray(historyData?.data)
    //     ? historyData.data.map((entry) => ({
    //         createdAt: entry.createdAt,
    //         rfid_uid: entry.rfid_uid,
    //     }))
    //     : [];
    const formattedData = historyData?.data?.rfids || [];
    const totalRFIDUID = historyData?.data?.totalRFIDUID || 0;

    return { historyData: formattedData, totalRFIDUID, historyLoading, isHistoryError, historyError };
};

export default useDailyUsage;