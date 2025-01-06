import Link from 'next/link';
import Image from 'next/image';
import { HomePageProps } from '@/interface/interface';

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
                {currentPage > 1 && (
                    <Link href={`/page/${currentPage - 1}`} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Previous
                    </Link>
                )}
                {
                    Array.from({ length: totalPages }, (_, i) => (
                        <Link key={i} href={`/page/${i + 1}`} className={`px-4 py-2 border border-blue-500 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : ''}`}>
                            {i + 1}
                        </Link>
                    ))
                }
                {currentPage < totalPages && (
                    <Link href={`/page/${currentPage + 1}`} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
}

