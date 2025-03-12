import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import baseUrl from "../../../../utils/baseUrl";
import { HistoryResponse } from "../../../../types/RFIDType";


const useDailyUsage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (!token) navigate("/log-in");

    const {
        data: historyData,
        isLoading: historyLoading,
        isError: isHistoryError,
        error: historyError
    } = useFetch<HistoryResponse>(
        "daily-usage",
        `${baseUrl}api/rfid/history`,
    );

    // ENSURE DATA IS FORMATTED CORRECTLY FOR THE CHART
    const formattedData = Array.isArray(historyData?.data)
        ? historyData.data.map((entry) => ({
            createdAt: entry.createdAt,
            rfid_uid: entry.rfid_uid,
        }))
        : [];

    return { historyData: formattedData, historyLoading, isHistoryError, historyError };
};

export default useDailyUsage;