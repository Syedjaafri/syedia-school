import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-indigo-700 p-2 rounded-full">
              <FaGraduationCap className="text-yellow-400 text-2xl" />
            </div>
            <div>
              <p className="font-bold text-white text-sm uppercase">Syedia Oriental</p>
              <p className="text-xs text-indigo-300">Nursery & Primary School</p>
            </div>
          </div>
          <p className="text-indigo-300 text-sm leading-relaxed mb-4">
            Nurturing young minds with excellence, values, and a passion for lifelong learning. A unit of Syedia Group of Institutions.
          </p>
          <div className="flex gap-3">
            {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="bg-indigo-800 hover:bg-yellow-400 hover:text-indigo-900 text-white w-9 h-9 rounded-full flex items-center justify-center transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-yellow-400 mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-indigo-300 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Academics", path: "/academics" },
              { label: "Admissions", path: "/admissions" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="text-yellow-500">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-bold text-yellow-400 mb-4 text-lg">Our Programs</h4>
          <ul className="space-y-2 text-indigo-300 text-sm">
            {["Creche / Daycare", "Pre-Nursery", "Nursery 1 & 2", "Primary 1 – 6"].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="text-yellow-500">›</span> {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-yellow-400 mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-3 text-indigo-300 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1 shrink-0" />
              <span>VSA Nagar, 3rd Street, Rakkiyapalayam Pirivu, Maniyakarampalayam, Kangeyam Main Road, Tiruppur</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-yellow-400 shrink-0" />
              <span>+91 9597099199</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 shrink-0" />
              <span>syediagroup@gmail.com</span>
            </li>
          </ul>
          <div className="mt-5 bg-indigo-800 rounded-xl p-4">
            <p className="text-xs text-indigo-300 mb-2">School Hours</p>
            <p className="text-sm font-semibold">Mon – Fri: 9:00am – 4:00pm</p>
            <p className="text-xs text-indigo-300 mt-1">Saturday: 9:00am – 12:00pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-indigo-800 py-4 text-center text-xs text-indigo-400">
        © {new Date().getFullYear()} Syedia Oriental Nursery & Primary School. All rights reserved. | A Unit of Syedia Group of Institutions
      </div>
    </footer>
  );
}