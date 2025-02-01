import { useEffect, useState } from "react";

const useAuthentication = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    return { isAuthenticated };
};

export default useAuthentication;
