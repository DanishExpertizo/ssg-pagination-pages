import SingleProduct from '@/views/SingleProductView';
import { ProductInterface } from '@/interface/interface';
import { getSinglePro } from '@/utils/getSinglePro';

const Product = async ({ params }: ProductInterface) => {
    const { product } = params;
    const data = await getSinglePro(product);

    return (
        <SingleProduct product={data} />
    )
}

export default Product;