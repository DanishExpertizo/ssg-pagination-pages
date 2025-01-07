import { getTotalNum } from "./getTotalNum";

const postsPerPage: number = Number(process.env.NEXT_PUBLIC_POSTS_PER_PAGE) || 10;

export async function getData(page: number) {
    const res = await fetch(`https://dummyjson.com/products/?limit=${postsPerPage}&skip=${(page - 1) * postsPerPage}`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();

    const { totalPages } = await getTotalNum();

    return {
        products: data.products,
        totalPages,
        currentPage: page,
    };
}