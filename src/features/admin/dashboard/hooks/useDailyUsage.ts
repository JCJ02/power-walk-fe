import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import baseUrl from "../../../../utils/baseUrl";
import { HistoryResponse } from "../../../../types/RFIDType";


const useDailyUsage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(!token) navigate("/log-in");
  
    const { 
        data: historyData, 
        isLoading: historyLoading,
        isError: isHistoryError, 
        error: historyError
    } = useFetch<HistoryResponse>(
        "daily-usage",
        `${baseUrl}api/rfid/history`,
    );

    // Ensure data is formatted correctly for the chart
    const formattedData = Array.isArray(historyData?.data)
        ? historyData.data.map((entry) => ({
            date_added: entry.date_added,  // Extract the correct date field
            uid2: entry.uid2,  // Placeholder, update this logic based on actual usage count
        })) 
        : [];

    return { historyData: formattedData, historyLoading, isHistoryError, historyError };
};

export default useDailyUsage;