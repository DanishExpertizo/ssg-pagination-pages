'use client'

import { PaginationInterface } from '@/interface/interface';
import { useRouter } from 'next/navigation';
import NavButton from './NavButton';
import PageButton from './PaginationBtn';
import TravelButton from './TravelButton';

export default function Pagination({ totalPages, currentPage }: PaginationInterface) {
    const router = useRouter()

    const handlePageChange = (page: number) => {
        router.push(`/page/${page}`)
    }

    const renderPageButtons = () => {
        const buttons = []

        // if (currentPage > 2) buttons.push(<Ellipsis key="start-ellipsis" />);

        if (currentPage > 1) buttons.push(<PageButton key={currentPage - 1} page={currentPage - 1} isCurrent={false} handlePageChange={handlePageChange} />);

        buttons.push(<PageButton key={currentPage} page={currentPage} isCurrent={true} handlePageChange={handlePageChange} />);

        if (currentPage < totalPages) buttons.push(<PageButton key={currentPage + 1} page={currentPage + 1} isCurrent={false} handlePageChange={handlePageChange} />);

        // if (currentPage < totalPages - 1) buttons.push(<Ellipsis key="end-ellipsis" />)

        return buttons
    }

    return (
        <nav className="flex items-center justify-center space-x-2">
            <TravelButton disabled={currentPage === 1} direction="prev" handlePageChange={() => handlePageChange(1)} />
            <NavButton direction="prev" disabled={currentPage === 1} currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPageButtons()}

            <NavButton direction="next" disabled={currentPage === totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <TravelButton disabled={currentPage === totalPages} direction="next" handlePageChange={() => handlePageChange(totalPages)} />
        </nav>
    )
}