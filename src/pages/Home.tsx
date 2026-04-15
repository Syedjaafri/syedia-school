import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaBook, FaUsers, FaTrophy, FaStar, FaArrowRight,
  FaChalkboardTeacher, FaLaptop, FaPaintBrush, FaLeaf
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function StatCard({ value, label, icon }: { value: number; label: string; icon: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
    >
      <div className="text-4xl text-indigo-600 mb-2">{icon}</div>
      <div className="text-4xl font-extrabold text-indigo-900">
        {inView ? <CountUp end={value} duration={2} /> : "0"}+
      </div>
      <p className="text-gray-500 font-medium mt-1">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });

  return (
    <div className="pt-[88px]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-900/75 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.span variants={fadeUp} className="inline-block bg-yellow-400 text-indigo-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              A Unit of Syedia Group of Institutions
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Welcome to <br />
              <span className="text-yellow-400">Syedia Oriental</span>
              <br />
              <span className="text-3xl sm:text-4xl font-bold">Nursery & Primary School</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-indigo-200 text-lg mb-8 leading-relaxed">
              Where education evolves — nurturing curious minds, building character, and empowering the next generation of leaders through excellence and values.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/admissions" className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg flex items-center gap-2">
                Apply for Admission <FaArrowRight />
              </Link>
              <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-bold px-8 py-4 rounded-full text-base transition-all flex items-center gap-2">
                Learn More <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-0.5 h-8 bg-white/40 rounded-full" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50">
        <motion.div ref={statsRef} initial="hidden" animate={statsInView ? "visible" : "hidden"} variants={stagger} className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value={500} label="Happy Students" icon={<FaUsers />} />
          <StatCard value={30} label="Expert Teachers" icon={<FaChalkboardTeacher />} />
          <StatCard value={30} label="Years of Excellence" icon={<FaTrophy />} />
          <StatCard value={20} label="Awards Won" icon={<FaStar />} />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-yellow-500 font-bold uppercase tracking-widest text-sm">About Our School</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Education is Evolving — We Rise to the Challenge
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
              Syedia Oriental Nursery and Primary School is committed to providing a world-class foundational education. Under the umbrella of the Syedia Group of Institutions, our school empowers students to share their knowledge, learn, and grow.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
              We need to elevate our platforms, methods, and resources to rise to the challenges of the future — and at Syedia Oriental, that's exactly what we do every single day.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/about" className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-6 py-3 rounded-full transition-all">
                See More <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <img src="/public/images/og-school.png" alt="School Building" className="rounded-3xl shadow-2xl w-full object-cover h-96" />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-indigo-900 rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-extrabold">30+</p>
              <p className="text-sm font-semibold">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activity Lineup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-yellow-500 font-bold uppercase tracking-widest text-sm">What We Offer</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>Activity Lineup</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3 text-lg">Elevate Education</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "FUTURE-TALK", desc: "Forums and lectures facilitated by experiencing educators who inspire the next generation.", img: "/images/students-classroom.jpg", color: "text-indigo-600" },
              { num: "02", title: "VISUALIZING LEARNING", desc: "Insight and foresight sharing through digital room discussions and smart board sessions.", img: "/images/digital-learning.jpg", color: "text-yellow-600" },
              { num: "03", title: "MAKING REALITY", desc: "Awarding and recognition of excellence in education — celebrating every milestone.", img: "/images/kids-activity.jpg", color: "text-green-600" },
            ].map((item) => (
              <motion.div key={item.num} variants={fadeUp} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="overflow-hidden h-52">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-4xl font-extrabold text-gray-100 mb-2">{item.num}</p>
                  <h3 className={`font-bold text-lg mb-2 ${item.color}`}>{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Our Programs</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>Learning at Every Stage</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaLeaf />, label: "Creche / Pre-Nursery", desc: "Safe, nurturing care for our youngest learners aged 6 months – 2 years.", color: "bg-pink-500" },
              { icon: <FaPaintBrush />, label: "Nursery 1 & 2", desc: "Play-based learning that sparks creativity and cognitive development.", color: "bg-yellow-500" },
              { icon: <FaBook />, label: "Primary 1 – 3", desc: "Strong foundation in literacy, numeracy, and critical thinking skills.", color: "bg-green-500" },
              { icon: <FaLaptop />, label: "Primary 4 – 6", desc: "Advanced curriculum with STEM, digital literacy, and leadership training.", color: "bg-indigo-500" },
            ].map((prog, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl p-6 text-center transition-all group">
                <div className={`${prog.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {prog.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{prog.label}</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Testimonials</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>What Parents Say</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mrs. Aisha Bello", role: "Parent of Primary 3 Student", text: "Syedia Oriental has transformed my child's love for learning. The teachers are dedicated and the environment is truly nurturing." },
              { name: "Mr. Emmanuel Okafor", role: "Parent of Nursery 2 Student", text: "I've seen incredible growth in my daughter since she joined. The school's holistic approach to education is simply outstanding." },
              { name: "Mrs. Fatima Suleiman", role: "Parent of Primary 5 Student", text: "The best decision we made was enrolling our son here. He's thriving academically and socially. We highly recommend Syedia!" },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-indigo-50 rounded-2xl p-8 relative">
                <span className="text-6xl text-indigo-200 font-serif absolute top-4 right-6">"</span>
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-lg">{t.name[0]}</div>
                  <div>
                    <p className="font-bold text-indigo-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, j) => <FaStar key={j} className="text-yellow-400 text-sm" />)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Join the Syedia Family?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-indigo-800 text-lg mb-8">
            Admissions are now open for the 2024/2025 academic session. Secure your child's spot today!
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2">
              Apply for Admission <FaArrowRight />
            </Link>
            <Link to="/contact" className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2">
              Contact Us <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}