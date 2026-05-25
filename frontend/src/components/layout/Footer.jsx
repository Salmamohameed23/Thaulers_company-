// import { Link } from "react-router-dom";
// import { ChevronRight, Mail, MapPin } from "lucide-react";
// import logo from "../../assets/logos/white_red_logo.png";
// import { useLanguage } from "../../i18n/LanguageContext";
// import { ROUTES, SOLUTIONS_LINKS } from "../../config/siteRoutes.js";
// const Footer = () => {
//   const { t, lang } = useLanguage();
//   const isAr = lang === "ar";

// const solutions = SOLUTIONS_LINKS.map((item) => ({
//   name: t.footer.links[item.key],
//   path: item.path,
// }));
// const legal = [
//   { name: t.footer.links.privacy, path: ROUTES.privacy },
//   { name: t.footer.links.terms, path: ROUTES.terms },
// ];

//   const linkRowClass = `group flex items-center justify-between border-b border-white/10 py-3.5 text-[14px] font-semibold text-neutral-200 transition hover:text-white sm:py-4 ${
//     isAr ? "flex-row-reverse text-right" : ""
//   }`;

// const sectionTitleClass = `flex min-h-[15px] items-center font-bold text-[#ee4036] ${
//   isAr
//     ? "w-full text-[13px] tracking-normal text-right justify-start"
//     : "text-[11px] uppercase tracking-[0.32em] sm:text-[12px] sm:tracking-[0.42em]"
// }`;
//   const redLineClass = `-mt-4 h-[2px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)] sm:mt-8 ${
//     isAr ? "ml-0 mr-auto lg:ml-auto lg:mr-0" : ""
//   }`;

//   const brandRedLineClass = `mt-[-45px] h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)] ${
//     isAr ? "ml-0 mr-auto lg:ml-auto lg:mr-0" : ""
//   }`;

//   return (
//     <footer
//       dir={isAr ? "rtl" : "ltr"}
//       className={`relative overflow-hidden bg-black text-white ${
//         isAr ? "font-[Cairo]" : ""
//       }`}
//     >
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(220,38,38,0.25),transparent_34%)]" />
//       <div className="pointer-events-none absolute left-[-220px] bottom-[-260px] h-[620px] w-[620px] rounded-full border border-red-600/10 opacity-40" />

//       <div className="relative mx-auto max-w-[1180px] px-5 pt-10 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-10 border-b border-white/20 pb-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:pb-12">
//           {/* Brand */}
//           <div
//             className={`lg:border-white/10 lg:px-8 ${
//               isAr ? "text-right lg:border-l" : "lg:border-r lg:pl-0"
//             }`}
//           >
//             <div className="flex min-h-[34px] items-center">
//               <Link
//                 to={ROUTES.home}
//                 className={`flex w-full items-center ${
//                   isAr ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <img
//                   src={logo}
//                   alt="Tough Haulers"
//                   className={`mt-[-70px] -translate-x-[29px] w-[300px] object-contain ${
//                     isAr ? "translate-x-[35px]" : "-translate-x-[10px]"
//                   }`}
//                 />
//               </Link>
//             </div>
//             <div className="-translate-y-15">
//               <div className={brandRedLineClass} />

//               <h3 className="mt-6 max-w-[280px] text-[21px] font-extrabold leading-[1.28] tracking-[-0.02em] sm:text-[23px]">
//                 {t.footer.tagline1}
//                 <br />
//                 {t.footer.tagline2}
//               </h3>

//               <p className="mt-3 max-w-[300px] text-[14px] leading-7 text-neutral-300">
//                 {t.footer.desc}
//               </p>
//             </div>
//           </div>

//           {/* Solutions */}
//           <div
//             className={`lg:border-white/10 lg:px-8 -mt-7 ${
//               isAr ? "text-right lg:border-l" : "lg:border-r"
//             }`}
//           >
//             <h4 className={sectionTitleClass}>{t.footer.solutions}</h4>
//             <div className={redLineClass} />

//             <ul className="mt-1 sm:mt-5">
//               {solutions.map((item) => (
//                 <li key={item.name}>
//                   <Link to={item.path} className={linkRowClass}>
//                     <span
//                       className={`flex min-w-0 items-center gap-3 ${
//                         isAr
//                           ? "flex-row-reverse justify-end text-right w-full"
//                           : ""
//                       }`}
//                     >
//                       <ChevronRight
//                         className={`h-4 w-4 shrink-0 text-red-500 transition ${
//                           isAr
//                             ? "rotate-180 order-2"
//                             : "group-hover:translate-x-1"
//                         }`}
//                       />
//                       <span className="break-words">{item.name}</span>
//                     </span>

