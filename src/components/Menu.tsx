import { MenuItem } from "./MenuItem";
import { Cookie, Apple, Droplet, IceCream } from "lucide-react";
import { useState } from "react";

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Salty Snacks",
      icon: Cookie,
      color: "bg-orange-500",
      items: [
        {
          name: "Lay's Classic Chips",
          description: "1 oz bag",
          price: "$1.50"
        },
        {
          name: "Doritos (Nacho Cheese or Cool Ranch)",
          description: "1 oz bag",
          price: "$1.75"
        },
        {
          name: "Cheetos Puffs",
          description: "1 oz bag",
          price: "$1.50"
        },
        {
          name: "Pretzels",
          description: "Mini twist bag",
          price: "$1.25"
        },
        {
          name: "Goldfish Crackers",
          description: "Snack pack",
          price: "$1.50"
        },
        {
          name: "Popcorn",
          description: "Butter or white cheddar",
          price: "$1.75"
        },
        {
          name: "Sun Chips",
          description: "Harvest cheddar, 1 oz",
          price: "$1.75"
        },
        {
          name: "Takis",
          description: "Fuego, 1 oz",
          price: "$2.00"
        }
      ]
    },
    {
      name: "Sweet Treats",
      icon: IceCream,
      color: "bg-pink-500",
      items: [
        {
          name: "M&M's (Plain or Peanut)",
          description: "Single pack",
          price: "$1.50"
        },
        {
          name: "Snickers Bar",
          description: "Full size",
          price: "$1.75"
        },
        {
          name: "Reese's Peanut Butter Cups",
          description: "2-pack",
          price: "$1.75"
        },
        {
          name: "Skittles",
          description: "Original or sour",
          price: "$1.50"
        },
        {
          name: "Kit Kat",
          description: "4-bar pack",
          price: "$1.75"
        },
        {
          name: "Twix",
          description: "2-pack",
          price: "$1.75"
        },
        {
          name: "Cookies (Chips Ahoy)",
          description: "Snack pack",
          price: "$1.50"
        },
        {
          name: "Rice Krispies Treat",
          description: "Original",
          price: "$1.25"
        },
        {
          name: "Pop-Tarts",
          description: "2-pack, assorted flavors",
          price: "$2.00"
        },
        {
          name: "Gummy Bears",
          description: "Small bag",
          price: "$1.50"
        }
      ]
    },
    {
      name: "Healthy Options",
      icon: Apple,
      color: "bg-green-500",
      items: [
        {
          name: "Fresh Fruit Cup",
          description: "Seasonal fruit mix",
          price: "$2.50"
        },
        {
          name: "Veggie Pack with Hummus",
          description: "Carrots, celery, cucumbers",
          price: "$3.00"
        },
        {
          name: "Granola Bar",
          description: "Nature Valley or Nutri-Grain",
          price: "$1.50"
        },
        {
          name: "Trail Mix",
          description: "Nuts and dried fruit",
          price: "$2.00"
        },
        {
          name: "String Cheese",
          description: "Mozzarella stick",
          price: "$1.25"
        },
        {
          name: "Fruit Snacks",
          description: "Welch's or Mott's",
          price: "$1.25"
        },
        {
          name: "Apple Sauce Pouch",
          description: "GoGo Squeez",
          price: "$1.50"
        },
        {
          name: "Protein Bar",
          description: "Quest or KIND bar",
          price: "$2.50"
        }
      ]
    },
    {
      name: "Beverages",
      icon: Droplet,
      color: "bg-blue-500",
      items: [
        {
          name: "Water Bottle",
          description: "16.9 oz",
          price: "$1.25"
        },
        {
          name: "Gatorade",
          description: "20 oz, assorted flavors",
          price: "$2.00"
        },
        {
          name: "Powerade",
          description: "20 oz, assorted flavors",
          price: "$2.00"
        },
        {
          name: "Soda (Coke, Sprite, Dr Pepper)",
          description: "12 oz can",
          price: "$1.50"
        },
        {
          name: "Arizona Iced Tea",
          description: "16 oz can",
          price: "$1.75"
        },
        {
          name: "Capri Sun",
          description: "Juice pouch",
          price: "$1.00"
        },
        {
          name: "Chocolate Milk",
          description: "8 oz carton",
          price: "$1.75"
        },
        {
          name: "Orange Juice",
          description: "10 oz bottle",
          price: "$2.00"
        },
        {
          name: "Sparkling Water",
          description: "LaCroix, 12 oz",
          price: "$1.50"
        },
        {
          name: "Energy Drink",
          description: "Red Bull or Monster, 8.4 oz",
          price: "$3.00"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[#003D7A]">Full Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our complete selection of snacks and drinks. All your favorites in one place! 🍕🥤
          </p>

          {/* Category Filter - Horizontal Scroll on Mobile */}
          <div className="flex gap-3 overflow-x-auto pb-4 justify-center snap-x snap-mandatory scrollbar-hide">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap snap-center flex-shrink-0 ${
                    activeCategory === idx
                      ? `${category.color} text-white shadow-lg scale-105`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Display */}
        <div className="max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`${activeCategory === idx ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIdx) => (
                  <MenuItem
                    key={itemIdx}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#003D7A] to-[#C8102E] text-white rounded-2xl p-8 text-center shadow-2xl">
          <h3 className="mb-3">Have a Request?</h3>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Let us know what snacks you'd like to see in the store! We're always looking to add new items based on student feedback.
          </p>
          <button className="bg-white text-[#003D7A] px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:scale-105 transform">
            Submit Request
          </button>
        </div>
      </div>
    </section>
  );
}
