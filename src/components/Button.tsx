import { cn } from "../lib/utils";

type buttonType = {
  children: any;
  className?: string;
  onClick?: any;
  disabled?: any;
  type?: any;
};

const Button = ({
  children,
  className,
  onClick,
  disabled,
  type,
}: buttonType) => {
  return (
    <>
      <button
        className={cn(
          "bg-[#385A65] font-poppins text-xs md:text-md lg:text-lg text-white py-2 px-5 rounded-full cursor-pointer",
          className
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
