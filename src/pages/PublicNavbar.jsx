
// import { Phone } from "lucide-react";
// import { useGetPublicNavbarQuery } from "../redux/apis/navbarApi";

// export default function PublicNavbar() {
//   const { data, isLoading } = useGetPublicNavbarQuery();

//   if (isLoading || !data) return null;

//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="flex items-center justify-between h-20">

//           {/* LOGO + BRAND */}
//           <div className="flex items-center gap-3">
//             {data.logoImage ? (
//               <img
//                 src={data.logoImage}
//                 alt="logo"
//                 className="h-14 w-auto object-contain"
//               />
//             ) : (
//               <div className="h-14 w-14 bg-red-500 text-white flex items-center justify-center rounded-md text-xl">
//                 ⚡
//               </div>
//             )}

//             <span className="text-lg font-semibold tracking-wide text-gray-900">
//               {data.logoText}
//             </span>
//           </div>

//           {/* NAV LINKS */}
//           <nav className="hidden md:flex items-center gap-10">
//             {data.menu.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.link}
//                 className="relative text-sm font-medium text-gray-700 hover:text-red-500 transition"
//               >
//                 {item.label}
//                 <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-500 scale-x-0 hover:scale-x-100 transition-transform origin-left" />
//               </a>
//             ))}
//           </nav>

//           {/* PHONE */}
//           <div className="hidden md:flex items-center gap-2 text-red-500 font-medium pr-2">
//             <Phone size={16} />
//             <span className="text-sm tracking-wide">
//               {data.phone}
//             </span>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// }




import { Phone } from "lucide-react";
import { useGetPublicNavbarQuery } from "../redux/apis/navbarApi";

export default function PublicNavbar() {
  const { data, isLoading } = useGetPublicNavbarQuery();

  if (isLoading || !data) return null;

 const handleScroll = (link) => {
  const id = link.replace("/", ""); // "/about" -> "about"
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO + BRAND */}
          <div className="flex items-center gap-3">
            {data.logoImage ? (
              <img
                src={data.logoImage}
                alt="logo"
                className="h-14 w-auto object-contain"
              />
            ) : (
              <div className="h-14 w-14 bg-red-500 text-white flex items-center justify-center rounded-md text-xl">
                ⚡
              </div>
            )}

            <span className="text-lg font-semibold tracking-wide text-gray-900">
              {data.logoText}
            </span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10">
            {data.menu.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.link)}
                className="relative text-sm font-medium text-gray-700 hover:text-red-500 transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-500 scale-x-0 hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </nav>

          {/* PHONE */}
          <div className="hidden md:flex items-center gap-2 text-red-500 font-medium pr-2">
            <Phone size={16} />
            <span className="text-sm tracking-wide">
              {data.phone}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}

