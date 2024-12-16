// components/EditorsPick.js
export default function EditorsPick() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 space-x-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-2">EDITOR’S PICK</h2>
        <p className="text-center text-gray-500 font-bold mb-6">
          Problems trying to resolve the conflict between
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* MEN - Larger Section */}
          <div className="relative col-span-1 md:col-span-2">
            <img
              src="/man.jpg"
              alt="Men"
              className="w-full h-[770px] object-cover"
            />
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white w-[170px] h-[48px] text-black font-semibold shadow-md hover:bg-gray-200">
              MEN
            </button>
          </div>

          {/* WOMEN */}
          <div className="relative col-span-1">
            <img
              src="/wom.jpg"
              alt="Women"
              className="w-full h-[770px] object-cover"
            />
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white w-[170px] h-[48px] text-black font-semibold shadow-md hover:bg-gray-200">
              WOMEN
            </button>
          </div>

          {/* ACCESSORIES */}
          <div className="relative col-span-1 items-center justify-center">
           <img
             src="/accessories.png"
             alt="Accessories"
             className="w-full h-[320px] object-cover rounded-md shadow-sm" // Adjust height, add rounded corners and shadow for design match
           />
          <button
  className=" bottom-[12px] left-2/2 transform -translate-x-1/2 
             w-[110px] h-[50px] rounded-sm bg-white py-4 px-8 text-black 
             font-semibold shadow-lg hover:bg-gray-200"
>
  Accessories
</button>

        
           <img
              src="/man1.jpg"
              alt="Kids"
              className="w-full h-[370px] object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white w-[170px] h-[48px] text-black font-semibold shadow-md hover:bg-gray-200">
              KIDS
            </button>
            </div>
          </div>
        </div>
      
    </section>
  );
}
