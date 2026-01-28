
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { useGetPublicNavbarQuery } from "../redux/apis/navbarApi";
import { useGetPublicFooterQuery } from "../redux/apis/footerApi";

export default function PublicFooter() {
  const { data: footer } = useGetPublicFooterQuery();
  const { data: navbar } = useGetPublicNavbarQuery();

  if (!footer || !navbar) return null;

  return (
    <footer className="bg-gradient-to-br from-[#020617] via-[#0B1120] to-black text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* COMPANY INFO */}
        <div className="space-y-5 animate-fade-in">
          <div className="flex items-center gap-4">
            {navbar.logoImage && (
              <div className="bg-white rounded-2xl p-2 shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={navbar.logoImage}
                  alt="Company Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
            )}

            <div>
              <h2 className="text-white font-bold text-xl tracking-wide">
                {footer.companyName}
              </h2>
              <p className="text-orange-400 text-sm font-semibold">
                {footer.tagline}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            {footer.description}
          </p>

          <div className="flex gap-4 pt-2">
            {footer.facebook && <SocialIcon Icon={Facebook} link={footer.facebook} />}
            {footer.twitter && <SocialIcon Icon={Twitter} link={footer.twitter} />}
            {footer.instagram && <SocialIcon Icon={Instagram} link={footer.instagram} />}
            {footer.linkedin && <SocialIcon Icon={Linkedin} link={footer.linkedin} />}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="animate-fade-in delay-100">
          <h3 className="text-white font-semibold mb-4 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {footer.quickLinks?.map((item) => (
              <li
                key={item}
                className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IMPORTANT LINKS */}
        <div className="animate-fade-in delay-200">
          <h3 className="text-white font-semibold mb-4 text-lg">
            Important Links
          </h3>
          <ul className="space-y-2 text-sm">
            {footer.importantLinks?.map((item) => (
              <li
                key={item}
                className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="animate-fade-in delay-300">
          <h3 className="text-white font-semibold mb-4 text-lg">
            Contact Info
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-3 hover:text-white transition">
              <Phone size={16} className="text-orange-400" />
              <span>{footer.phone}</span>
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <Mail size={16} className="text-orange-400" />
              <span>{footer.email}</span>
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <MapPin size={16} className="text-orange-400" />
              <span>{footer.address}</span>
            </li>
          </ul>
        </div>
      </div>
 <button
            onClick={() => window.location.href = "/adminlogin"}
            className="px-3 py-2 mb-16 border border-orange-400 text-orange-400
                       hover:bg-orange-400 hover:text-black transition-all duration-300"
          >
            Admin Login
          </button>
      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            {footer.companyName}
          </span>. All Rights Reserved.
        </p>

        <p className="text-orange-400 mt-2 tracking-wide">
          Designed & Developed by MVAD Eventful Endeavors Pvt Ltd
        </p>
        
      </div>
      
    </footer>
  );
}

/* SOCIAL ICON */
function SocialIcon({ Icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center
                 hover:bg-red-500 hover:scale-110 transition-all duration-300 shadow-md"
    >
      <Icon size={18} className="text-white" />
    </a>
  );
}
