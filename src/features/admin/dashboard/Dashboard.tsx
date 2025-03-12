import { useEffect, useState } from "react";
import BatteryGauge from "react-battery-gauge";
import useFetchElectricityGenerated from "./hooks/useFetchEletricityGenerated";
import useFetchElectricityConsumption from "./hooks/useFetchElectricityConsumption";
import Button from "../../../components/Button";
import { useQueryClient } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../components/ui/chart";
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import useDailyUsage from "./hooks/useDailyUsage";
import useFetchBattery from "./hooks/useFetchBattery";
import useElectricityMeter from "./hooks/useElectricityMeter";

const Dashboard = () => {
  const UseQueryClient = useQueryClient();

  const [batterySize, setBatterySize] = useState(144);

  const handleRefreshButton = () => {
    UseQueryClient.invalidateQueries({ queryKey: ["battery-percentage"] });
    UseQueryClient.invalidateQueries({ queryKey: ["electricity-generated"] });
    UseQueryClient.invalidateQueries({ queryKey: ["electricity-consumption"] });
    UseQueryClient.invalidateQueries({ queryKey: ["electricity-meter"] });
    UseQueryClient.invalidateQueries({ queryKey: ["daily-usage"] });
  };

  const { batteryData, batteryLoading, isBatteryError, batteryError } =
    useFetchBattery();

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

  const { historyData, historyLoading, isHistoryError, historyError } =
    useDailyUsage();

  const { electricityMeterData, electricityMeterLoading, isElectricityMeterError, electricityMeterError } = useElectricityMeter();

  const chartConfig = {
    rfid_uid: {
      label: "Student",
      color: "hsl(var(--chart-1))",
    }
  } satisfies ChartConfig;

  const barChartConfig = {
    totalElectricityGeneratedToday: {
      label: "Electricty Generated/Voltage",
      color: "hsl(var(--chart-1))",
    },
    totalElectricityConsumptionToday: {
      label: "Electricity Consumption/Watt-Hour",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  useEffect(() => {
    document.title = "Dashboard - Power Walk Technology";
    const interval = setInterval(() => {
      handleRefreshButton();
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setBatterySize(window.innerWidth < 1536 ? 144 : 200);
    };

    //INITIAL SIZE SET
    updateSize();

    // LISTEN FOR WINDOWS RESIZE
    window.addEventListener("resize", updateSize);

    // CLEAN UP EVENT LISTENER
    return () => window.removeEventListener("resize", updateSize);
  }, [])
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
            {batteryLoading ? (
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-xs md:text-md lg:text-2xl text-[#385A65] text-center font-bold">
                    BATTERY PERCENTAGE
                  </h1>
                  <BatteryGauge
                    animated
                    orientation="vertical"
                    value={0}
                    size={batterySize}
                    chargingStartValue={1}
                    maxValue={100}
                  />
                </div>
                <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-lg py-2 px-5 rounded-sm">
                  0 V
                </label>
              </div>
            ) : isBatteryError ? (
              <h1 className="font-semibold text-[#D2232D] text-md lg:text-2xl">
                {`Error: ${batteryError?.message || "An Unknown Error Occurred."
                  }`}
              </h1>
            ) : batteryData ? (
              <div className="flex flex-col 2xl:flex-row items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-xs md:text-md lg:text-lg text-[#385A65] text-center font-bold">
                    BATTERY PERCENTAGE
                  </h1>
                  <BatteryGauge
                    animated
                    orientation="vertical"
                    value={Number(batteryData.data.batteryPercentage)}
                    size={batterySize}
                    chargingStartValue={1}
                    maxValue={100}
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-xs md:text-md lg:text-lg text-[#385A65] text-center font-bold">
                    Battery Voltage
                  </h1>
                  <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-lg py-2 px-5 rounded-sm">
                    {batteryData.data.batteryVoltage} V
                  </label>
                </div>
              </div>
            ) : null}
          </div>
          <div className="border-2 flex flex-col justify-center items-center gap-5 px-2 py-10 lg:py-0 h-[360px] w-full">
            <h1 className="text-xs md:text-md lg:text-lg text-[#385A65] text-center font-bold">
              ELECTRICITY GENERATED
            </h1>
            {electricityGeneratedLoading ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-lg py-2 px-5 rounded-sm">
                0.0 V
              </label>
            ) : isElectricityGeneratedError ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-lg py-2 px-5 rounded-sm">
                {`Error: ${electricityGeneratedError?.message ||
                  "An Unknown Error Occurred."
                  }`}
              </label>
            ) : electricityConsumptionData ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-lg py-2 px-5 rounded-sm">
                {electricityGeneratedData?.data.electricityGenerated} V
              </label>
            ) : null}
          </div>
          <div className="border-2 flex flex-col justify-center items-center gap-5 px-2 py-10 lg:py-0 h-[360px] w-full">
            <h1 className="text-xs md:text-md lg:text-lg text-[#385A65] text-center font-bold">
              ELECTRICITY CONSUMPTION
            </h1>
            {electricityConsumptionDataLoading ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-lg py-2 px-5 rounded-sm">
                0.0 Wh
              </label>
            ) : isElectricityConsumptionDataError ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-lg py-2 px-5 rounded-sm">
                {`Error: ${electricityConsumptionDataError?.message ||
                  "An Unknown Error Occurred."
                  }`}
              </label>
            ) : electricityConsumptionData ? (
              <label className="bg-[#385A65] text-white text-xs md:text-md lg:text-lg py-2 px-5 rounded-sm">
                {electricityConsumptionData?.data.electricityConsumption} Wh
              </label>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
          {/* DAILY USAGE - NUMBER OF STUDENTS PER DAY */}
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-[#385A65]">Daily Usage</CardTitle>
              <CardDescription className="text-justify">
                The number of students who used the Charging Station per day.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {historyLoading ? (
                <p>Loading...</p>
              ) : isHistoryError ? (
                <p className="text-red-500 font-semibold">
                  {`Error: ${historyError?.message || "An unknown error occurred."
                    }`}
                </p>
              ) : historyData?.length > 0 ? (
                <ChartContainer config={chartConfig} className="h-[280px] w-full">
                  <LineChart
                    data={historyData}
                  // margin={{ left: -24, right: 12 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      className="pr-3"
                      // dataKey="date_added"
                      dataKey="createdAt"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        return date.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          // year: "numeric",
                        });
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      domain={[0, "auto"]}
                      allowDecimals={false}
                      tickCount={5}
                      tickFormatter={(value) => `${Math.round(value)}`}
                      label={{
                        value: "No. of Students",
                        angle: -90,
                        position: "insideLeft",
                        style: {
                          textAnchor: "middle",
                          fill: "var(--chart-label)",
                          fontSize: 12,
                        },
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="rfid_uid"
                      // dataKey="uid2"
                      type="linear"
                      stroke="#385A65"
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </ChartContainer>
              ) : (
                <p className="text-gray-500">
                  No Data Available for Daily Usage.
                </p>
              )}
            </CardContent>
          </Card>

          {/* ELECTRICITY GENERATED AND CONSUMPTION PER DAY */}
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-[#385A65]">Electricity Meter</CardTitle>
              <CardDescription className="text-justify">
                The Daily Electricity Generated and Consumption.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {electricityMeterLoading ? (
                <p>Loading...</p>
              ) : isElectricityMeterError ? (
                <p className="text-red-500 font-semibold">
                  {`Error: ${electricityMeterError?.message || "An unknown error occurred."
                    }`}
                </p>
              ) : electricityMeterData?.length > 0 ? (
                <ChartContainer config={barChartConfig} className="h-[220px] w-full">
                  <BarChart
                    accessibilityLayer
                    data={electricityMeterData}
                  // margin={{ left: -24, right: 12 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      className="pr-3"
                      // dataKey="date_added"
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        return date.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          // year: "numeric",
                        });
                      }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      domain={[0, "auto"]}
                      allowDecimals={false}
                      tickCount={5}
                      tickFormatter={(value) => `${Math.round(value)}`}
                      label={{
                        value: "Electricity Generated & Consumption",
                        angle: -90,
                        position: "insideLeft",
                        style: {
                          textAnchor: "middle",
                          fill: "var(--chart-label)",
                          fontSize: 12,
                        },
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="totalElectricityGeneratedToday" fill="#385A65" radius={4} />
                    <Bar dataKey="totalElectricityConsumptionToday" fill="#FFE95F" radius={4} />
                  </BarChart>
                </ChartContainer>
              ) : (
                <p className="text-gray-500">
                  No Data Available for Daily Usage.
                </p>
              )}
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Electricity Generated/Voltage & Consumption/Watt-Hour
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
