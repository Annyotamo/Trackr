"use client";

import React, { useState } from "react";
import { Settings2 } from "lucide-react"; // Import the Menu icon from lucide-react
import Link from "next/link"; // Assuming you are using Next.js for routing
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="py-10 px-5">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className={`text-lg md:text-5xl`}>
                    A simple tracker application
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 outline-0 shadow-md border rounded-2xl hover:cursor-pointer">
                        <Settings2 size={35} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-10 mt-2 p-5 ">
                        <DropdownMenuLabel className="text-md">Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="mt-2 p-2 text-md">Profile</DropdownMenuItem>
                        <DropdownMenuItem className="mt-2 p-2 text-md">Billing</DropdownMenuItem>
                        <DropdownMenuItem className="mt-2 p-2 text-md">Team</DropdownMenuItem>
                        <DropdownMenuItem className="mt-2 p-2 text-md">Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
