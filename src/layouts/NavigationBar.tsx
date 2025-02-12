// import Picture from "../components/Picture";
// import AdminPhoto from "../assets/images/Admin-Profile-Vector-PNG-Isolated-HD.png";
import { useUser } from "../context/UserContext";

const NavigationBar = () => {
  const { user } = useUser();
  return (
    <>
      <div className="bg-[#FEFEFE] flex items-center justify-end border-b-[1px] border-black z-0 h-[80px] w-full">
        <div className="flex items-center gap-2 px-6 lg:px-10 cursor-pointer">
          <label className="font-poppins text-xs md:text-md lg:text-lg">
            Welcome,{" "}
            <b>{user ? `${user.firstname} ${user.lastname}` : "Admin"}</b>
          </label>
          {/* <Picture
            className="rounded-full h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
            source={AdminPhoto}
          /> */}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
