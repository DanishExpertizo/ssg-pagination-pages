'use client'
import { PaginationInterface } from '@/interface/interface';
import { Pagination } from '@mui/material';
import { useRouter } from 'next/navigation';

const MyPagination = ({ totalPages, currentPage }: PaginationInterface) => {
    const router = useRouter();

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/page/${value}`);
    };

    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
        />
    );
};

export default MyPagination;
