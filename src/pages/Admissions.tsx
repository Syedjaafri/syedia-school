import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCalendarAlt, FaFileAlt, FaUserGraduate, FaArrowRight } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Admissions() {
  const [form, setForm] = useState({
    parentName: "", childName: "", dob: "", gender: "", level: "", phone: "", email: "", address: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://syedia-school.onrender.com/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
      } else {
        setLoading(false);
        alert('Error: ' + data.message);
      }
    } catch (error) {
      setLoading(false);
      alert('❌ Cannot connect to server!');
    }
  };

  return (
    <div className="pt-[88px]">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-500 to-yellow-400 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Admissions 2026/2027
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }} className="text-indigo-800 text-lg max-w-2xl mx-auto">
            Secure your child's place at Syedia Oriental Nursery & Primary School. Applications are now open!
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Admission Process
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3">Simple, transparent, and straightforward</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <FaFileAlt />, title: "Submit Application", desc: "Fill out the online or paper application form with your child's details.", color: "bg-indigo-600" },
              { step: "02", icon: <FaCalendarAlt />, title: "Schedule Assessment", desc: "Book a date for your child's entrance assessment and school tour.", color: "bg-yellow-500" },
              { step: "03", icon: <FaUserGraduate />, title: "Entrance Assessment", desc: "A friendly, age-appropriate assessment to understand your child's needs.", color: "bg-green-500" },
              { step: "04", icon: <FaCheckCircle />, title: "Admission Offer", desc: "Receive your admission letter and complete enrolment documentation.", color: "bg-pink-500" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center relative">
                <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg`}>
                  {s.icon}
                </div>
                <span className="text-5xl font-extrabold text-gray-100 absolute top-0 right-0">{s.step}</span>
                <h3 className="font-bold text-indigo-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                {i < 3 && <FaArrowRight className="hidden lg:block absolute top-6 -right-3 text-gray-300 text-xl" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-indigo-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Requirements & Documents
              </motion.h2>
              <motion.div variants={stagger} className="space-y-3">
                {[
                  "Completed admission application form",
                  "Child's birth certificate (original & photocopy)",
                  "Recent passport photograph (4 copies)",
                  "Previous school report card (if applicable)",
                  "Immunisation / health records",
                  "Parent/Guardian valid ID card",
                  "Proof of address (utility bill or letter)",
                  "Completed medical form",
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div>
              <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-indigo-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                School Fees & Levels
              </motion.h2>
              <motion.div variants={stagger} className="space-y-4">
                {[
                  { level: "Creche / Pre-Nursery", fee: " ", term: "per term", color: "border-pink-400" },
                  { level: "Nursery 1 & 2", term: "per term", color: "border-yellow-400" },
                  { level: "Primary 1 – 3", term: "per term", color: "border-green-400" },
                  { level: "Primary 4 – 6", term: "per term", color: "border-indigo-400" },
                ].map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className={`bg-white border-l-4 ${f.color} rounded-xl p-4 shadow-sm flex justify-between items-center`}>
                    <div>
                      <p className="font-semibold text-indigo-900">{f.level}</p>
                      <p className="text-xs text-gray-500">{f.term}</p>
                    </div>
                    <span className="text-2xl font-extrabold text-indigo-700">{f.fee}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="text-xs text-gray-400 mt-4">
                * Fees include tuition, books, and basic school materials. Additional charges may apply for uniforms, excursions, and extracurricular activities.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-indigo-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Apply Online
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3">Fill out the form below to begin your child's admission journey</motion.p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-green-50 border-2 border-green-200 rounded-3xl p-12">
              <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
              <p className="text-green-700">Thank you for applying to Syedia Oriental. We will contact you within 2–3 working days to schedule your child's assessment.</p>
            </motion.div>
          ) : (
            <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Parent/Guardian Name *</label>
                  <input name="parentName" value={form.parentName} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Full name" />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Child's Full Name *</label>
                  <input name="childName" value={form.childName} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Child's full name" />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth *</label>
                  <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Gender *</label>
                  <select name="gender" value={form.gender} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Applying for Level *</label>
                  <select name="level" value={form.level} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    <option value="">Select level</option>
                    <option>Creche / Pre-Nursery</option>
                    <option>Nursery 1</option>
                    <option>Nursery 2</option>
                    <option>Primary 1</option>
                    <option>Primary 2</option>
                    <option>Primary 3</option>
                    <option>Primary 4</option>
                    <option>Primary 5</option>
                    <option>Primary 6</option>
                  </select>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="+234 800 000 0000" />
                </motion.div>
              </div>
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="your@email.com" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Home Address</label>
                <input name="address" value={form.address} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Street, City, State" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Information</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Any special needs, medical conditions, or questions..." />
              </motion.div>
              <motion.div variants={fadeUp}>
                <button type="submit" disabled={loading} className="w-full bg-indigo-700 hover:bg-indigo-800 disabled:bg-indigo-400 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base">
                  {loading ? (
                    <><span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" /> Submitting...</>
                  ) : (
                    <><FaCheckCircle /> Submit Application</>
                  )}
                </button>
              </motion.div>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}