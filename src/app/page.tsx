import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                🍜 Moshi Ramen
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="/menu" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Menu</a>
                <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Authentic Japanese
              <span className="text-orange-600 dark:text-orange-400 block">Ramen Experience</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the rich flavors of traditional Japanese ramen crafted with premium ingredients and authentic techniques. 
              From rich tonkotsu to spicy miso, we bring Japan to your bowl.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                Order Now
              </button>
              <a href="/menu" className="border-2 border-orange-600 text-orange-600 dark:text-orange-400 hover:bg-orange-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block text-center">
                View Menu
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 dark:bg-orange-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 dark:bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Moshi Ramen?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're committed to delivering an authentic Japanese ramen experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-orange-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🍜</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Authentic Recipes</h3>
              <p className="text-gray-600 dark:text-gray-300">Traditional Japanese recipes passed down through generations, using only the finest ingredients.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-orange-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Service</h3>
              <p className="text-gray-600 dark:text-gray-300">Quick preparation without compromising quality. Your perfect bowl of ramen in minutes.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-orange-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">Fresh ingredients, handmade noodles, and rich broths simmered for hours for maximum flavor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Signature Bowls
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover our carefully crafted ramen varieties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-6xl">🍜</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tonkotsu Ramen</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Rich pork bone broth with tender chashu pork, soft-boiled egg, and fresh vegetables.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">$12.99</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">Order</button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                <span className="text-6xl">🌶️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Spicy Miso Ramen</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Spicy miso broth with ground pork, bean sprouts, and a perfect kick of heat.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">$11.99</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">Order</button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-6xl">🥢</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Shoyu Ramen</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Classic soy sauce based broth with seaweed, bamboo shoots, and green onions.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">$10.99</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real reviews from real ramen lovers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The best ramen I've had outside of Japan! The tonkotsu broth is incredibly rich and flavorful. I come here at least twice a week."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 dark:bg-orange-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Sarah Chen</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Regular Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Amazing spicy miso ramen! The perfect balance of heat and flavor. The noodles are perfectly cooked every time."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 dark:bg-orange-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Mike Rodriguez</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Food Blogger</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Authentic Japanese experience right here in the city. The shoyu ramen reminds me of my trip to Tokyo. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 dark:bg-orange-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 dark:text-orange-400 font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Alex Kim</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Traveler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We'd love to hear from you
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 dark:text-orange-400">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                    <p className="text-gray-600 dark:text-gray-300">123 Ramen Street, Tokyo District</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 dark:text-orange-400">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">(555) 123-RAMEN</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 dark:text-orange-400">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">hello@moshiramen.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 dark:text-orange-400">🕒</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Hours</p>
                    <p className="text-gray-600 dark:text-gray-300">Mon-Sun: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-orange-400 mb-4">🍜 Moshi Ramen</div>
              <p className="text-gray-400 mb-4">
                Bringing authentic Japanese ramen experience to your neighborhood. 
                Crafted with love, tradition, and the finest ingredients.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors">Features</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Menu</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-orange-400 transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Ramen Street</li>
                <li>Tokyo District</li>
                <li>(555) 123-RAMEN</li>
                <li>hello@moshiramen.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Moshi Ramen. All rights reserved. Made with ❤️ and lots of noodles.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
