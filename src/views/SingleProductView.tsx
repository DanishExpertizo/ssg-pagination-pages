import { Product, SingleProInterface } from '@/interface/interface';
import Image from 'next/image';

export default function SingleProduct({ product }: SingleProInterface) {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={400}
                            height={400}
                            className="h-48 w-full object-cover md:h-full md:w-48"
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {product.category}
                        </div>
                        <h1 className="mt-1 text-3xl font-bold text-gray-900 leading-tight">
                            {product.title}
                        </h1>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                        <div className="mt-4">
                            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                            <span className="ml-2 text-sm text-green-600">
                                {product.discountPercentage}% off
                            </span>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-gray-600 mr-2">Rating:</span>
                            <span className="text-yellow-500">{'\u2605'.repeat(Math.round(product.rating))}</span>
                            <span className="ml-1 text-gray-600">({product.rating.toFixed(1)})</span>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-gray-600 mr-2">Brand:</span>
                            <span className="font-semibold">{product.brand}</span>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-gray-600 mr-2">In Stock:</span>
                            <span className="font-semibold">{product.stock}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

