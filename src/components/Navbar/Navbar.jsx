'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '@/assets/tiles.png'
import { NavLinks } from "./NavLins";
import { work_sans } from "@/app/layout";
import { Avatar, Button, Spinner } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const nabLinks = NavLinks

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    // console.log(user)

    return (
        <nav className={`${work_sans.className} sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg`}>
            <div className="container mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <Link href={'/'} className="size-12 md:size-full flex items-center justify-center">
                            <Image src={logo} width={80} height={80} alt="logo" />
                        </Link>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        {
                            nabLinks.map((navLink, i) => {
                                const isActive = pathName === navLink.path;
                                return (
                                    <li key={i} className="relative group cursor-pointer">
                                        <Link href={navLink.path} className={`${isActive && "border-b-2 border-black"} inline-block`}>
                                            {navLink.name}
                                        </Link>
                                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        user ? (
                            <div className="flex gap-3 items-center">
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src={user.image} />
                                    <Avatar.Fallback>
                                        <div className="flex flex-col items-center gap-2">
                                            <Spinner color="accent" />
                                        </div>
                                    </Avatar.Fallback>
                                </Avatar>
                                <Button onClick={() => authClient.signOut()} className={'rounded-md'} variant="danger">Sign out</Button>
                            </div>
                        ) : <Link
                            href="/signin"
                            className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-md transition active:scale-95 active:opacity-80"
                        >
                            Sign In
                        </Link>
                    }
                </header>
            </div>


            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {
                            nabLinks.map((nabLinks, i) => (
                                <li key={i}>
                                    <Link href={nabLinks.path} className="block py-2">
                                        {nabLinks.name}
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;