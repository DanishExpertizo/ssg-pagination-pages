import SingleProduct from '@/views/SingleProductView';
import { ProductInterface } from '@/interface/interface';
import { getSinglePro } from '@/utils/getSinglePro';
import { getTotalNum } from '@/utils/getTotalNum';

export async function generateStaticParams() {
    const { totalProducts } = await getTotalNum();
    return Array.from({ length: totalProducts }, (_, i) => ({ product: (i + 1).toString() }));
}

const Product = async ({ params }: ProductInterface) => {
    const { product } = params;
    const data = await getSinglePro(product);

    return (
        <SingleProduct product={data} />
    )
}

export default Product;