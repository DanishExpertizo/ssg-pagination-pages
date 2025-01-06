import { getData } from "@/utils/getData";
import Products from "@/views/HomeView";

export default async function Home() {
  const { products, currentPage, totalPages } = await getData(1);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <Products products={products} currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}