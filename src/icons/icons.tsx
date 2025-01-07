import { IconInterface } from "@/interface/interface";
import { ArrowLeft, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export function RightArrow({ className }: IconInterface) {
    return (
        <ChevronRight className={className ?? ''} />
    )
}

export function LeftArrow({ className }: IconInterface) {
    return (
        <ChevronLeft className={className ?? ''} />
    )
}

export function BackwardArrow({ className }: IconInterface) {
    return (
        <ChevronsLeft className={className ?? ''} />
    )
}

export function ForwardArrow({ className }: IconInterface) {
    return (
        <ChevronsRight className={className ?? ''} />
    )
}

export function BackArrow({ className }: IconInterface) {
    return <ArrowLeft className={className ?? ''} />
}