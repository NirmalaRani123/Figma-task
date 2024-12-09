export default function EditorsPick() {
    return (
      <section className="bg-white py-10 px-10">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">EDITOR'S PICK</h2>
            <p className="text-gray-500 text-2xl md:text-base">
              Problems trying to resolve the conflict between
            </p>
          </div>
  
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* MEN */}
            <div className="relative">
              <img
                src="/man.jpg"
                alt="Men"
                className="w-full h-full max-h-80 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                <span className="text-lg font-semibold">MEN</span>
              </div>
            </div>
  
            {/* WOMEN */}
            <div className="relative">
              <img
                src="/wom.jpg"
                alt="Women"
                className="w-full h-full max-h-80 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                <span className="text-lg font-semibold">WOMEN</span>
              </div>
            </div>
  
            {/* ACCESSORIES */}
            <div className="relative">
              <img
                src="/accessories.png"
                alt="Accessories"
                className="w-full h-full max-h-80 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                <span className="text-lg font-semibold">ACCESSORIES</span>
              </div>
            </div>
  
            {/* KIDS */}
            <div className="relative">
              <img
                src="/man1.jpg"
                alt="Kids"
                className="w-full h-full max-h-80 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 text-center py-2">
                <span className="text-lg font-semibold">KIDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  