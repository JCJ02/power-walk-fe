import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LogIn from "../pages/authentication/log-in/LogIn";
import SignUp from "../pages/authentication/sign-up/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import Students from "../pages/students/Students";
import ChangePassword from "../pages/settings/ChangePassword";
import EditProfile from "../pages/settings/EditProfile";
import Admin from "../pages/admin/Admin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
