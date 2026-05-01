'use client';
import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';


const dataRes = await fetch('https://tiles-gallery-api.onrender.com/tiles', { cache: 'no-store' })
const data = await dataRes.json()
console.log(data)



const Hero = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16 py-10 my-20">
                <div className="space-y-5">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">Discover Your Perfect Aesthetic </h1>
                    <p className="text-gray-600 text-lg">
                        Curated premium tile designs for modern interiors.
                        Transform your space with high-quality textures and geometric patterns.
                    </p>
                    <Link href="/" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        Browse Now
                    </Link>
                </div>
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        className="rounded-xl overflow-hidden"
                    >
                        {
                            data.slice(0, 4).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="relative w-full h-75 md:h-112.5">
                                        <Image
                                            src={item.image}
                                            alt="slider image"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Hero;