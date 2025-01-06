import MyPagination from '@/app/component/Pagination';
import { HomePageProps } from '@/interface/interface';
import Image from 'next/image';

export default function Products({ products, currentPage, totalPages }: HomePageProps) {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
                        <div className="relative h-48">
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                            <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8 space-x-4">
                <MyPagination totalPages={totalPages} currentPage={currentPage} />
            </div>
        </div>
    );
}

