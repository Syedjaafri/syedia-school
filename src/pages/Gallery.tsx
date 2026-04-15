import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const galleryItems = [
  { id: 1, src: "/images/school-building.jpg", caption: "Our Beautiful School Building", category: "Campus" },
  { id: 2, src: "/images/students-classroom.jpg", caption: "Students in the Classroom", category: "Academic" },
  { id: 3, src: "/images/digital-learning.jpg", caption: "Digital Learning Session", category: "Technology" },
  { id: 4, src: "/images/kids-activity.jpg", caption: "Fun Learning Activities", category: "Activities" },
  { id: 5, src: "/images/hero-banner.jpg", caption: "Happy School Life", category: "Campus" },
  { id: 6, src: "/images/logo.jpg", caption: "School Leadership", category: "Staff" },
  { id: 7, src: "/images/students-classroom.jpg", caption: "Collaborative Learning", category: "Academic" },
  { id: 8, src: "/images/kids-activity.jpg", caption: "Art & Craft Session", category: "Activities" },
  { id: 9, src: "/images/digital-learning.jpg", caption: "Science Class", category: "Technology" },
];

const categories = ["All", "Campus", "Academic", "Technology", "Activities", "Staff"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);
  const currentIndex = filtered.findIndex((i) => i.id === lightbox);
  const prevImage = () => {
    if (currentIndex > 0) setLightbox(filtered[currentIndex - 1].id);
  };
  const nextImage = () => {
    if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1].id);
  };

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/kids-activity.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }} className="text-indigo-200 text-lg max-w-2xl mx-auto">
            A glimpse into life at Syedia Oriental — vibrant, joyful, and full of learning moments.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                filter === cat ? "bg-indigo-700 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
                  onClick={() => openLightbox(item.id)}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="bg-yellow-400 text-indigo-900 text-xs font-bold px-2 py-1 rounded-full w-fit mb-2">{item.category}</span>
                    <p className="text-white font-semibold">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-3xl hover:text-yellow-400 z-10">
              <FaTimes />
            </button>
            {currentIndex > 0 && (
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white text-3xl hover:text-yellow-400 z-10 bg-black/50 p-3 rounded-full">
                <FaChevronLeft />
              </button>
            )}
            {currentIndex < filtered.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white text-3xl hover:text-yellow-400 z-10 bg-black/50 p-3 rounded-full">
                <FaChevronRight />
              </button>
            )}
            <motion.div
              key={lightbox}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img
                src={filtered[currentIndex]?.src}
                alt={filtered[currentIndex]?.caption}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white text-center mt-4 font-semibold">{filtered[currentIndex]?.caption}</p>
              <p className="text-gray-400 text-center text-sm">{currentIndex + 1} / {filtered.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}