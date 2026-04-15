import { motion } from "framer-motion";
import { FaBook, FaFlask, FaMusic, FaRunning, FaLaptop, FaPaintBrush, FaLeaf, FaGlobe } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Academics() {
  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-900 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/students-classroom.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-yellow-400 text-indigo-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Academics
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Academic Programmes
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }} className="text-indigo-200 text-lg max-w-2xl mx-auto">
            A comprehensive, child-centred curriculum designed to ignite curiosity, foster creativity, and build the foundations for a lifetime of learning.
          </motion.p>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Levels & Programmes
            </motion.h2>
          </motion.div>
          <div className="space-y-8">
            {[
              {
                level: "Creche / Pre-Nursery",
                age: "6 months – 2 years",
                color: "bg-pink-500",
                light: "bg-pink-50 border-pink-200",
                desc: "A warm, safe, and stimulating environment for our youngest learners. Focus on sensory play, language development, motor skills, and routine.",
                subjects: ["Sensory Play", "Music & Movement", "Early Language", "Routine & Social Skills"],
              },
              {
                level: "Nursery 1 & 2",
                age: "3 – 4 years",
                color: "bg-yellow-500",
                light: "bg-yellow-50 border-yellow-200",
                desc: "Play-based learning that sparks creativity and cognitive development, blending structured activities with free exploration.",
                subjects: ["Phonics & Reading", "Numbers & Counting", "Art & Craft", "Physical Education", "Rhymes & Songs"],
              },
              {
                level: "Primary 1 – 3",
                age: "5 – 8 years",
                color: "bg-green-500",
                light: "bg-green-50 border-green-200",
                desc: "A solid academic foundation with emphasis on literacy, numeracy, and developing a love for reading and discovery.",
                subjects: ["English Language", "Mathematics", "Basic Science", "Social Studies", "Civic Education", "CRK/IRS", "Computer Studies"],
              },
              {
                level: "Primary 4 – 6",
                age: "9 – 12 years",
                color: "bg-indigo-500",
                light: "bg-indigo-50 border-indigo-200",
                desc: "Advanced curriculum with STEM emphasis, leadership development, and preparation for secondary school entrance examinations.",
                subjects: ["English Language", "Mathematics", "Basic Science & Tech", "Social Studies", "Agricultural Science", "French", "Computer Studies", "Physical & Health Education"],
              },
            ].map((prog, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`${prog.light} border rounded-2xl p-8 flex flex-col lg:flex-row gap-8 items-start`}
              >
                <div className="lg:w-1/3">
                  <span className={`${prog.color} text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>{prog.age}</span>
                  <h3 className="text-2xl font-bold text-indigo-900 mt-3 mb-3">{prog.level}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{prog.desc}</p>
                </div>
                <div className="lg:w-2/3">
                  <p className="font-semibold text-indigo-900 mb-3">Subjects Offered:</p>
                  <div className="flex flex-wrap gap-2">
                    {prog.subjects.map((s) => (
                      <span key={s} className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full shadow-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Beyond the Classroom</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Co-curricular Activities
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaMusic />, label: "Music & Choir", color: "bg-pink-100 text-pink-600", desc: "Developing rhythm, creativity, and performance confidence." },
              { icon: <FaRunning />, label: "Sports & Athletics", color: "bg-green-100 text-green-600", desc: "Football, athletics, swimming, and inter-house sports." },
              { icon: <FaPaintBrush />, label: "Arts & Crafts", color: "bg-yellow-100 text-yellow-600", desc: "Painting, drawing, and creative expression workshops." },
              { icon: <FaLaptop />, label: "Computer Club", color: "bg-blue-100 text-blue-600", desc: "Coding basics, digital literacy, and tech exploration." },
              { icon: <FaFlask />, label: "Science Club", color: "bg-purple-100 text-purple-600", desc: "Experiments, discoveries, and STEM competitions." },
              { icon: <FaBook />, label: "Reading Club", color: "bg-orange-100 text-orange-600", desc: "Building a love for books and storytelling." },
              { icon: <FaLeaf />, label: "Gardening Club", color: "bg-emerald-100 text-emerald-600", desc: "Environmental awareness and nature education." },
              { icon: <FaGlobe />, label: "Debate & Public Speaking", color: "bg-indigo-100 text-indigo-600", desc: "Confidence, critical thinking, and communication." },
            ].map((act, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center group">
                <div className={`${act.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {act.icon}
                </div>
                <h3 className="font-bold text-indigo-900 mb-2">{act.label}</h3>
                <p className="text-gray-500 text-sm">{act.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src="/images/digital-learning.jpg" alt="Digital Learning" className="rounded-3xl shadow-2xl w-full h-80 object-cover" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Our Approach</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Visualizing Learning — The Syedia Way
            </motion.h2>
            <motion.p variants={fadeUp} className="text-indigo-200 leading-relaxed mb-4">
              We combine traditional teaching excellence with modern pedagogical tools. Our smart classrooms are equipped with interactive boards, educational software, and multimedia resources.
            </motion.p>
            <motion.p variants={fadeUp} className="text-indigo-200 leading-relaxed mb-6">
              Through project-based learning, collaborative activities, and digital exploration, we ensure that every child not only learns but truly understands and applies knowledge.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-3">
              {["Smart boards in every classroom", "1:20 teacher-to-student ratio", "Individual learning assessments", "Weekly progress reports to parents"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-indigo-100">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
