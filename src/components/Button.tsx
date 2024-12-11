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
          "font-poppins border-2 border-[#2B475B] text-xs md:text-md 2xl:text-lg py-2 px-5 rounded-full",
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
