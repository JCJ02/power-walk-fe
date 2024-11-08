import { useEffect } from "react";
import Footer from "../layouts/Footer";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 NOT FOUND - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center px-5 h-screen w-full">
        <h1 className="font-poppins font-extrabold text-7xl">404</h1>
        <h2 className="font-poppins text-slate-600 text-lg md:text-xl lg:text-2xl">
          Oops, This Page Not Found!
        </h2>
        <h2 className="font-poppins text-xs md:text-sm lg:text-md text-center text-slate-400">
          The link might be corrupted or the page may have been removed.
        </h2>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
