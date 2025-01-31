import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="flex flex-col items-start font-poppins py-5 pl-6 lg:pl-8 pr-6 lg:pr-10 overflow-y-scroll h-screen w-full">
        <h1 className="text-xl xl:text-3xl font-semibold">Dashboard</h1>
        <div className="w-full"></div>
      </div>
    </>
  );
};

export default Dashboard;
