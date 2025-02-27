import { useEffect } from "react";
import BatteryGauge from "react-battery-gauge";
import useFetchBatteryPercentage from "./hooks/useFetchBatteryPercentage";
import useFetchElectricityGenerated from "./hooks/useFetchEletricityGenerated";
import useFetchElectricityConsumption from "./hooks/useFetchElectricityConsumption";
import Button from "../../../components/Button";
import { useQueryClient } from "@tanstack/react-query";

const Dashboard = () => {
  const UseQueryClient = useQueryClient();

  const handleRefreshButton = () => {
    UseQueryClient.invalidateQueries({ queryKey: ["battery-percentage"] });
    UseQueryClient.invalidateQueries({ queryKey: ["electricity-generated"] });
    UseQueryClient.invalidateQueries({ queryKey: ["electricity-consumption"] });
  };

  const {
    batteryPercentageData,
    batteryPercentageLoading,
    isBatteryPercentageError,
    batteryPercentageError,
  } = useFetchBatteryPercentage();

  const {
    electricityGeneratedData,
    electricityGeneratedLoading,
    isElectricityGeneratedError,
    electricityGeneratedError,
  } = useFetchElectricityGenerated();

  const {
    electricityConsumptionData,
    electricityConsumptionDataLoading,
    isElectricityConsumptionDataError,
    electricityConsumptionDataError,
  } = useFetchElectricityConsumption();

  useEffect(() => {
    document.title = "Dashboard - Power Walk Technology";
    const interval = setInterval(() => {
      handleRefreshButton();
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex flex-col items-start gap-5 font-poppins py-5 pl-6 lg:pl-8 pr-6 lg:pr-10 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 h-screen w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl xl:text-3xl font-semibold">Dashboard</h1>
          <Button className="hidden" onClick={handleRefreshButton}>
            Refresh
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 w-full">
          <div className="border-2 flex flex-col items-center gap-2 py-8 px-5 rounded-md w-full">
            <h1 className="text-xs md:text-md lg:text-2xl text-[#385A65] text-center font-bold">
              BATTERY PERCENTAGE
            </h1>
            {batteryPercentageLoading ? (
              <h1 className="font-semibold text-[#D2232D] text-md lg:text-2xl">
                0 %
              </h1>
            ) : isBatteryPercentageError ? (
              <h1 className="font-semibold text-[#D2232D] text-md lg:text-2xl">
                {`Error: ${
                  batteryPercentageError?.message ||
                  "An Unknown Error Occurred."
                }`}
              </h1>
            ) : batteryPercentageData ? (
              <BatteryGauge
                animated
                orientation="vertical"
                value={Number(batteryPercentageData.data.batteryPercentage)}
                size={240}
                chargingStartValue={1}
                maxValue={100}
              />
            ) : null}
          </div>
          <div className="border-2 flex flex-col justify-center items-center gap-5 px-2 py-10 lg:py-0 h-[360px] w-full">
            <h1 className="text-xs md:text-md lg:text-2xl text-[#385A65] text-center font-bold">
              ELECTRICITY GENERATED
            </h1>
            {electricityGeneratedLoading ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-2xl py-2 px-5 rounded-sm">
                0.0 mAh
              </label>
            ) : isElectricityGeneratedError ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-2xl py-2 px-5 rounded-sm">
                {`Error: ${
                  electricityGeneratedError?.message ||
                  "An Unknown Error Occurred."
                }`}
              </label>
            ) : batteryPercentageData ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-2xl py-2 px-5 rounded-sm">
                {electricityGeneratedData?.data.electricityGenerated} mAh
              </label>
            ) : null}
          </div>
          <div className="border-2 flex flex-col justify-center items-center gap-5 px-2 py-10 lg:py-0 h-[360px] w-full">
            <h1 className="text-xs md:text-md lg:text-2xl text-[#385A65] text-center font-bold">
              ELECTRICITY CONSUMPTION
            </h1>
            {electricityConsumptionDataLoading ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-2xl py-2 px-5 rounded-sm">
                0.0 mAh
              </label>
            ) : isElectricityConsumptionDataError ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-2xl py-2 px-5 rounded-sm">
                {`Error: ${
                  electricityConsumptionDataError?.message ||
                  "An Unknown Error Occurred."
                }`}
              </label>
            ) : electricityConsumptionData ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-2xl py-2 px-5 rounded-sm">
                {electricityConsumptionData?.data.electricityConsumption} mAh
              </label>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
