import { PageButtonInterface } from "@/interface/interface";

const PageButton = ({ children, isActive, onClick }: PageButtonInterface) => {

    return (
        <button
            onClick={onClick}
            className={`h-10 px-4 flex items-center justify-center border rounded-lg group ${isActive
                ? 'bg-gray-100 text-gray-700 border-gray-300'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
        >
            {children}
        </button>
    )
}

export default PageButton;