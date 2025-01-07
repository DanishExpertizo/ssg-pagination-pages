import { PageButtonInterface } from "@/interface/interface";

const PageButton = ({ page, isCurrent, handlePageChange }: PageButtonInterface) => {

    return (
        <button
            onClick={() => handlePageChange(page)}
            className={`h-10 px-4 flex items-center justify-center border rounded-lg ${isCurrent
                ? 'bg-gray-100 text-gray-700 border-gray-300'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
        >
            {page}
        </button>
    )
}

export default PageButton;