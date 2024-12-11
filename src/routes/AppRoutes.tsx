import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LogIn from "../features/authentication/log-in/LogIn";
import SignUp from "../features/authentication/sign-up/SignUp";
import Dashboard from "../features/admin/dashboard/Dashboard";
import Students from "../features/admin/students/StudentInformation";
import ChangePassword from "../features/settings/ChangePassword";
import EditProfile from "../features/settings/EditProfile";
import Admin from "../features/admin/Admin";
import Test from "../features/__test__/Test";
import Test1 from "../features/__test__/Test1";
import TestReactQuery from "../features/__test__/TestReactQuery";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test-1" element={<Test1 />} />
        <Route path="/test-react-query" element={<TestReactQuery />} />
        <Route path="/" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="student-information" element={<Students />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
