import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { ElectricityMeterResponse } from "../../../../types/HardwareType";
import baseUrl from "../../../../utils/baseUrl";

const useElectricityMeter = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (!token) navigate("/log-in");

    const {
        data: electricityMeterData,
        isLoading: electricityMeterLoading,
        isError: isElectricityMeterError,
        error: electricityMeterError
    } = useFetch<ElectricityMeterResponse>(
        "electricity-meter",
        `${baseUrl}api/hardware/electricity-meter`,
    );

    // ENSURE DATA IS FORMATTED CORRECTLY FOR THE CHART
    const formattedData = Array.isArray(electricityMeterData?.data)
        ? electricityMeterData.data.map((entry) => ({
            date: entry.date,
            totalElectricityGeneratedToday: entry.totalElectricityGeneratedToday,
            totalElectricityConsumptionToday: entry.totalElectricityConsumptionToday
        }))
        : [];

    return { electricityMeterData: formattedData, electricityMeterLoading, isElectricityMeterError, electricityMeterError };
};

export default useElectricityMeter;