//                     {!isAr && (
//                       <span className="ml-4 h-[2px] w-5 shrink-0 bg-red-500 transition-all group-hover:w-8" />
//                     )}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div
//             className={`lg:border-white/10 lg:px-8 ${
//               isAr ? "text-right lg:border-l lg:pr-3" : "lg:border-r lg:pl-3"
//             }`}
//           >
//             <h4 className={sectionTitleClass}>{t.footer.contact}</h4>
//             <div className={redLineClass} />

//             <div className="mt-3 ml-[3px] sm:mt-4">
//               <a
//                 href={`mailto:${t.footer.email}`}
//                 className={`group flex items-center gap-2 border-b border-white/10 py-3.5 text-[14px] font-semibold text-neutral-100 transition hover:text-red-400 sm:py-4 ${
//                   isAr ? "flex-row-reverse text-right" : ""
//                 }`}
//               >
//                 <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
//                   <Mail className="h-4 w-4" />
//                 </span>
//                 <span dir="ltr" className="break-all">
//                   {t.footer.email}
//                 </span>
//               </a>

//               <div
//                 className={`flex items-center gap-2 border-b border-white/10 py-3.5 text-[14px] font-semibold text-neutral-100 sm:py-4 ${
//                   isAr ? "flex-row-reverse text-right" : ""
//                 }`}
//               >
//                 <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
//                   <MapPin className="h-4 w-4" />
//                 </span>
//                 <span className="break-words">{t.footer.location1}</span>
//               </div>
//             </div>
//           </div>

//           {/* Legal */}
//           <div className={`lg:px-8 ${isAr ? "text-right" : ""}`}>
//             <h4 className={sectionTitleClass}>{t.footer.legal}</h4>
//             <div className={redLineClass} />

//             <ul className="mt-4 sm:mt-5">
//               {legal.map((item) => (
//                 <li key={item.name}>
//                   <Link to={item.path} className={linkRowClass}>
//                     <span
//                       className={`flex min-w-0 items-center gap-3 ${
//                         isAr
//                           ? "flex-row-reverse justify-end text-right w-full"
//                           : ""
//                       }`}
//                     >
//                       <ChevronRight
//                         className={`h-4 w-4 shrink-0 text-red-500 transition ${
//                           isAr
//                             ? "rotate-180 order-2"
//                             : "group-hover:translate-x-1"
//                         }`}
//                       />
//                       <span className="break-words">{item.name}</span>
//                     </span>

//                     {!isAr && (
//                       <span className="ml-4 h-[2px] w-5 shrink-0 bg-red-500 transition-all group-hover:w-8" />
//                     )}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="py-8 sm:py-10">
//           <div
//             className={`flex flex-col items-center justify-center gap-4 text-center text-[13px] leading-6 tracking-wide text-neutral-400 sm:text-[15px] md:flex-row md:gap-5 ${
//               isAr ? "md:flex-row-reverse" : ""
//             }`}
//           >
//             <p className="break-words" dir={isAr ? "rtl" : "ltr"}>
//               {t.footer.copyright}
//             </p>

//             <span className="hidden h-4 w-px bg-white/40 md:block" />

//             <p className="break-words" dir={isAr ? "rtl" : "ltr"}>
//               {t.footer.slogan}
//             </p>

//             <div
//               className={`flex items-center justify-center gap-4 ${
//                 isAr ? "md:mr-4" : "md:ml-4"
//               }`}
//             >
//               <a
//                 href="https://www.facebook.com/TOUGHHAULERS"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-110"
//               >
//                 <img
//                   src="/icons/facebook.png"
//                   alt="Facebook"
//                   className="h-8 w-8 object-contain"
//                 />
//               </a>

//               <a
//                 href="https://www.instagram.com/thaulers"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-110"
//               >
//                 <img
//                   src="/icons/instagram.png"
//                   alt="Instagram"
//                   className="h-8 w-8 object-contain"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import logo from "../../assets/logos/white_red_logo.png";
import { useLanguage } from "../../i18n/LanguageContext";
import { ROUTES, SOLUTIONS_LINKS } from "../../config/siteRoutes.js";

