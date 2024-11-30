import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/power-walk-bg.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { LogInType, logInSchema } from "../../../utils/validations/AdminSchema";
import { Bounce, toast } from 'react-toastify';
import Footer from "../../../layouts/Footer";

const LogIn = () => {
  useEffect(() => {
    document.title = "Log In - Power Walk Technology";
  }, []);

  const defaultValues: LogInType = {
    email: "",
    password: ""
  }

  const [values, setValues] = useState<LogInType>(defaultValues);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  }

  const handleLogIn = (event: React.FormEvent) => {
    event.preventDefault();

    const result = logInSchema.safeParse(values);

    if (result.error) {
      const errorMessages = result.error.flatten().fieldErrors;
      setErrors({
        email: errorMessages.email?.[0],
        password: errorMessages.password?.[0]
      });
    } else {
      setErrors({});
      setValues(defaultValues);
      toast.success('Successfully Sign In!', {
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
  }
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
              <input
                className="border-2 border-[#2B475B] rounded-lg font-poppins text-xs md:text-md lg:text-lg py-1 pl-8 w-full"
                placeholder="E-mail Address"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="font-poppins self-start text-xs md:text-md lg:text-lg text-red-700">{errors.email}</p>}
            <div className="relative flex items-center w-full">
              <RiLockPasswordFill className="absolute text-2xl text-[#2B475B] mx-1" />
              <input
                className="border-2 border-[#2B475B] rounded-lg font-poppins text-xs md:text-md lg:text-lg py-1 pl-8 w-full"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p className="font-poppins self-start text-xs md:text-md lg:text-lg text-red-700">{errors.password}</p>}
          </div>
          <Link to={"*"} className="font-poppins text-xs md:text-md lg:text-lg hover:underline">Forgot Password?</Link>
          <Button
            className="bg-[#2B475B] text-white text-xs md:text-md lg:text-lg hover:bg-[#335369] w-full"
            onClick={handleLogIn}
          >
            Sign In
          </Button>
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="font-poppins text-xs md:text-md lg:text-lg">Don't have an account?</p>
            <Link to={"/sign-up"} className="bg-[#FFFFFF] font-poppins border-2 border-[#2B475B] text-center text-xs md:text-md lg:text-lg rounded-full py-1 hover:bg-[#2B475B] hover:text-white ease-in-out duration-500 w-full">Sign Up</Link>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  </>;
};

export default LogIn;
