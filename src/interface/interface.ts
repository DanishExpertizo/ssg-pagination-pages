export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

export interface HomePageProps {
    products: Product[];
    currentPage: number;
    totalPages: number;
}

export interface PageProps {
    params: { page: string };
}