'use client'

import { BackArrow } from "@/icons/icons";
import { useRouter } from "next/navigation";

const BackBtn = () => {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className="flex items-center justify-center gap-2 w-24 group rounded-lg border h-12 hover:bg-gray-100 transition-all duration-300"><BackArrow className="group-hover:-translate-x-1 transition-all duration-300 ease-in-out" /> Back</button>
    )
}

export default BackBtn;