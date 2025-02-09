import { useNavigate } from "react-router-dom";
import baseUrl from "../../../../utils/baseUrl";
import useFetch from "../../../../hooks/useFetch";
import { ElectricityGeneratedResponse } from "../../../../types/HardwareType";

const useFetchElectricityGenerated = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(!token) navigate("/log-in");
  
    const { 
        data: electricityGeneratedData, 
        isLoading: electricityGeneratedLoading,
        isError: isElectricityGeneratedError, 
        error: electricityGeneratedError 
    } = useFetch<ElectricityGeneratedResponse>(
        "electricity-generated",
        `${baseUrl}api/hardware/electricity-generated`,
    );

    return { electricityGeneratedData, electricityGeneratedLoading, isElectricityGeneratedError, electricityGeneratedError };
};

export default useFetchElectricityGenerated;