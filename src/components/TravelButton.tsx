import { BackwardArrow, ForwardArrow } from '@/icons/icons'
import React from 'react'

const TravelButton = ({ disabled, direction, handlePageChange }: any) => {
    return (
        <button className="h-10 px-3 flex items-center justify-center border rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed group" disabled={disabled} onClick={handlePageChange}>
            {direction === 'prev' ? <BackwardArrow className={`${!disabled && "group-hover:-translate-x-1 transition-all duration-300"}`} /> : <ForwardArrow className={`${!disabled && "group-hover:translate-x-1 transition-all duration-300"}`} />}
        </button>
    )
}

export default TravelButton