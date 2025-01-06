import { PageProps } from "@/interface/interface";
import { getData } from "@/utils/getData";
import Products from "@/views/HomeView";

export async function generateStaticParams() {
    const { totalPages } = await getData(1);
    return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }));
}

export default async function Page({ params }: PageProps) {
    const page = parseInt(params.page);
    const { products, currentPage, totalPages } = await getData(page);

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
            <Products products={products} currentPage={currentPage} totalPages={totalPages} />
        </main>
    );
}