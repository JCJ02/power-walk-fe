import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { MdDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

const SideNavigationBar = () => {
  const location = useLocation();
  const [isMobileView, setDesktopView] = useState(false);

  const responsiveView = () => {
    setDesktopView(window.innerWidth < 1280);
  };

  useEffect(() => {
    responsiveView();
    window.addEventListener("resize", responsiveView);
    return () => window.removeEventListener("resize", responsiveView);
  }, []);
  return (
    <>
      <div className="bg-white font-poppins [box-shadow:10px_0_20px_0_rgba(0,0,0,0.1)] z-10 h-screen w-[80px] xl:w-[320px]">
        <div className="flex flex-col justify-center items-center">
          <Logo className="my-10 w-12 h-12 xl:w-[144px] xl:h-[144px]" />
          <div className="flex flex-col gap-2 px-2 w-full">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className={
                      location.pathname === "/"
                        ? "flex justify-center xl:justify-start items-center gap-2 bg-[#385A65] text-white py-3 xl:pl-2 rounded-md cursor-pointer w-full"
                        : "flex justify-center xl:justify-start items-center gap-2 text-[#385A65] py-3 xl:pl-2 border-0 cursor-pointer w-full"
                    }
                    to={"/"}
                  >
                    {isMobileView ? (
                      <MdDashboard className="text-2xl cursor-pointer" />
                    ) : (
                      <>
                        <MdDashboard className="text-2xl cursor-pointer" />
                        <label className="text-[16px] font-semibold cursor-pointer">
                          Dashboard
                        </label>
                      </>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-[#385A65] text-xs text-white">
                  Dashboard
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className={
                      location.pathname === "/student-information"
                        ? "flex justify-center xl:justify-start items-center gap-2 bg-[#385A65] text-white py-3 xl:pl-2 rounded-md cursor-pointer w-full"
                        : "flex justify-center xl:justify-start items-center gap-2 text-[#385A65] py-3 xl:pl-2 border-0 cursor-pointer w-full"
                    }
                    to={"/student-information"}
                  >
                    {isMobileView ? (
                      <PiStudentFill className="text-2xl cursor-pointer" />
                    ) : (
                      <>
                        <PiStudentFill className="text-2xl cursor-pointer" />
                        <label className="text-[16px] font-semibold cursor-pointer">
                          Student Information
                        </label>
                      </>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-[#385A65] text-xs text-white">
                  Student Information
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavigationBar;
