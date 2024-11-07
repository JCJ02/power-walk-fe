import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LogIn from "../pages/authentication/login/LogIn";
import SignUp from "../pages/authentication/signup/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import Students from "../pages/students/Students";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
