export const getSinglePro = async (id: string) =>{
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();
    return data;
}