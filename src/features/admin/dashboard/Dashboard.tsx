import { useEffect } from "react";
import BatteryGauge from "react-battery-gauge";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="flex flex-col items-start gap-5 font-poppins py-5 pl-6 lg:pl-8 pr-6 lg:pr-10 overflow-y-scroll h-screen w-full">
        <h1 className="text-xl xl:text-3xl font-semibold">Dashboard</h1>
        <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
          <div className="border-2 flex flex-col items-center gap-2 py-8 px-5 rounded-md w-full">
            <h1 className="text-xs md:text-md lg:text-2xl text-[#385A65] font-bold">
              Battery Percentage
            </h1>
            <BatteryGauge
              animated
              orientation="vertical"
              value={0}
              size={240}
            />
          </div>
          <div className="border-2 flex flex-col justify-center items-center gap-5 px-2 py-10 lg:py-0 h-full w-full">
            <h1 className="text-xs md:text-md lg:text-2xl text-[#385A65] text-center font-bold">
              Energy Generated
            </h1>
            <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-2xl py-2 px-5 rounded-sm">
              7.5 kWh
            </label>
          </div>
          <div className="border-2 flex flex-col justify-center items-center gap-5 px-2 py-10 lg:py-0 h-full w-full">
            <h1 className="text-xs md:text-md lg:text-2xl text-[#385A65] text-center font-bold">
              Energy Consumption
            </h1>
            <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-2xl py-2 px-5 rounded-sm">
              8.5 kWh
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
