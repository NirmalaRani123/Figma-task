export default function HeroSection() {
    return (
      <section className="bg-cyan-500 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="uppercase text-sm font-medium mb-2">Summer 2020</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              New Collection
            </h1>
            <p className="text-lg mb-6">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300">
              Shop Now
            </button>
          </div>
  
          {/* Right Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/hero.png"
              alt="Hero Image"
              className="w-full max-w-md mx-auto md:max-w-full"
            />
          </div>
        </div>
      </section>
    );
  }
  