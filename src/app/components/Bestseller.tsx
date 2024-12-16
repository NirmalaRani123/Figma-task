export default function Bestseller() {
    
    return (
      <section className="bg-white py-10">
       <div className="bg-white px-4 md:px-10 py-8">
  {/* Section Header */}
  <h1  className="text-2xl text-gray-500 font-Montserrat text-center mb-8">Featured Products</h1>
  <h2 className="text-3xl font-bold text-center mb-8">BESTSELLER PRODUCTS</h2>
  <h3 className="text-1xl  text-gray-500 font-bold text-center mb-8">Problems trying to resolve the conflict between</h3>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Product Card 1 */}
    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img
        src="/best.jpg"
        alt="Product 1"
        className="w-[239px] h-[427px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">Graphic Design</h3>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-500 ml-2 font-semibold">$6.48</span>
          {/* Color Options */}
        <div className="flex justify-center space-x-2 mt-2">
         <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:opacity-75"></span>
         <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:opacity-75"></span>
         <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:opacity-75"></span>
         <span className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer hover:opacity-75"></span>
        </div>

       </div>
      </div>
    </div>

    {/* Repeat Product Cards */}
    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img
        src="/best1.jpg"
        alt="Product 2"
        className="w-[239px] h-[427px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">Graphic Design</h3>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-500 ml-2 font-semibold">$6.48</span>
          {/* Color Options */}
      <div className="flex justify-center space-x-2 mt-2">
       <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:opacity-75"></span>
       <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:opacity-75"></span>
       <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:opacity-75"></span>
       <span className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer hover:opacity-75"></span>
    </div>

        </div>
      </div>
    </div>

    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img
        src="/wo2.jpg"
        alt="Product 3"
        className="w-[239px] h-[427px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">Graphic Design</h3>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-500 ml-2 font-semibold">$6.48</span>
          {/* Color Options */}
      <div className="flex justify-center space-x-2 mt-2">
       <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:opacity-75"></span>
       <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:opacity-75"></span>
       <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:opacity-75"></span>
       <span className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer hover:opacity-75"></span>
       </div>

        </div>
      </div>
    </div>

    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img
        src="/wo3.jpg"
        alt="Product 3"
        className="w-[239px] h-[427px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">Graphic Design</h3>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-500 ml-2 font-semibold">$6.48</span>
          {/* Color Options */}
      <div className="flex justify-center space-x-2 mt-2">
        <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer hover:opacity-75"></span>
    </div>

        </div>
      </div>
    </div>
    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img
        src="/best2.jpg"
        alt="Product 3"
        className="w-[239px] h-[427px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">Graphic Design</h3>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-500 ml-2 font-semibold">$6.48</span>
          {/* Color Options */}
     <div className="flex justify-center space-x-2 mt-2">
      <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:opacity-75"></span>
      <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:opacity-75"></span>
      <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:opacity-75"></span>
      <span className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer hover:opacity-75"></span>
  </div>

        </div>
      </div>
    </div>
    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img
        src="/wo.jpg"
        alt="Product 3"
        className="w-[239px] h-[427px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">Graphic Design</h3>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-500 ml-2 font-semibold">$6.48</span>
          {/* Color Options */}
      <div className="flex justify-center space-x-2 mt-2">
         <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:opacity-75"></span>
         <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:opacity-75"></span>
         <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:opacity-75"></span>
         <span className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer hover:opacity-75"></span>
    </div>

        </div>
      </div>
    </div>
    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img
        src="/best3.jpg"
        alt="Product 3"
        className="w-[239px] h-[427px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">Graphic Design</h3>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-500 ml-2 font-semibold">$6.48</span>
          {/* Color Options */}
      <div className="flex justify-center space-x-2 mt-2">
        <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer hover:opacity-75"></span>
    </div>

        </div>
      </div>
    </div>
    <div className="flex flex-col items-center border rounded-lg overflow-hidden shadow hover:shadow-lg">
      <img
        src="/best.jpg"
        alt="Product 3"
        className="w-[239px] h-[427px] object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">Graphic Design</h3>
        <p className="text-gray-500 text-sm">English Department</p>
        <div className="mt-2">
          <span className="text-gray-400 line-through">$16.48</span>
          <span className="text-green-500 ml-2 font-semibold">$6.48</span>
          {/* Color Options */}
      <div className="flex justify-center space-x-2 mt-2">
        <span className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-red-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-green-500 cursor-pointer hover:opacity-75"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer hover:opacity-75"></span>
     </div>

        </div>
      </div>
    </div>
  </div>
</div>          
      </section>
    );
  }
  