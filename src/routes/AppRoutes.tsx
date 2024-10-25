import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LogIn from "../pages/auth/LogIn";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
