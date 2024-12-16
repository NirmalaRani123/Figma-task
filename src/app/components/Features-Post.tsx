export default function FeaturedPosts() {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h4 className="text-blue-600 uppercase mb-2 text-sm">Practice Advice</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Posts</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
  
          {/* Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative rounded-lg shadow-lg overflow-hidden">
              {/* NEW Tag */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
              <img
                src="car.jpg" 
                alt="Post 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <p className="text-blue-600 text-sm mb-1">Google Trending New</p>
                <h3 className="font-bold text-lg mb-2">
                  Loudest à la Madison #1 (L'intégral)
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>schedule 22 April 2021</span>
                  <span>10 comments</span>
                </div>
                {/* Learn More Button */}
                <a
                  href="#"
                  className="inline-block text-blue-500 font-bold hover:text-blue-700 transition duration-300"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="relative rounded-lg shadow-lg overflow-hidden">
              {/* NEW Tag */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
              <img
                src="umbrella.jpg" 
                alt="Post 2"
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <p className="text-blue-600 text-sm mb-1">Google Trending New</p>
                <h3 className="font-bold text-lg mb-2">
                  Loudest à la Madison #1 (L'intégral)
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>schedule 22 April 2021</span>
                  <span>10 comments</span>
                </div>
                {/* Learn More Button */}
                <a
                  href="#"
                  className="inline-block text-blue-500 font-bold hover:text-blue-700 transition duration-300"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="relative rounded-lg shadow-lg overflow-hidden">
              {/* NEW Tag */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
              <img
                src="home.jpg"
                alt="Post 3"
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <p className="text-blue-600 text-sm mb-1">Google Trending New</p>
                <h3 className="font-bold text-lg mb-2">
                  Loudest à la Madison #1 (L'intégral)
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>schedule 22 April 2021</span>
                  <span>10 comments</span>
                </div>
                {/* Learn More Button */}
                <a
                  href="#"
                  className="inline-block text-blue-500 font-bold hover:text-blue-700 transition duration-300"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  