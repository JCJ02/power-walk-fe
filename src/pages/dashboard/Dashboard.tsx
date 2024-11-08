import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="h-full w-full">Dashboard</div>
    </>
  );
};

export default Dashboard;
