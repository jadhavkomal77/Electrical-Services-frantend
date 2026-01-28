
// import { Phone, ChevronDown } from "lucide-react";
// import { useGetPublicNavbarQuery } from "../redux/apis/navbarApi";
// import { useGetPublicServicesQuery } from "../redux/apis/serviceApi";
// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PublicNavbar() {
//   const { data, isLoading } = useGetPublicNavbarQuery();
//   const { data: services } = useGetPublicServicesQuery();
//   const [open, setOpen] = useState(false);
//   const timeoutRef = useRef(null);
//   const navigate = useNavigate();

//   if (isLoading || !data) return null;

//   const handleOpen = () => {
//     clearTimeout(timeoutRef.current);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     timeoutRef.current = setTimeout(() => {
//       setOpen(false);
//     }, 250);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="flex items-center justify-between h-20">

//           {/* LOGO */}
//           <div
//             className="flex items-center gap-3 cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             {data.logoImage ? (
//               <img src={data.logoImage} alt="logo" className="h-14" />
//             ) : (
//               <div className="h-14 w-14 bg-red-500 text-white flex items-center justify-center rounded-md text-xl">
//                 ⚡
//               </div>
//             )}
//             <span className="text-lg font-semibold text-gray-900">
//               {data.logoText}
//             </span>
//           </div>

//           {/* NAV */}
//           <nav className="hidden md:flex items-center gap-10 relative">
//             {data.menu.map((item, index) => {
//               if (item.label === "Services") {
//                 return (
//                   <div
//                     key={index}
//                     className="relative"
//                     onMouseEnter={handleOpen}
//                     onMouseLeave={handleClose}
//                   >
//                     <button className="flex items-center gap-1 px-4 py-2 rounded-full text-black text-sm font-medium shadow 
//                               hover:text-white hover:bg-blue-600 transition">
//                       Services <ChevronDown size={14} />
//                     </button>

//                     {open && (
//                       <div
//                         className="
//                           absolute left-0 top-full mt-4 
//                           bg-white rounded-xl shadow-xl 
//                           w-72 py-3
//                         "
//                         onMouseEnter={handleOpen}
//                         onMouseLeave={handleClose}
//                       >
//                         {services?.map((service) => (
//                           <button
//                             key={service._id}
//                             onClick={() => {
//                               navigate(`/services/${service.slug}`);
//                               setOpen(false);
//                             }}
//                             className="
//                               block w-full text-left 
//                               px-6 py-3 text-sm 
//                               text-black
//                               hover:bg-blue-600 
//                               hover:text-white
//                               transition
//                             "
//                           >
//                             {service.title}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <button
//                   key={index}
//                   onClick={() => navigate(item.link)}
//                   className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
//                 >
//                   {item.label}
//                 </button>
//               );
//             })}
//           </nav>

//           {/* PHONE */}
//           <div className="hidden md:flex items-center gap-2 text-blue-600 font-medium">
//             <Phone size={16} />
//             <span>{data.phone}</span>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// }




import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { useGetPublicNavbarQuery } from "../redux/apis/navbarApi";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAdminServicesQuery } from "../redux/apis/serviceApi";

export default function PublicNavbar() {
  const { data, isLoading } = useGetPublicNavbarQuery();
  const { data: services, isLoading: servicesLoading } =
    useGetAdminServicesQuery();

  const [open, setOpen] = useState(false);       // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  if (isLoading || servicesLoading || !data) return null;

  const handleOpen = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const handleNavigate = (link) => {
    navigate(link);
    setMobileOpen(false);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {data.logoImage ? (
              <img src={data.logoImage} alt="logo" className="h-14" />
            ) : (
              <div className="h-14 w-14 bg-red-500 text-white flex items-center justify-center rounded-md text-xl">
                ⚡
              </div>
            )}
            <span className="text-lg font-semibold text-gray-900">
              {data.logoText}
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 relative">
            {data.menu.map((item, index) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={handleOpen}
                    onMouseLeave={handleClose}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 rounded-full text-black text-sm font-medium shadow 
                      hover:text-white hover:bg-blue-600 transition">
                      Services <ChevronDown size={14} />
                    </button>

                    {open && services?.length > 0 && (
                      <div
                        className="
                          absolute left-0 top-full mt-3 
                          bg-white rounded-xl shadow-xl 
                          w-72 py-2 
                          z-[200]
                        "
                      >
                        {services.map((service) => (
                          <button
                            key={service._id}
                            onClick={() =>
                              handleNavigate(`/services/${service.slug}`)
                            }
                            className="
                              block w-full text-left 
                              px-5 py-2 text-sm 
                              text-gray-800
                              hover:bg-blue-600 
                              hover:text-white
                              transition
                            "
                          >
                            {service.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={index}
                  onClick={() => handleNavigate(item.link)}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* PHONE (DESKTOP) */}
          <div className="hidden md:flex items-center gap-2 text-blue-600 font-medium">
            <Phone size={16} />
            <span>{data.phone}</span>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3 z-[150]">
          {data.menu.map((item, index) => {
            if (item.label === "Services") {
              return (
                <div key={index}>
                  <p className="font-semibold mb-2">Services</p>
                  {services?.map((service) => (
                    <button
                      key={service._id}
                      onClick={() =>
                        handleNavigate(`/services/${service.slug}`)
                      }
                      className="block w-full text-left px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              );
            }

            return (
              <button
                key={index}
                onClick={() => handleNavigate(item.link)}
                className="block w-full text-left px-3 py-2 rounded hover:bg-blue-600 hover:text-white"
              >
                {item.label}
              </button>
            );
          })}

          <div className="flex items-center gap-2 pt-3 text-blue-600">
            <Phone size={16} />
            <span>{data.phone}</span>
          </div>
        </div>
      )}
    </header>
  );
}

