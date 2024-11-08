import { useEffect } from "react";

const LogIn = () => {
  useEffect(() => {
    document.title = "Log In - Power Walk Technology";
  }, []);
  return <>
    <div className="flex justify-center items-center h-screen w-full">
      Log In
    </div>
  </>;
};

export default LogIn;
