export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export interface HomePageProps {
    products: Product[];
    currentPage: number;
    totalPages: number;
}

export interface PageProps {
    params: { page: string };
}

export interface PaginationInterface {
    totalPages: number;
    currentPage: number;
}

export interface ProductInterface {
    params: { product: string }
}

export interface SingleProInterface {
    product: Product;
}

export interface NavButtonInterface {
    direction: string;
    disabled: boolean;
    currentPage: number;
    handlePageChange: (page: number) => void;
}

export interface PageButtonInterface {
    children: string | React.ReactNode;
    isActive?: boolean;
    onClick: () => void;
}

export interface IconInterface {
    className?: string;
}

export interface TravelButtonInterface {
    disabled: boolean;
    direction: 'prev' | 'next';
    handlePageChange: () => void;
}