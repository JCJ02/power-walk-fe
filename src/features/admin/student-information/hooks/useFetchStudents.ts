import useFetch from "../../../../hooks/useFetch";
import { StudentListResponse } from "../../../../types/StudentType";
import baseUrl from "../../../../utils/baseUrl";
import { useNavigate } from "react-router-dom";

const useFetchStudents = (query?: string, page?: number, limit?: number) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(!token) navigate("/log-in");
  
    const { data, isLoading, isError, error } = useFetch<StudentListResponse>(
        "students",
        `${baseUrl}api/student/`,
        {
        params: {
            query,
            page,
            limit,
        },
        }
    );

    return { data, isLoading, isError, error };
};

export default useFetchStudents;