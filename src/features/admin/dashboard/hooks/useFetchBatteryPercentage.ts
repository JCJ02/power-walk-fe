import { useNavigate } from "react-router-dom";
import baseUrl from "../../../../utils/baseUrl";
import useFetch from "../../../../hooks/useFetch";
import { BatteryPercentageResponse } from "../../../../types/HardwareType";

const useFetchBatteryPercentage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(!token) navigate("/log-in");
  
    const { data: batteryPercentageData, isLoading: batteryPercentageLoading, isError: isBatteryPercentageError, error: batteryPercentageError } = useFetch<BatteryPercentageResponse>(
        "battery-percentage",
        `${baseUrl}api/hardware/`,
    );

    return { batteryPercentageData, batteryPercentageLoading, isBatteryPercentageError, batteryPercentageError };
};

export default useFetchBatteryPercentage;