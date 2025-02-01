import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LogIn from "../features/authentication/log-in/LogIn";
import SignUp from "../features/authentication/sign-up/SignUp";
import Dashboard from "../features/admin/dashboard/Dashboard";
import StudentInformation from "../features/admin/student-information/StudentInformation";
import ChangePassword from "../features/settings/ChangePassword";
import EditProfile from "../features/settings/EditProfile";
import Admin from "../features/admin/Admin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="student-information" element={<StudentInformation />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
