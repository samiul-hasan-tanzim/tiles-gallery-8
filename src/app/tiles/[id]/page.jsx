'use client';

import React, { useEffect, useState, use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import Image from 'next/image';
import Loading from '@/app/loading';

const TilesDetailesPage = ({ params }) => {
    const { id } = use(params);

    const [tile, setTile] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://tiles-gallery-api.onrender.com/tiles/${id}`)
            .then(res => res.json())
            .then(data => setTile(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            Loading()
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

            <div>
                <Swiper
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                >
                    {
                        tile.thumbnails.map((img, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    src={img}
                                    width={500}
                                    height={500}
                                    alt='thumnaul'
                                    className="w-full h-100 object-cover"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    watchSlidesProgress
                    className="mt-4"
                >
                    {
                        tile.thumbnails.map((img, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    src={img}
                                    width={500}
                                    height={500}
                                    alt=''
                                    className="h-20 w-full object-cover rounded-lg cursor-pointer border hover:scale-105 transition"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className="space-y-4">

                <h1 className="text-3xl font-bold text-gray-800">{tile.title}</h1>
                <p className="text-gray-500">{tile.creator}</p>
                <p className="text-gray-700">{tile.styleDescription}</p>

                <div className="flex flex-wrap gap-2">
                    {
                        tile.tags.map((tag, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))
                    }
                </div>

                <div className="text-xl font-semibold text-black">
                    {
                        tile.currency} {tile.price
                    }
                </div>

                <p className={`text-sm font-medium ${tile.inStock ? "text-green-600" : "text-red-500"}`}>
                    {
                        tile.inStock ? "In Stock" : "Out of Stock"
                    }
                </p>

                {
                    tile.inStock ? (
                        <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    ) : (
                        <button className="pointer-events-none opacity-50 mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                            Add to Cart
                        </button>
                    )
                }

            </div>

        </div>
    );
};

export default TilesDetailesPage;