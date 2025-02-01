import { useEffect, useState } from "react";
import Footer from "../../../layouts/Footer";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import backgroundImage from "../../../assets/images/power-walk-bg.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo from "../../../components/Logo";
import useSignUpForm from "./hooks/useSignUpForm";
import { IoPerson } from "react-icons/io5";
import { Input } from "../../../components/ui/input";
import useSignUpMutation from "./hooks/useSignUpMutation";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { values, errors, handleChange, validateForm } = useSignUpForm();
  const signUpAdminMutation = useSignUpMutation();
  const navigate = useNavigate();

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      signUpAdminMutation.mutate(values, {
        onSuccess: () => {
          navigate("/log-in");
        },
        onError: (error) => {
          console.error("Registration Error:", error);
          const message =
            "Oops! Something went wrong with your registration. Please double-check your information and try again.";
          setErrorMessage(message);
        },
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
          <form
            className="flex flex-col items-center gap-4 w-full md:w-2/5 lg:w-full"
            onSubmit={handleSignUp}
          >
            <h1 className="font-poppins font-bold text-md md:text-lg 2xl:text-xl">
              Sign Up
            </h1>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="relative flex items-center w-full">
                <IoPerson className="absolute text-lg text-[#2B475B] mx-4" />
                <Input
                  className="border-2 border-[#2B475B] rounded-md font-poppins pl-12"
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
                <IoPerson className="absolute text-lg text-[#2B475B] mx-4" />
                <Input
                  className="border-2 border-[#2B475B] rounded-md font-poppins pl-12"
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
                <MdEmail className="absolute text-lg text-[#2B475B] mx-4" />
                <Input
                  className="border-2 border-[#2B475B] rounded-md font-poppins pl-12"
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
                <Input
                  className="border-2 border-[#2B475B] rounded-md font-poppins pl-12"
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
              <div className="relative flex items-center w-full">
                <RiLockPasswordFill className="absolute text-2xl text-[#2B475B] mx-4" />
                <Input
                  className="border-2 border-[#2B475B] rounded-md font-poppins pl-12"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword ?? ""}
                  onChange={handleChange}
                />
              </div>
              {errors.confirmPassword && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            {errorMessage && (
              <p className="font-poppins text-red-700 text-xs md:text-md w-full">
                {errorMessage}
              </p>
            )}
            <Button
              className="bg-[#2B475B] text-white text-xs md:text-md hover:bg-[#335369] w-full"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Link
              to={"/log-in"}
              className="font-poppins font-semibold text-xs md:text-md lg:text-lg text-[#335369] hover:underline"
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
