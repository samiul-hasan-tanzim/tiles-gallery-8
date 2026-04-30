import React from "react";
import FeaturedTilesCard from "./FeaturedTilesCard";

const FeaturedTiles = () => {
    return (
        <section className="mt-30 px-2 md:px-12 lg:px-20">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                    Featured Tiles
                </h2>

                <div className="w-16 h-0.5 bg-black mx-auto rounded-full" />

                <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    Where style meets surface — discover tiles that transform spaces with
                    elegance, texture, and timeless design.
                </p>
            </div>

            <FeaturedTilesCard />
        </section>
    );
};

export default FeaturedTiles;