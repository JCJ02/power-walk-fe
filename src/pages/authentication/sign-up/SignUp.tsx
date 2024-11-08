import { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up - Power Walk Technology";
  }, []);
  return <>
    <div className="flex justify-center items-center h-screen w-full">
      Sign Up
    </div>
  </>;
};

export default SignUp;
