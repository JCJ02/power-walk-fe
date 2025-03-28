import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LogIn from "../features/authentication/log-in/LogIn";
import SignUp from "../features/authentication/sign-up/SignUp";
import Dashboard from "../features/admin/dashboard/Dashboard";
import StudentInformation from "../features/admin/student-information/StudentInformation";
import Admin from "../features/admin/Admin";
import PrivateRoute from "./PrivateRoute";
import Settings from "../features/admin/settings/Settings";
import RFID from "../features/admin/rfid-registration/RFID";
// import Test from "../features/__test__/Test";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/generate-reports-pdf" element={<Test />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route
              path="student-information"
              element={<StudentInformation />}
            />
            <Route path="rfid" element={<RFID />} />
            <Route path="settings" element={<Settings />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
