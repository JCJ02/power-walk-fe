import { useEffect } from "react";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 NOT FOUND - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center px-5 h-screen w-full">
        <Logo />
        <h1 className="font-poppins font-extrabold text-7xl">404</h1>
        <h2 className="font-poppins text-[#385A65] text-lg md:text-xl lg:text-2xl">
          Oops, This Page Not Found!
        </h2>
        <p className="font-poppins text-xs md:text-sm lg:text-md text-center text-slate-400">
          The link might be corrupted or the page may have been removed.
        </p>
        <div className="flex items-center gap-2 mt-10">
          <p className="font-poppins text-xs md:text-md lg:text-lg">
            Go Back To
          </p>
          <Link
            className="font-poppins font-bold text-xs md:text-md lg:text-lg text-[#385A65] hover:underline"
            to={"/"}
          >
            Previous Page
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
