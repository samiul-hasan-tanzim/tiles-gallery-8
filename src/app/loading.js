export default function Loading() {

    return (
        <div className="h-screen w-full flex items-center justify-center bg-white">
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@400&display=swap');`}
            </style>

            <div className="flex flex-col items-center gap-6">
                <h1 className="text-3xl md:text-5xl text-gray-800" style={{ fontFamily: "Playfair Display", letterSpacing: "2px" }}>
                    Tiles Gallery
                </h1>

                <div className="w-40 h-0.75 bg-gray-200 overflow-hidden rounded">
                    <div className="h-full bg-gray-800 animate-loadingBar"></div>
                </div>
                <p className="text-gray-400 text-sm" style={{ fontFamily: "Poppins" }}>
                    Loading your design experience...
                </p>
            </div>
            <style>
                {`@keyframes loadingBar { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); }} .animate-loadingBar { width: 50%; animation: loadingBar 1.2s linear infinite;}`}
            </style>
        </div>
    )
}