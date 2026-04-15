import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://syedia-school.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      <section className="py-24 bg-indigo-900 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block bg-yellow-400 text-indigo-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }} className="text-indigo-200 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for enquiries, admissions, or to schedule a school visit.
          </motion.p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaMapMarkerAlt className="text-3xl text-indigo-600" />, label: "Our Address", info: "VSA Nagar, 3rd Street, Rakkiyapalayam Pirivu, Maniyakarampalayam, Kangeyam Main Road, Tiruppur", bg: "bg-indigo-50 border-indigo-200" },
              { icon: <FaPhone className="text-3xl text-yellow-500" />, label: "Phone Numbers", info: "+91 9597099199", bg: "bg-yellow-50 border-yellow-200" },
              { icon: <FaEnvelope className="text-3xl text-green-500" />, label: "Email Address", info: "syediagroup@gmail.com", bg: "bg-green-50 border-green-200" },
              { icon: <FaClock className="text-3xl text-purple-500" />, label: "School Hours", info: "Mon–Fri: 9:00am – 4:00pm\nSat: 9:00am – 12:00pm", bg: "bg-purple-50 border-purple-200" },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className={`${card.bg} border rounded-2xl p-6 text-center`}>
                <div className="flex justify-center mb-3">{card.icon}</div>
                <p className="font-bold text-indigo-900 mb-2">{card.label}</p>
                <p className="text-gray-600 text-sm whitespace-pre-line">{card.info}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-indigo-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Send Us a Message
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mb-8">We'll respond within 24–48 hours on working days.</motion.p>

            {submitted ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-green-50 border-2 border-green-200 rounded-3xl p-12">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you very soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="your@email.com" />
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="+91 9597099199" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                      <option value="">Select subject</option>
                      <option>General Enquiry</option>
                      <option>Admission Information</option>
                      <option>School Fees</option>
                      <option>Schedule a Visit</option>
                      <option>Complaint / Feedback</option>
                    </select>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Write your message here..." />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <button type="submit" disabled={loading} className="w-full bg-indigo-700 hover:bg-indigo-800 disabled:bg-indigo-400 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base">
                    {loading ? (
                      <><span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" /> Sending...</>
                    ) : (
                      <><FaCheckCircle /> Send Message</>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl font-extrabold text-indigo-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Find Us
            </h2>
            <p className="text-gray-500 mb-8">Visit us Monday to Saturday during school hours.</p>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-80 bg-indigo-100 flex items-center justify-center">
              <iframe
                title="School Location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.953522034631!2d77.9345!3d11.1085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0b2e5e6b7%3A0x4b1e5a8e5c5e5e5e!2sVSA+Nagar%2C+Tiruppur%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1234567890"                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* FAQ */}
            <div className="mt-8 space-y-4">
              <h3 className="font-bold text-indigo-900 text-xl">Frequently Asked</h3>
              {[
                { q: "When do admissions open?", a: "Admissions for each session begin in September. Early applications are encouraged." },
                { q: "Is there a school bus service?", a: "Yes, we provide school bus services covering major routes. Contact us for route details." },
                { q: "Do you accept mid-term transfers?", a: "Yes, mid-term admissions are considered on a case-by-case basis depending on space availability." },
              ].map((faq, i) => (
                <div key={i} className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                  <p className="font-semibold text-indigo-900 text-sm mb-1">{faq.q}</p>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 