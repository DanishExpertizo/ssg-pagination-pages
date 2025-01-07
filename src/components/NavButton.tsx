import { RightArrow, LeftArrow } from "@/icons/icons";
import { NavButtonInterface } from "@/interface/interface";

const NavButton = ({ direction, disabled, currentPage, handlePageChange }: NavButtonInterface) => {

    return (
        <button
            onClick={() => handlePageChange(direction === 'prev' ? currentPage - 1 : currentPage + 1)}
            disabled={disabled}
            className="h-10 px-3 flex items-center justify-center border rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
            {direction === 'prev' ? <LeftArrow className={`${!disabled && "group-hover:-translate-x-1 transition-all duration-300"}`} /> : < RightArrow className={`${!disabled && "group-hover:translate-x-1 transition-all duration-300"}`} />}
        </button>
    )
}

export default NavButton;