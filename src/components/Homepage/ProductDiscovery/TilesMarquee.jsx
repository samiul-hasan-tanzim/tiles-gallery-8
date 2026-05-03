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

const TilesMarquee = ({ data, type = "trending" }) => {
    return (
        <div className="relative bg-white/70 backdrop-blur-lg border-y border-gray-200 py-4 overflow-hidden mb-30">

            <div className="absolute left-0 top-0 h-full w-28 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 h-full w-28 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />

            <Marquee speed={55} pauseOnHover gradient={false}>
                <div className="flex items-center gap-14 px-6 text-gray-800">

                    <span className={`${pacifico.className} text-lg`}>
                        {type === "trending" ? "🔥 Trending Tiles" : "⭐ Highest Rated"}
                    </span>

                    {data?.slice(0, 6).map((item) => (
                        <span key={item.id} className={`${poppins.className} text-sm text-gray-700`}>
                            {item.title}
                        </span>
                    ))}

                    <span className={`${playfair.className} italic text-gray-700`}>
                        Premium Tile Collection
                    </span>

                    <span className={`${poppins.className} tracking-widest text-sm`}>
                        CERAMIC • MARBLE • GRANITE • LUXURY
                    </span>

                </div>
            </Marquee>
        </div>
    );
};

export default TilesMarquee;