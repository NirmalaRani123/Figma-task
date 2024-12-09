export default function BestsellerProducts() {
    const products = [
      {
        id: 1,
        name: "Graphic Design",
        department: "English Department",
        price: "$16.44 - $64.44",
        image: "/man1.jpg",
      },
      {
        id: 2,
        name: "Web Design",
        department: "Marketing Department",
        price: "$16.44 - $64.44",
        image: "/man2.jpg",
      },
      {
        id: 3,
        name: "Logo Design",
        department: "Branding Department",
        price: "$16.44 - $64.44",
        image: "/man3.jpg",
      },
      {
        id: 4,
        name: "UX/UI Design",
        department: "Product Department",
        price: "$16.44 - $64.44",
        image: "/man4.jpg",
      },
      {
        id: 5,
        name: "Branding Design",
        department: "Creative Department",
        price: "$16.44 - $64.44",
        image: "/wo1.jpg",
      },
      {
        id: 6,
        name: "App Design",
        department: "Tech Department",
        price: "$16.44 - $64.44",
        image: "/wo2.jpg",
      },
      {
        id: 7,
        name: "Product Strategy",
        department: "Sales Department",
        price: "$16.44 - $64.44",
        image: "/wo3.jpg",
      },
      {
        id: 8,
        name: "Marketing Strategy",
        department: "Sales Department",
        price: "$16.44 - $64.44",
        image: "/man5.jpg",
      },
    ];
  
    return (
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">BESTSELLER PRODUCTS</h2>
            <p className="text-gray-500 text-sm md:text-base">
              Problems trying to resolve the conflict between
            </p>
          </div>
  
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.department}</p>
                  <p className="text-primary font-semibold mt-2">{product.price}</p>
                  {/* Dots for Indicators */}
                  <div className="flex space-x-1 mt-2">
                    {[...Array(4)].map((_, index) => (
                      <span
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === 0 ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  