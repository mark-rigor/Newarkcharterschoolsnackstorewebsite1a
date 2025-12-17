import { Clock, MapPin, DollarSign, Users, Star, Heart } from "lucide-react";

export function About() {
  return (
    <section id="hours" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#C8102E]/10 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-[#C8102E]" />
              <span className="text-sm font-bold text-[#C8102E]">STUDENT RUN</span>
            </div>
            <h2 className="mb-4 text-[#003D7A]">Store Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your Patriots Snack Store is here to keep you fueled throughout the school day!
              Run by dedicated student volunteers with faculty supervision. 🎓
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Hours Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#003D7A] transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#003D7A] to-[#0055aa] text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-[#003D7A]">Store Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Before School</span>
                      <span className="font-bold text-[#003D7A]">7:30 - 7:55 AM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Lunch Period A</span>
                      <span className="font-bold text-[#003D7A]">11:15 - 11:45 AM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Lunch Period B</span>
                      <span className="font-bold text-[#003D7A]">12:00 - 12:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">After School</span>
                      <span className="font-bold text-[#003D7A]">2:45 - 3:15 PM</span>
                    </div>
                    <p className="text-sm text-gray-500 pt-2 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                      Closed on half days and holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C8102E] transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#C8102E] to-red-700 text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-[#003D7A]">Find Us</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="font-bold text-[#003D7A] mb-2">Main Building - Cafeteria</p>
                      <p className="text-gray-600 text-sm mb-1">📍 Next to the lunch line</p>
                      <p className="text-gray-600 text-sm">🚩 Look for the red Patriots banner</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <p className="text-sm text-blue-700 flex items-center gap-2">
                        <span className="text-lg">💡</span>
                        Can't find us? Ask any student council member!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#003D7A] transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <DollarSign className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-[#003D7A]">Payment Options</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-gray-700">Cash (exact change appreciated)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-gray-700">Student ID / Lunch Account</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-gray-700">Venmo (@NewarkCharterSnacks)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-gray-700">School Payment Portal</span>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 mt-3">
                      <p className="text-sm text-yellow-800 font-medium">💳 Card readers coming soon!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C8102E] transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-[#003D7A]">Get Involved</h3>
                  <p className="text-gray-600 mb-4">
                    Interested in volunteering at the snack store? 
                    We're always looking for responsible students to help run operations!
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>Earn community service hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>Learn business & customer service skills</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>Build your resume</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Support Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#003D7A] via-purple-600 to-[#C8102E] text-white rounded-3xl p-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Heart className="w-8 h-8 text-pink-200" />
              </div>
              <h3 className="mb-4">Support Your School</h3>
              <p className="mb-6 max-w-2xl mx-auto text-blue-100">
                Every purchase at the Patriots Snack Store helps fund student activities, clubs, 
                sports teams, and school improvement projects. Thank you for your support!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                  🏀 Athletics
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                  🎓 Student Council
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                  🎨 Arts Programs
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                  🚌 Class Trips
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
