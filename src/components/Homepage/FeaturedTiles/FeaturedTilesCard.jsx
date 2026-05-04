import Image from "next/image";
import Link from "next/link";

const FeaturedTilesCard = async () => {

    const dataRes = await fetch('https://tiles-gallery-api.onrender.com/featuredTiles', { cache: 'no-store' })
    const tiles = await dataRes.json()
    // console.log(tiles)

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {tiles.map((tile) => (
                <div key={tile.id} className="rounded-2xl overflow-hidden bg-white shadow-md border flex flex-col">
                    <div className="h-56 overflow-hidden relative">
                        <Image src={tile.image} alt={tile.title} width={500} height={500} className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-1000" />

                        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">
                            ${tile.price}
                        </div>

                        <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded text-white ${tile.inStock ? "bg-green-500" : "bg-red-500"}`}>
                            {tile.inStock ? "In Stock" : "Out of Stock"}
                        </div>
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                        <h2 className="font-semibold">{tile.title}</h2>

                        <p className="text-xs text-gray-500 mt-1">{tile.creator} • {tile.category}</p>

                        <p className="text-sm mt-2 text-gray-600">{tile.description}</p>

                        <div className="flex gap-2 flex-wrap mt-3">
                            {tile.tags?.map((tag, i) => (
                                <span key={i} className={`${tag.color} text-white text-xs px-2 py-1 rounded`}>
                                    {tag.label}
                                </span>
                            ))}
                        </div>

                        <Link href={`tile/${tile.id}`} className="mt-auto">
                            <button className="w-full mt-3 bg-black text-white py-2 rounded-lg">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedTilesCard;