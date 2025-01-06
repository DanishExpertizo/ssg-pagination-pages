export const getTotalNum = async () => {
    const res = await fetch(`https://dummyjson.com/products/`,);
    const data = await res.json();
    if (!res.ok) throw new Error('Failed to fetch data');
    
    const postsPerPage: number = Number(process.env.NEXT_PUBLIC_POSTS_PER_PAGE) || 10;
    const totalPages = Math.ceil(data.total / postsPerPage);
    return totalPages;
}