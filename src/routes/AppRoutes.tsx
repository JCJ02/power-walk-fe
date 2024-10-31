import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LogIn from "../pages/auth/login/LogIn";
import SignUp from "../pages/auth/signup/SignUp";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
