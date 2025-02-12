import { useEffect, useState } from "react";
import Button from "../../../components/Button";
// import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/power-walk-bg.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Footer from "../../../layouts/Footer";
import Logo from "../../../components/Logo";
import useLogInForm from "./hooks/useLogInForm";
import { Input } from "../../../components/ui/input";
import useLoginMutation from "./hooks/useLogInMutation";
import MoonLoader from "react-spinners/MoonLoader";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { values, errors, handleChange, validateForm } = useLogInForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = useLoginMutation();

  const togglePasswordVisibility = (event: React.FormEvent) => {
    event.preventDefault();
    setShowPassword((type) => !type);
  };

  const handleLogIn = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const isValid = validateForm(); // Ensure it updates the state
    if (!isValid) {
      setLoading(false);
      return;
    }
    if (validateForm()) {
      loginMutation.mutate(values, {
        onSuccess: () => {
          setLoading(false);
        },
        onError: () => {
          setLoading(false);
          const message = "Oops, Wrong Email Address or Password!";
          setErrorMessage(message);
        },
      });
    }
  };

  useEffect(() => {
    document.title = "Log In - Power Walk Technology";
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <img
          className="hidden lg:flex bg-cover bg-no-repeat transform scale-1 h-screen w-3/5"
          src={backgroundImage}
        />
        <div className="bg-[#FFFFFF] flex flex-col justify-center lg:justify-start xl:justify-center items-center gap-5 px-10 md:py-10 xl:py-20 2xl:py-0 2xl:px-36 h-screen w-full">
          <Logo />
          <form
            className="flex flex-col items-center gap-5 w-full md:w-2/5 lg:w-full"
            onSubmit={handleLogIn}
          >
            <div className="flex flex-col items-center">
              <h1 className="font-poppins font-bold text-md md:text-lg 2xl:text-xl">
                Welcome Admin!
              </h1>
              <p className="font-poppins text-xs md:text-md 2xl:text-xl">
                Sign In
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="relative flex items-center w-full">
                <MdEmail className="absolute text-lg text-[#2B475B] mx-4" />
                <Input
                  className="border-2 border-[#2B475B] rounded-lg font-poppins pl-12 w-full"
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
                <RiLockPasswordFill className="absolute text-lg text-[#2B475B] mx-4" />
                <Input
                  className="border-2 border-[#2B475B] rounded-lg font-poppins pl-12 w-full"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <Button
                  className="bg-transparent absolute right-0 py-0 px-3 text-xl text-[#2B475B]"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                </Button>
              </div>
              {errors.password && (
                <p className="font-poppins self-start text-xs md:text-md text-red-700">
                  {errors.password}
                </p>
              )}
              {errorMessage && (
                <p className="font-poppins text-red-700 text-xs md:text-md w-full">
                  {errorMessage}
                </p>
              )}
            </div>
            <Button
              className={`bg-[#2B475B] hover:bg-[#335369] w-full ${
                loading ? "bg-[#a1b2be]" : "bg-[#2B475B]"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <MoonLoader color="#FFFFFF" size={15} speedMultiplier={0.5} />
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
            {/* <div className="flex justify-center items-center gap-10 w-full">
              <p className="font-poppins text-xs md:text-md 2xl:text-lg">
                Don't have an account?
              </p>
              <Link
                to={"/sign-up"}
                className="font-poppins font-semibold text-xs md:text-md 2xl:text-lg text-[#335369] hover:underline"
              >
                Sign Up
              </Link>
            </div>
            <Link
              to={"*"}
              className="font-poppins text-xs md:text-md 2xl:text-lg hover:underline"
            >
              Forgot Password?
            </Link> */}
          </form>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LogIn;
