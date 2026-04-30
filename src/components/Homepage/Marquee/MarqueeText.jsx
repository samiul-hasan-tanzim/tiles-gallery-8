"use client";
import Marquee from "react-fast-marquee";
import { Playfair_Display, Poppins, Pacifico } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: "500",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"],
});

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400",
});

const MarqueeText = () => {
    return (
        <div className="relative bg-white/70 backdrop-blur-lg border-y border-gray-200 py-4 overflow-hidden">

            <div className="absolute left-0 top-0 h-full w-28 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />

            <div className="absolute right-0 top-0 h-full w-28 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />

            <Marquee speed={55} pauseOnHover gradient={false}>
                <div className="flex items-center gap-14 px-6 text-gray-800">
                    <span className={`${pacifico.className} text-lg`}>
                        ✨ New Arrival
                    </span>

                    <span className={`${playfair.className} text-base text-gray-700`}>
                        Elegant Marble Collection
                    </span>

                    <span className={`${poppins.className} font-semibold text-gray-600`}>
                        Modern Ceramic Tiles
                    </span>

                    <span className={`${playfair.className} italic text-gray-700`}>
                        Timeless Stone Texture
                    </span>

                    <span className={`${pacifico.className}`}>
                        Crafted for Beautiful Spaces
                    </span>

                    <span className={`${poppins.className} tracking-widest text-sm`}>
                        PREMIUM • MINIMAL • AESTHETIC
                    </span>
                </div>
            </Marquee>
        </div>
    );
};

export default MarqueeText;