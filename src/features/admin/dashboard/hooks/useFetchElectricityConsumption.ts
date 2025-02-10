import { useNavigate } from "react-router-dom";
import baseUrl from "../../../../utils/baseUrl";
import useFetch from "../../../../hooks/useFetch";
import { ElectricityConsumptionResponse } from "../../../../types/HardwareType";

const useFetchElectricityConsumption = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(!token) navigate("/log-in");
  
    const { 
        data: electricityConsumptionData, 
        isLoading: electricityConsumptionDataLoading,
        isError: isElectricityConsumptionDataError, 
        error: electricityConsumptionDataError 
    } = useFetch<ElectricityConsumptionResponse>(
        "electricity-consumption",
        `${baseUrl}api/hardware/electricity-consumption`,
    );

    return { electricityConsumptionData, electricityConsumptionDataLoading, isElectricityConsumptionDataError, electricityConsumptionDataError };
};

export default useFetchElectricityConsumption;