const Footer = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const solutions = SOLUTIONS_LINKS.map((item) => ({
    name: t.footer.links[item.key],
    path: item.path,
  }));

  const legal = [
    { name: t.footer.links.privacy, path: ROUTES.privacy },
    { name: t.footer.links.terms, path: ROUTES.terms },
  ];

  const sectionTitleClass = `text-[11px] font-black uppercase tracking-[0.42em] text-[#ee4036] ${
    isAr ? "text-right tracking-normal" : ""
  }`;

  const redLineClass = `mt-16 h-[2px] w-12 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)] ${
    isAr ? "mr-0 ml-auto" : ""
  }`;

  const linkRowClass = `group flex items-center justify-between border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-200 transition hover:text-white ${
    isAr ? "flex-row-reverse text-right" : ""
  }`;

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      className={`relative overflow-hidden bg-black text-white ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(220,38,38,0.25),transparent_34%)]" />
      <div className="pointer-events-none absolute left-[-220px] bottom-[-260px] h-[620px] w-[620px] rounded-full border border-red-600/10 opacity-40" />

      <div className="relative mx-auto max-w-[1500px] px-6 pt-14 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-10 border-b border-white/20 pb-14 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1.1fr_0.85fr] xl:gap-12">
          {/* Brand */}
          <div className={`${isAr ? "text-right" : ""}`}>
            <Link
              to={ROUTES.home}
              className={`flex ${isAr ? "justify-end" : "justify-start"}`}
            >

              <img
                src={logo}
                alt="Tough Haulers"
                className={` w-[300px] mt-[-87px]  -translate-x-[38px] object-contain ${
                isAr ? "translate-x-[105px]" : "-translate-x-[10px]"}`}
              />
            </Link>
            <div className="-translate-y-15">
              <div className="mt-3 -mt-10 h-[2px] w-12 bg-red-600" />
              <h3 className="mt-5 max-w-[360px] text-[25px] font-black leading-tight tracking-[-0.02em]">
                {t.footer.tagline1}
                <br />
                {t.footer.tagline2}
              </h3>

              <p className="mt-3 max-w-[380px] text-[15px] font-medium leading-8 text-neutral-300">
                {t.footer.desc}
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div
            className={`xl:border-x xl:border-white/10 xl:px-10 ${
              isAr ? "text-right" : ""
            }`}
          >
            <h4 className={sectionTitleClass}>{t.footer.solutions}</h4>
            <div className={redLineClass} />

            <ul className="mt-6">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className={linkRowClass}>
                    <span
                      className={`flex min-w-0 items-center gap-3 ${
                        isAr ? "flex-row-reverse justify-end text-right" : ""
                      }`}
                    >
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 text-red-500 transition ${
                          isAr ? "rotate-180" : "group-hover:translate-x-1"
                        }`}
                      />
                      <span className="break-words">{item.name}</span>
                    </span>

                    {!isAr && (
                      <span className="ml-4 h-[2px] w-6 shrink-0 bg-red-500 transition-all group-hover:w-10" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`xl:border-r xl:border-white/10 xl:px-3 ${
              isAr ? "text-right xl:border-l xl:border-r-0" : ""
            }`}
          >
            <h4 className={sectionTitleClass}>{t.footer.contact}</h4>
            <div className={redLineClass} />

            <div className="mt-6">
              <a
                href={`mailto:${t.footer.email}`}
                className={`group flex items-center gap-4 border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-100 transition hover:text-red-400 ${
                  isAr ? "flex-row-reverse text-right" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <Mail className="h-4 w-4" />
                </span>

                <span dir="ltr" className="break-all">
                  {t.footer.email}
                </span>
              </a>

              <div
                className={`flex items-start gap-4 border-b border-white/10 py-5 text-[14px] font-semibold leading-7 text-neutral-100 ${
                  isAr ? "flex-row-reverse text-right" : ""
                }`}
              >
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>

                <span className="break-words">{t.footer.location1}</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className={`${isAr ? "text-right" : ""}`}>
            <h4 className={sectionTitleClass}>{t.footer.legal}</h4>
            <div className={redLineClass} />

            <ul className="mt-6">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className={linkRowClass}>
                    <span
                      className={`flex min-w-0 items-center gap-3 ${
                        isAr ? "flex-row-reverse justify-end text-right" : ""
                      }`}
                    >
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 text-red-500 transition ${
                          isAr ? "rotate-180" : "group-hover:translate-x-1"
                        }`}
                      />
                      <span className="break-words">{item.name}</span>
                    </span>

                    {!isAr && (
                      <span className="ml-4 h-[2px] w-6 shrink-0 bg-red-500 transition-all group-hover:w-10" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8 sm:py-10">
          <div
            className={`flex flex-col items-center justify-between gap-5 text-center text-[13px] leading-6 tracking-wide text-neutral-400 md:flex-row md:text-left ${
              isAr ? "md:flex-row-reverse md:text-right" : ""
            }`}
          >
            <p>{t.footer.copyright}</p>

            <div
              className={`flex flex-col items-center gap-5 md:flex-row ${
                isAr ? "md:flex-row-reverse" : ""
              }`}
            >
              <p>{t.footer.slogan}</p>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/TOUGHHAULERS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-110"
                >
                  <img
                    src="/icons/facebook.png"
                    alt="Facebook"
                    className="h-8 w-8 object-contain"
                  />
                </a>

                <a
                  href="https://www.instagram.com/thaulers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-110"
                >
                  <img
                    src="/icons/instagram.png"
                    alt="Instagram"
                    className="h-8 w-8 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;