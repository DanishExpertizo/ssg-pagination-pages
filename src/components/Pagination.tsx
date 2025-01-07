'use client'

import { BackwardArrow, ForwardArrow, LeftArrow, RightArrow } from '@/icons/icons';
import { PaginationInterface } from '@/interface/interface';
import { useRouter } from 'next/navigation';
import PageButton from './PaginationBtn';

export default function Pagination({ totalPages, currentPage }: PaginationInterface) {
    const router = useRouter();

    function generateArray(num: number) {
        return [num - 1, num, num + 1];
    }

    const handlePageChange = (page: number) => {
        router.push(`/page/${page}`)
    }

    return (
        <div className="flex">
            {totalPages > 1 ? (
                <div className="flex gap-1 m-2">
                    {currentPage !== 1 && (
                        <PageButton
                            onClick={() => handlePageChange(1)}
                            children={<BackwardArrow className='group-hover:-translate-x-1 transition-all duration-300' />}
                        />
                    )}
                    {currentPage !== 1 && (
                        <PageButton
                            onClick={() => handlePageChange(currentPage - 1)}
                            children={<LeftArrow className='group-hover:-translate-x-1 transition-all duration-300' />}
                        />
                    )}
                    {generateArray(currentPage)
                        .filter((item) => item >= 1 && item <= totalPages)
                        .map((item, index) => {
                            return (
                                <PageButton
                                    isActive={item === currentPage}
                                    onClick={() => handlePageChange(item)}
                                    key={index}
                                    children={item}
                                />
                            );
                        })}
                    {currentPage !== totalPages && (
                        <PageButton
                            onClick={() => handlePageChange(currentPage + 1)}
                            children={<RightArrow className='group-hover:translate-x-1 transition-all duration-300' />}
                        />
                    )}
                    {currentPage !== totalPages && (
                        <PageButton
                            onClick={() => handlePageChange(totalPages)}
                            children={<ForwardArrow className='group-hover:translate-x-1 transition-all duration-300' />}
                        />
                    )}
                </div>
            ) : null}
        </div>
    )
}