import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LogIn from "../features/authentication/log-in/LogIn";
import SignUp from "../features/authentication/sign-up/SignUp";
import Dashboard from "../features/admin/dashboard/Dashboard";
import StudentInformation from "../features/admin/student-information/StudentInformation";
import Admin from "../features/admin/Admin";
import PrivateRoute from "./PrivateRoute";
import NewRFIDForm from "../features/admin/rfid-registration/components/NewRFIDForm";
import Settings from "../features/admin/settings/Settings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route
              path="student-information"
              element={<StudentInformation />}
            />
            <Route path="rfid-registration" element={<NewRFIDForm />} />
            <Route path="settings" element={<Settings />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
