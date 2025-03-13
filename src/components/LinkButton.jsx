"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from '@hugeicons/react';

export default function LinkButton({ content, icon }) {
    return (
        <Button className="bg-dark hover:bg-light hover:text-darkest">
            <Link
                href={"/"}
                className="flex gap-2"
            >
                <HugeiconsIcon icon={icon} />
                <span>{content}</span>
            </Link>
        </Button>
    )
}
