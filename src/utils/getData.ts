const POSTS_PER_PAGE = 10;

export async function getData(page: number) {
  const res = await fetch('https://dummyjson.com/products', { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();

  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = data.products.slice(start, start + POSTS_PER_PAGE);
  const totalPages = Math.ceil(data.products.length / POSTS_PER_PAGE);

  return {
    products: paginatedPosts,
    totalPages,
    currentPage: page,
  };
}