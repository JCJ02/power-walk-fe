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

    // ENSURE DATA IS FORMATED CORRECTLY FOR THE CHART
    const formattedData = Array.isArray(historyData?.data)
        ? historyData.data.map((entry) => ({
            date_added: entry.date_added,  // EXTRACT THE CORRECT DATE FIELD
            uid2: entry.uid2,  // PLACEHOLDER, UPDATE THIS LOGIC BASED ON ACTUAL USAGE COUNT
            // createdAt: entry.createdAt,  // EXTRACT THE CORRECT DATE FIELD
            // rfid_uid: entry.rfid_uid,  // PLACEHOLDER, UPDATE THIS LOGIC BASED ON ACTUAL USAGE COUNT
        })) 
        : [];

    return { historyData: formattedData, historyLoading, isHistoryError, historyError };
};

export default useDailyUsage;