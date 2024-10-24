import { buttonType } from "../types/buttonType";

const Button = ({ children, className, onClick }: buttonType) => {
    return (
        <>
            <button className={`${className} font-poppins text-xs md:text-sm lg:text-lg border-2 border-black py-1 px-5 rounded-full`} onClick={onClick}>{children}</button>
        </>
    )
}

export default Button 
