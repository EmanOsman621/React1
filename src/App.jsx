import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronLeft,
  ChevronRight,
  Star,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("WOMEN");
  const [cartCount, setCartCount] = useState(0);

  const categories = ["WOMEN", "MEN", "SHOES", "BAGS", "ACCESSORIES"];

  const products = [
    {
      id: 1,
      title: "adidas X Pop Polo shirt, navy / blue",
      price: "$95.00",
      tag: "JACKETS",
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      title: "adidas X Pop TRX Vintage, navy / white",
      price: "$120.00",
      tag: "JACKETS",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      title: "adidas X Pop Beckenbauer Track Jacket",
      price: "$135.00",
      tag: "JACKETS",
      rating: true,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 4,
      title: "adidas X Pop Classic t-shirt, grey / navy",
      price: "$65.00",
      tag: "JACKETS",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 5,
      title: "adidas X Pop SL Cap, navy / white",
      price: "$45.00",
      tag: "JACKETS",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 6,
      title: "Butter Yast Pullover Hood, denim",
      price: "$125.00",
      tag: "JACKETS",
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 7,
      title: "Plano Pup Pull t-shirt, white",
      price: "$60.00",
      tag: "JACKETS",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 8,
      title: "Carhartt L/S Deadbeat-Knock Knock Sweat",
      price: "$110.00",
      tag: "JACKETS",
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=500",
    },
  ];

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header Navigation */}
      <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-6 lg:gap-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Shop
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pages
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Logo */}
        <div className="text-2xl font-serif tracking-widest font-bold">
          Mixtas
        </div>

        {/* User Utilities */}
        <div className="flex items-center gap-5 text-gray-300">
          <button className="hover:text-white transition-colors">
            <User size={20} />
          </button>
          <button className="hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-white transition-colors relative">
            <Heart size={20} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button className="hover:text-white transition-colors relative flex items-center gap-1">
            <ShoppingBag size={20} />
            <span className="bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white px-6 py-4 border-b border-slate-800 flex flex-col gap-3">
          <a href="#" className="text-sm font-medium py-1 hover:text-blue-400">
            Home
          </a>
          <a href="#" className="text-sm font-medium py-1 hover:text-blue-400">
            Shop
          </a>
          <a href="#" className="text-sm font-medium py-1 hover:text-blue-400">
            Pages
          </a>
          <a href="#" className="text-sm font-medium py-1 hover:text-blue-400">
            Blog
          </a>
          <a href="#" className="text-sm font-medium py-1 hover:text-blue-400">
            Contact Us
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden h-[500px] lg:h-[600px] flex items-center">
        {/* Background Split / Image Simulation */}
        <div
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-0"></div>

        <div className="container mx-auto px-6 lg:px-16 z-10 flex items-center justify-between w-full">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3 block">
              Urban Edge
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Jackets for the Modern Man
            </h1>
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-3 rounded-none transition-all duration-200 text-sm tracking-wider uppercase shadow-lg">
              Discovery Now
            </button>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-all backdrop-blur-sm">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-all backdrop-blur-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-normal mb-8">New Arrivals</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-xs tracking-widest font-semibold text-gray-500">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 border-b-2 transition-all ${activeCategory === cat ? "border-gray-900 text-gray-900" : "border-transparent hover:text-gray-900"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={handleAddToCart}
                  className="absolute bottom-4 left-4 right-4 bg-gray-900 text-white text-xs uppercase tracking-wider py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={14} /> Quick Add
                </button>
              </div>

              <div className="text-[11px] text-gray-400 uppercase tracking-widest mb-1">
                {product.tag}
              </div>
              <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-1">
                {product.title}
              </h3>

              {product.rating && (
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              )}

              <div className="text-sm font-semibold text-gray-900">
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banners Section */}
      <section className="pb-20 px-4 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1 */}
        <div className="relative bg-slate-100 overflow-hidden min-h-[450px] flex items-end p-8 lg:p-12 group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="relative z-10 text-white">
            <span className="text-[11px] uppercase tracking-widest opacity-80 mb-2 block">
              Ethereal Elegance
            </span>
            <h3 className="text-3xl font-serif font-bold mb-6">
              Where Dreams Meet Couture
            </h3>
            <button className="bg-white text-gray-955 text-xs uppercase tracking-widest px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative bg-slate-100 overflow-hidden min-h-[450px] flex items-end p-8 lg:p-12 group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="relative z-10 text-white">
            <span className="text-[11px] uppercase tracking-widest opacity-80 mb-2 block">
              Radiant Reverie
            </span>
            <h3 className="text-3xl font-serif font-bold mb-6">
              Enchanting Styles for Every Woman
            </h3>
            <button className="bg-white text-gray-900 text-xs uppercase tracking-widest px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12 px-6 border-t border-slate-800 text-center text-sm">
        <p>© 2026 Mixtas Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
