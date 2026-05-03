import { Tabs } from '@heroui/react';
import React from 'react';
import { BiRightTopArrowCircle } from 'react-icons/bi';
import { FaFire } from 'react-icons/fa';
import TrendingNow from './TrendingNow';
import HighestRated from './HighestRated';
import TilesMarquee from './TilesMarquee';

const ProductDiscovery = async () => {
    const res = await fetch('https://tiles-gallery-api.onrender.com/tiles', { cache: 'no-store' });
    const data = await res.json();

    const trendingData = data.filter(item => item.price > 60);
    const ratedData = data.filter(item => item.inStock === true);

    return (
        <div className='container mx-auto mt-30'>
            <Tabs className="w-full" variant="secondary">
                <Tabs.ListContainer>
                    <Tabs.List aria-label="Options">
                        <Tabs.Tab id="overview">
                            <span className='flex gap-1 items-center justify-center'><FaFire /> Trending Now</span>
                            <Tabs.Indicator />
                        </Tabs.Tab>
                        <Tabs.Tab id="analytics">
                            <span className='flex gap-1 items-center justify-center'><BiRightTopArrowCircle /> Highest Rated</span>
                            <Tabs.Indicator />
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs.ListContainer>
                <div className='w-full'>
                    <Tabs.Panel className="pt-4 w-full" id="overview">
                        <TrendingNow data={data} />
                        <TilesMarquee data={trendingData} type="trending" />
                    </Tabs.Panel>
                    <Tabs.Panel className="pt-4" id="analytics">
                        <HighestRated data={data} />
                        <TilesMarquee data={ratedData} type="rated" />
                    </Tabs.Panel>
                </div>
            </Tabs>
        </div>
    );
};

export default ProductDiscovery;