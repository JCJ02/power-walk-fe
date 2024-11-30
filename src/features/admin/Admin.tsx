import { Outlet } from "react-router-dom";
import NavigationBar from "../../layouts/NavigationBar";
import SideNavigationBar from "../../layouts/SideNavigationBar";

const Admin = () => {
  return (
    <>
      <div className="flex">
        <SideNavigationBar />
        <div className="flex flex-col h-screen w-full">
          <NavigationBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
