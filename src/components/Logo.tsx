import powerWalkLogo from "../assets/images/power-walk-logo.png";
import { cn } from "../lib/utils";

type LogoType = {
  className?: string;
};

const Logo = ({ className }: LogoType) => {
  return (
    <>
      <img
        src={powerWalkLogo}
        className={cn(
          "w-[100px] h-[100px] 2xl:w-[200px] 2xl:h-[200px]",
          className
        )}
      />
    </>
  );
};

export default Logo;
