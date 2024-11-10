import Picture from "../components/ui/Picture";
import AdminPhoto from "../assets/images/Admin-Profile-Vector-PNG-Isolated-HD.png";

const NavigationBar = () => {
  return (
    <>
      <div className="bg-[#FEFEFE] flex items-center justify-end border-b-2 border-black h-[80px] w-full">
        <div className="flex items-center gap-2 px-5 cursor-pointer">
          <label className="font-poppins text-xs md:text-md lg:text-lg">
            Welcome, <b>Admin</b>
          </label>
          <Picture
            className="rounded-full h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
            source={AdminPhoto}
          />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
