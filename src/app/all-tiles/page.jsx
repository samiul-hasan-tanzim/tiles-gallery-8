'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "../loading";

const AllTilesPage = () => {
    const [tiles, setTiles] = useState([]);
    const [search, setSearch] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://tiles-gallery-api.onrender.com/tiles", { cache: 'no-store' })
            .then((res) => res.json())
            .then((data) => {
                setTiles(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);


    if (loading) {
        return (
            Loading()
        );
    }


    const filteredTiles = tiles.filter((tile) =>
        tile.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="px-6 md:px-12 lg:px-20 py-10 space-y-10">

            <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    All Tiles Gallery
                </h1>
                <p className="text-gray-500 text-sm md:text-base">
                    Explore premium tile designs for every kind of space
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                <input
                    type="text"
                    placeholder="Search tiles by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-5 py-3 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredTiles.map((tile) => (
                    <div
                        key={tile.id}
                        className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
                    >
                        <div className="h-52 overflow-hidden">
                            <Image
                                src={tile.image}
                                alt={tile.title}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="p-4 space-y-2">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {tile.title}
                            </h2>

                            <p className="text-xs text-gray-500">
                                {tile.creator}
                            </p>

                            <button
                                onClick={() => router.push(`/tile/${tile.id}`)}
                                className="w-full mt-3 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
                            >
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredTiles.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-16 text-center space-y-3">

                    <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-2xl">😕</span>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-700">
                        No Tiles Found
                    </h2>

                    <p className="text-sm text-gray-400 max-w-sm">
                        We could not find any tiles matching your search. Try a different keyword or explore our collection.
                    </p>

                </div>
            )}
        </div>
    );
};

export default AllTilesPage;