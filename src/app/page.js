import FeaturedTiles from "@/components/Homepage/FeaturedTiles/FeaturedTiles";
import Hero from "@/components/Homepage/Hero/Hero";
import MarqueeText from "@/components/Homepage/Marquee/MarqueeText";
import ProductDiscovery from "@/components/Homepage/ProductDiscovery/ProductDiscovery";

export default function Home() {

  return (
    <div>
      <Hero />
      <MarqueeText />
      <FeaturedTiles />
      <ProductDiscovery />
    </div>
  );
}
