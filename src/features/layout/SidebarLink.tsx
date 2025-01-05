"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
    href: string;
    icon: React.ElementType;
    label: string;
}

export const SidebarLink = ({ href, icon, label }: SidebarLinkProps) => {
    const location = usePathname();
    const isActive = location.startsWith('/' + href);
    
    return (
        <Link href={href} className="text-xl">
            <div
                className={`cursor-pointer flex items-center rounded-lg justify-start px-4 py-2 gap-3 transition-colors ${
                    isActive
                        ? "bg-gray-100 border-gray-700 text-gray-900"
                        : "hover:bg-gray-100 text-gray-700"
                }`}
            >
                {icon}
                <span
                    className={`block font-medium transition-colors ${
                        isActive ? "text-gray-900" : "text-gray-700"
                    }`}
                >
                    {label}
                </span>
            </div>
        </Link>
    );
};

export default SidebarLink;