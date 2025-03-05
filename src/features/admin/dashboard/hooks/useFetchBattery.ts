import { useNavigate } from "react-router-dom";
import baseUrl from "../../../../utils/baseUrl";
import useFetch from "../../../../hooks/useFetch";
import { BatteryResponse } from "../../../../types/HardwareType";

const useFetchBattery = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(!token) navigate("/log-in");
  
    const { data: batteryData, isLoading: batteryLoading, isError: isBatteryError, error: batteryError } = useFetch<BatteryResponse>(
        "battery-percentage",
        `${baseUrl}api/hardware/`,
    );

    return { batteryData, batteryLoading, isBatteryError, batteryError };
};

export default useFetchBattery;