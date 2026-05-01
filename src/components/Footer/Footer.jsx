'use client';

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from '@/assets/tiles.png';
import { work_sans, poppins } from "@/app/layout";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={`${work_sans.className} bg-white border-t border-gray-100 pt-12 md:pt-16 pb-8`}>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
                    <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
                        <Link href="/" className="inline-block">
                            <Image
                                src={logo}
                                width={100}
                                height={100}
                                alt="Tiles Gallery Logo"
                                className="opacity-90 hover:opacity-100 transition-opacity w-20 md:w-24"
                            />
                        </Link>
                        <p className="text-gray-500 leading-relaxed max-w-xs text-sm md:text-base">
                            Elevating spaces with premium tile designs. Our curated collection brings together elegance, durability, and timeless aesthetic.
                        </p>
                        <div className="flex gap-4">
                            <a href=""><FaFacebookF /> </a>
                            <a href=""><FaInstagram /> </a>
                            <a href=""><FaTiktok /> </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h4 className={`${poppins.className} font-semibold text-gray-900 mb-6 uppercase tracking-wider text-xs md:text-sm`}>
                            Quick Links
                        </h4>
                        <ul className="space-y-4 text-sm md:text-base">
                            <li><Link href="/" className="text-gray-500 hover:text-black transition-colors">Home</Link></li>
                            <li><Link href="/all-tiles" className="text-gray-500 hover:text-black transition-colors">All Tiles</Link></li>
                            <li><Link href="/profile" className="text-gray-500 hover:text-black transition-colors">My Profile</Link></li>
                            <li><Link href="/about" className="text-gray-500 hover:text-black transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h4 className={`${poppins.className} font-semibold text-gray-900 mb-6 uppercase tracking-wider text-xs md:text-sm`}>
                            Collections
                        </h4>
                        <ul className="space-y-4 text-sm md:text-base">
                            <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Marble Collection</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Ceramic Tiles</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Stone Texture</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-black transition-colors">Modern Minimal</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h4 className={`${poppins.className} font-semibold text-gray-900 mb-6 uppercase tracking-wider text-xs md:text-sm`}>
                            Contact Us
                        </h4>
                        <ul className="space-y-4 text-sm md:text-base">
                            <li className="flex flex-col items-center sm:items-start sm:flex-row gap-3 text-gray-500">
                                <MapPin size={18} className="text-gray-400 shrink-0 mt-1" />
                                <span>123 Design District, Creative Avenue, NY 10001</span>
                            </li>
                            <li className="flex flex-col items-center sm:items-start sm:flex-row gap-3 text-gray-500">
                                <Phone size={18} className="text-gray-400 shrink-0" />
                                <span>+1 (555) 000-0000</span>
                            </li>
                            <li className="flex flex-col items-center sm:items-start sm:flex-row gap-3 text-gray-500">
                                <Mail size={18} className="text-gray-400 shrink-0" />
                                <span>hello@tilesgallery.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
                    </p>
                    <div className="flex gap-6 md:gap-8 text-xs md:text-sm text-gray-400">
                        <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;