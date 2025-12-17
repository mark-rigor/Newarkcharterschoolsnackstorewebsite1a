import { Plus } from "lucide-react";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

export function MenuItem({ name, description, price }: MenuItemProps) {
  return (
    <div className="group bg-white rounded-xl p-5 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#C8102E] transform hover:-translate-y-1 cursor-pointer">
      <div className="flex justify-between items-start gap-3 mb-2">
        <h4 className="text-[#003D7A] flex-1 group-hover:text-[#C8102E] transition-colors">
          {name}
        </h4>
        <div className="flex flex-col items-end gap-1">
          <span className="font-bold text-[#C8102E] whitespace-nowrap">{price}</span>
          <button 
            className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#003D7A] text-white p-1 rounded-lg hover:bg-[#002855]"
            aria-label="Add to cart"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
