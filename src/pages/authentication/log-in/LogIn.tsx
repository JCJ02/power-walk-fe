import { useEffect } from "react";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/power-walk-bg.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const LogIn = () => {
  useEffect(() => {
    document.title = "Log In - Power Walk Technology";
  }, []);
  return <>
    <div className="flex justify-center items-center h-screen w-full">
      <img className="hidden lg:flex bg-cover bg-no-repeat transform scale-1 h-screen w-3/5" src={backgroundImage} />
      <div className="bg-[#FFFFFF] flex flex-col justify-center items-center gap-10 p-10 2xl:p-36 lg: h-screen w-full">
        <h1 className="font-poppins font-bold text-xl md:text-4xl lg:text-5xl">Power Walk</h1>
        <form className="flex flex-col items-center gap-5 w-full md:w-2/5 lg:w-full">
          <div className="flex flex-col items-center">
            <h1 className="font-poppins font-bold text-md md:text-lg lg:text-xl">Welcome Admin!</h1>
            <p className="font-poppins text-xs md:text-md lg:text-lg">Sign In</p>
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="relative flex items-center w-full">
              <MdEmail className="absolute text-2xl text-[#2B475B] mx-1" />
              <input className="border-2 border-[#2B475B] rounded-lg font-poppins text-xs md:text-md lg:text-lg py-1 pl-8 w-full" placeholder="E-mail Address" />
            </div>
            <div className="relative flex items-center w-full">
              <RiLockPasswordFill className="absolute text-2xl text-[#2B475B] mx-1" />
              <input className="border-2 border-[#2B475B] rounded-lg font-poppins text-xs md:text-md lg:text-lg py-1 pl-8 w-full" type="password" placeholder="Password" />
            </div>
          </div>
          <Link to={"*"} className="font-poppins text-xs md:text-md lg:text-lg hover:underline">Forgot Password?</Link>
          <Button className="bg-[#2B475B] border-2 border-[#2B475B] text-white text-xs md:text-md lg:text-lg w-full">Sign In</Button>
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="font-poppins text-xs md:text-md lg:text-lg">Don't have an account?</p>
            <Link to={"/sign-up"} className="bg-[#FFFFFF] font-poppins border-2 border-[#2B475B] text-center text-xs md:text-md lg:text-lg rounded-full py-1 w-full">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  </>;
};

export default LogIn;

// #2B475B
