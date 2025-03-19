"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // Import the Menu icon from lucide-react
import Link from "next/link"; // Assuming you are using Next.js for routing

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="py-10 px-5">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Left Side: Title / Logo (if you have one) */}
                <Link href="/" className="text-lg md:text-3xl">
                    A simple tracker application
                </Link>

                {/* Right Side: Navigation / Actions (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button>Sign In/Up</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}>
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Conditional Rendering) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-100 py-2 px-4">
                    <Button variant="outline" className="w-full justify-center mt-2">
                        Sign In/Up
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
