import { cn } from "../lib/utils";

type buttonType = {
  children: any;
  className?: string;
  onClick?: any;
};

const Button = ({ children, className, onClick }: buttonType) => {
  return (
    <>
      <button
        className={cn(
          "bg-[#385A65] font-poppins text-xs md:text-md lg:text-lg text-white py-2 px-5 rounded-full cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
