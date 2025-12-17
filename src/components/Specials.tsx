import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tag, TrendingUp, Zap, ShoppingCart } from "lucide-react";

export function Specials() {
  const featured = [
    {
      id: 1,
      title: "Combo Deal",
      description: "Chip bag, drink, and candy bar",
      price: "$4.00",
      originalPrice: "$5.50",
      image: "https://images.unsplash.com/photo-1585341840941-98553e474d84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFja3MlMjBjaGlwcyUyMGNhbmR5fGVufDF8fHx8MTc2NTkyNjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Tag,
      tag: "Save $1.50",
      badge: "Best Value"
    },
    {
      id: 2,
      title: "Fresh Today",
      description: "Fruit cups and veggie packs",
      price: "$2.50",
      image: "https://images.unsplash.com/photo-1670607231914-605c7b94edd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc25hY2tzJTIwZnJ1aXR8ZW58MXx8fHwxNzY1OTI2NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: TrendingUp,
      tag: "Healthy",
      badge: "Popular"
    },
    {
      id: 3,
      title: "Energy Boost",
      description: "Sports drink + protein bar",
      price: "$4.50",
      originalPrice: "$6.00",
      image: "https://images.unsplash.com/photo-1577695464142-e3a24f4e88f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlua3MlMjBiZXZlcmFnZXMlMjBib3R0bGVzfGVufDF8fHx8MTc2NTkyNjQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Zap,
      tag: "Power Up",
      badge: "Trending"
    }
  ];

  return (
    <section id="deals" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8102E]/10 px-4 py-2 rounded-full mb-4">
            <Tag className="w-4 h-4 text-[#C8102E]" />
            <span className="text-sm font-bold text-[#C8102E]">LIMITED TIME</span>
          </div>
          <h2 className="mb-4 text-[#003D7A]">Today's Special Deals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Save big with our combo deals! Limited quantities available - first come, first served 🎯
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featured.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C8102E] transform hover:-translate-y-2"
              >
                {/* Badge */}
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-[#003D7A] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    {item.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#C8102E] text-white px-3 py-1 rounded-full flex items-center gap-1 z-10 shadow-lg">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-bold">{item.tag}</span>
                  </div>
                  
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-[#003D7A] group-hover:text-[#C8102E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#C8102E]">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                    {item.originalPrice && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-bold">
                        Save ${(parseFloat(item.originalPrice.slice(1)) - parseFloat(item.price.slice(1))).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-[#003D7A] text-white px-4 py-3 rounded-xl hover:bg-[#002855] transition-all duration-300 font-semibold flex items-center justify-center gap-2 group-hover:scale-105 transform shadow-lg">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-[#003D7A] hover:text-[#C8102E] font-semibold transition-colors group"
          >
            View Full Menu
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
