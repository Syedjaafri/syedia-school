import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHeart, FaCheckCircle } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function About() {
  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="relative py-24 bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white" style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }} />
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-yellow-400 text-indigo-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Who We Are
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }} className="text-indigo-200 text-lg max-w-2xl mx-auto">
            A proud unit of Syedia Group of Institutions, committed to shaping brilliant futures through quality education, strong values, and innovative learning.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Our Story</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Building Foundations Since Day One
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
              Syedia Oriental Nursery and Primary School was established with a clear mandate: to provide world-class early childhood and primary education in a safe, stimulating, and nurturing environment.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
              As a proud unit of the Syedia Group of Institutions, we stand on the shoulders of a legacy of academic excellence. Our school believes that every child deserves the best start in life, and our programmes are designed to fulfil that promise.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              With a team of passionate educators, state-of-the-art facilities, and a curriculum that blends global best practices with local relevance, we are raising confident, curious, and compassionate learners.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/school-building.jpg" alt="School" className="rounded-2xl shadow-lg col-span-2 h-56 object-cover" />
              <img src="/images/students-classroom.jpg" alt="Students" className="rounded-2xl shadow-lg h-40 object-cover" />
              <img src="/images/kids-activity.jpg" alt="Activities" className="rounded-2xl shadow-lg h-40 object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Mission, Vision & Values
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBullseye className="text-4xl text-indigo-600" />,
                title: "Our Mission",
                bg: "bg-indigo-50 border-indigo-200",
                text: "To provide holistic, quality education that nurtures the intellectual, moral, physical, and social development of every child in our care, preparing them for lifelong success.",
              },
              {
                icon: <FaEye className="text-4xl text-yellow-500" />,
                title: "Our Vision",
                bg: "bg-yellow-50 border-yellow-200",
                text: "To be the leading nursery and primary school institution in Nigeria, recognized for academic excellence, character development, and the production of future-ready learners.",
              },
              {
                icon: <FaHeart className="text-4xl text-red-500" />,
                title: "Our Values",
                bg: "bg-red-50 border-red-200",
                text: "Integrity, Excellence, Innovation, Respect, Compassion, and Community. These core values guide every interaction, lesson, and decision at Syedia Oriental.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className={`${item.bg} border rounded-2xl p-8 text-center`}>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl text-indigo-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose Syedia Oriental?
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Experienced & certified teaching staff",
              "Safe and child-friendly learning environment",
              "Blended learning with modern technology",
              "Strong moral and character education",
              "Extracurricular and sports programmes",
              "Regular parent-teacher communication",
              "Government-approved curriculum",
              "Nutritious school meals programme",
              "Award-winning academic record",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 text-white bg-white/10 rounded-xl p-4 border border-white/10">
                <FaCheckCircle className="text-yellow-400 mt-1 shrink-0 text-lg" />
                <span className="text-indigo-100">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Leadership</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Message from the Principal
            </motion.h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src="/images/principal.jpg" alt="Principal" className="rounded-3xl shadow-2xl w-full h-96 object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4 text-lg italic">
                "At Syedia Oriental, we believe every child is uniquely gifted. Our role is to discover, nurture, and amplify those gifts within an environment that is loving, structured, and intellectually stimulating."
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                Education is evolving, and we need to elevate our platforms, methods, and resources to rise to the challenges of the future. We are not just teaching children — we are shaping the leaders, innovators, and problem-solvers of tomorrow.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-6">
                I warmly invite you to join the Syedia Oriental family. Together, let us build a brighter future — one child at a time.
              </motion.p>
              <motion.div variants={fadeUp}>
                <p className="font-bold text-indigo-900 text-lg">Mrs. Syedia Al-Rasheed</p>
                <p className="text-gray-500 text-sm">Principal, Syedia Oriental Nursery & Primary School</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
