import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { ElectricityMeterResponse } from "../../../../types/HardwareType";
import baseUrl from "../../../../utils/baseUrl";

const useElectricityMeter = (fromDate?: string, toDate?: string) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (!token) navigate("/log-in");

    // CONSTRUCT THE QUERY STRING DYNAMICALLY
    const queryParams = [];
    if (fromDate) queryParams.push(`from=${fromDate}`);
    if (toDate) queryParams.push(`to=${toDate}`);
    const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";

    const {
        data: electricityMeterData,
        isLoading: electricityMeterLoading,
        isError: isElectricityMeterError,
        error: electricityMeterError
    } = useFetch<ElectricityMeterResponse>(
        "electricity-meter",
        `${baseUrl}api/hardware/electricity-meter${queryString}`,
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