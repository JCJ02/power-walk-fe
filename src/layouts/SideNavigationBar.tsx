import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { MdDashboard } from "react-icons/md";
// import { PiStudentFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { RiRfidFill } from "react-icons/ri";
// import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const SideNavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileView, setDesktopView] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    toast.success("Logged Out Successfully!", {
      toastId: "loggedOutSuccess",
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigate("log-in");
  };

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
      <div className="flex flex-col justify-between bg-white font-poppins [box-shadow:10px_0_20px_0_rgba(0,0,0,0.1)] z-10 h-screen w-2/12 md:w-1/12 xl:w-[320px]">
        <div className="flex flex-col justify-center items-center">
          <Logo className="my-10 w-12 h-12 xl:w-[144px] xl:h-[144px]" />
          <div className="flex flex-col gap-2 px-2 xl:px-4 w-full">
            {/* DASHBOARD */}
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

            {/* STUDENT INFORMATION */}
            {/* <TooltipProvider>
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
            </TooltipProvider> */}

            {/* RFID REGISTRATION */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className={
                      location.pathname === "/rfid"
                        ? "flex justify-center xl:justify-start items-center gap-2 bg-[#385A65] text-white py-3 xl:pl-2 rounded-md cursor-pointer w-full"
                        : "flex justify-center xl:justify-start items-center gap-2 text-[#385A65] py-3 xl:pl-2 border-0 cursor-pointer w-full"
                    }
                    to={"/rfid"}
                  >
                    {isMobileView ? (
                      <RiRfidFill className="text-2xl cursor-pointer" />
                    ) : (
                      <>
                        <RiRfidFill className="text-2xl cursor-pointer" />
                        <label className="text-[16px] font-semibold cursor-pointer">
                          RFID
                        </label>
                      </>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-[#385A65] text-xs text-white">
                  Radio-Frequency IDentification
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2 px-2 xl:px-4 w-full">
          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  className={
                    location.pathname === "*"
                      ? "flex justify-center xl:justify-start items-center gap-2 bg-[#385A65] text-white py-3 xl:pl-2 rounded-md cursor-pointer w-full"
                      : "flex justify-center xl:justify-start items-center gap-2 text-[#385A65] py-3 xl:pl-2 border-0 cursor-pointer w-full"
                  }
                  to={"*"}
                >
                  {isMobileView ? (
                    <IoSettingsSharp className="text-2xl cursor-pointer" />
                  ) : (
                    <>
                      <IoSettingsSharp className="text-2xl cursor-pointer" />
                      <label className="text-[16px] font-semibold cursor-pointer">
                        Settings
                      </label>
                    </>
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#385A65] text-xs text-white">
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className="flex justify-center xl:justify-start items-center gap-2 text-[#385A65] bg-white hover:bg-[#385A65] hover:text-white py-3 xl:pl-2 border-0 rounded-md cursor-pointer w-full"
                onClick={handleLogout}
              >
                {isMobileView ? (
                  <IoLogOut className="text-2xl cursor-pointer" />
                ) : (
                  <>
                    <IoLogOut className="text-2xl cursor-pointer" />
                    <label className="text-[16px] font-semibold cursor-pointer">
                      Log Out
                    </label>
                  </>
                )}
              </TooltipTrigger>
              <TooltipContent className="bg-[#385A65] text-xs text-white">
                Log Out
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
};

export default SideNavigationBar;
