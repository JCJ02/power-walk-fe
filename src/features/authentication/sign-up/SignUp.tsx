import { useEffect } from "react";
import Footer from "../../../layouts/Footer";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { Bounce, toast } from "react-toastify";
import backgroundImage from "../../../assets/images/power-walk-bg.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo from "../../../components/Logo";
import useSignUpForm from "./hooks/useSignUpForm";
import { IoPerson } from "react-icons/io5";

const SignUp = () => {
  const { values, errors, handleChange, validateForm } = useSignUpForm();

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      toast.success("Successfully Signed Up!", {
        toastId: "successfullySignedUp",
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
    }
  };
  useEffect(() => {
    document.title = "Sign Up - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <img
          className="hidden lg:flex bg-cover bg-no-repeat transform scale-1 h-screen w-3/5"
          src={backgroundImage}
        />
        <div className="bg-[#FFFFFF] flex flex-col justify-center lg:justify-start xl:justify-center items-center gap-5 p-10 md:py-10 xl:py-20 2xl:px-36 overflow-y-scroll h-screen w-full">
          <Logo />
          <form className="flex flex-col items-center gap-4 w-full md:w-2/5 lg:w-full">
            <h1 className="font-poppins font-bold text-md md:text-lg 2xl:text-xl">
              Sign Up
            </h1>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="relative flex items-center w-full">
                <IoPerson className="absolute text-2xl text-[#2B475B] mx-4" />
                <input
                  className="border-2 border-[#2B475B] rounded-lg font-poppins text-xs md:text-md 2xl:text-lg py-2 pl-12 w-full"
                  placeholder="Firstname"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                />
              </div>
              {errors.firstname && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.firstname}
                </p>
              )}
              <div className="relative flex items-center w-full">
                <IoPerson className="absolute text-2xl text-[#2B475B] mx-4" />
                <input
                  className="border-2 border-[#2B475B] rounded-lg font-poppins text-xs md:text-md 2xl:text-lg py-2 pl-12 w-full"
                  placeholder="Lastname"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                />
              </div>
              {errors.lastname && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.lastname}
                </p>
              )}
              <div className="relative flex items-center w-full">
                <MdEmail className="absolute text-2xl text-[#2B475B] mx-4" />
                <input
                  className="border-2 border-[#2B475B] rounded-lg font-poppins text-xs md:text-md 2xl:text-lg py-2 pl-12 w-full"
                  placeholder="E-mail Address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.email}
                </p>
              )}
              <div className="relative flex items-center w-full">
                <RiLockPasswordFill className="absolute text-2xl text-[#2B475B] mx-4" />
                <input
                  className="border-2 border-[#2B475B] rounded-lg font-poppins text-xs md:text-md 2xl:text-lg py-2 pl-12 w-full"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.password}
                </p>
              )}
            </div>
            <Button
              className="bg-[#2B475B] text-white text-xs md:text-md 2xl:text-lg hover:bg-[#335369] w-full"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Link
              to={"/log-in"}
              className="font-poppins font-semibold text-xs md:text-md 2xl:text-lg text-[#335369] hover:underline"
            >
              Sign In
            </Link>
          </form>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SignUp;
