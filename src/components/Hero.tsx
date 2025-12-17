import { Sparkles, TrendingUp, Heart } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#003D7A] via-[#0055aa] to-[#C8102E] text-white py-24 overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C8102E]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold">Open Daily During School Hours</span>
          </div>
          
          <h2 className="mb-6 leading-tight">
            Welcome to Patriots <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300">
              Snack Store
            </span>
          </h2>
          
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Hungry between classes? Grab delicious snacks, refreshing drinks, and sweet treats!
            Your favorite brands at student-friendly prices. All proceeds support school programs! 🎉
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <TrendingUp className="w-4 h-4 text-green-300" />
              <span className="text-sm font-medium">Daily Deals</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Heart className="w-4 h-4 text-pink-300" />
              <span className="text-sm font-medium">Student Run</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">Fresh Daily</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="group bg-[#C8102E] text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transform font-semibold"
            >
              View Full Menu
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="#deals"
              className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 shadow-xl hover:scale-105 transform font-semibold"
            >
              See Today's Deals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
