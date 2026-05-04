import Image from "next/image";
import Link from "next/link";

const HighestRated = async ({ data }) => {
    // console.log(data)
    // const res = await fetch('https://tiles-gallery-api.onrender.com/tiles', { cache: 'no-store' });
    // const rated = await res.json();

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full">
                {
                    data.slice(15, 19).map((item) => (
                        <div
                            key={item.id}
                            className="rounded-2xl overflow-hidden bg-white shadow-md border flex flex-col"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                                />

                                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                    ⭐ {item.rating}
                                </div>

                                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">
                                    ${item.price}
                                </div>
                            </div>

                            <div className="p-4 flex flex-col flex-1">
                                <h2 className="font-semibold">{item.title}</h2>

                                <p className="text-xs text-gray-500 mt-1">
                                    {item.creator} • {item.category}
                                </p>

                                <p className="text-sm mt-2 text-gray-600">
                                    {item.description}
                                </p>

                                <div className="flex gap-2 flex-wrap mt-3">
                                    {
                                        item.tags?.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`${tag.color} text-white text-xs px-2 py-1 rounded`}
                                            >
                                                {tag.label}
                                            </span>
                                        ))
                                    }
                                </div>

                                <Link href={`tile/${item.id}`} className="mt-auto">
                                    <button className="w-full mt-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg">
                                        View Rating
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HighestRated;