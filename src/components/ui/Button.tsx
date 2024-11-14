type buttonType = {
  children: string;
  className?: string;
  onClick?: any;
};

const Button = ({ children, className, onClick }: buttonType) => {
  return (
    <>
      <button
        className={`${className} font-poppins border-2 border-[#2B475B] text-xs md:text-sm lg:text-lg py-1 px-5 rounded-full`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
