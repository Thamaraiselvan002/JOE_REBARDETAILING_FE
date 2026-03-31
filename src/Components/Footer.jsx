// import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';

// export default function Footer({ setActivePage }) {
//   const addRef = useScrollAnimation();

//   return (
//     <footer ref={addRef} className="scroll-fade-up bg-zinc-950 border-t border-yellow-500/20 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
//           {/* Brand */}
//           <div className="md:col-span-1">
//             <div ref={addRef} className=" scroll-fade-up flex items-center gap-3 mb-4">
//               <div className="w-9 h-9 bg-yellow-500 flex items-center justify-center rotate-45">
//                 <span className="text-zinc-900 font-black -rotate-45">JOE</span>
//               </div>
//               <span className="text-white font-black text-xl uppercase">
//                 JOE&nbsp; <span className="text-yellow-500">Rear Services</span>
//               </span>
//             </div>
//             <p ref={addRef} className="scroll-fade-up text-zinc-400 text-sm leading-relaxed max-w-xs">
//               We deliver accurate, error-free shop drawings on time while maintaining seamless client coordination and prompt response to queries.
//             </p>
//             {/* <div ref={addRef} className="scroll-fade-up flex gap-3 mt-5">
//               {["FB", "TW", "IN", "YT"].map((s) => (
//                 <span
//                   key={s}
//                   className="w-9 h-9 border border-zinc-700 text-zinc-500 text-xs font-bold flex items-center justify-center hover:border-yellow-500 hover:text-yellow-500 cursor-pointer transition-all"
//                 >
//                   {s}
//                 </span>
//               ))}
//             </div> */}
//           </div>

//           {/* Quick Links */}
//           <div className='md:col-span-1'>
//             <h4 ref={addRef} className="scroll-fade-up text-white font-bold text-sm uppercase tracking-widest mb-5 border-l-2 border-yellow-500 pl-3 ">
//               Quick Links
//             </h4>
//             <ul ref={addRef}  className="scroll-fade-up space-y-3">
//               {["Home", "Services", "About", "Contact"].map((link) => (
//                 <li key={link}>
//                   <button
//                     onClick={() => setActivePage(link)}
//                     className="text-zinc-400 text-sm hover:text-yellow-500 transition-colors flex items-center gap-2"
//                   >
//                     <span className="w-1.5 h-1.5 bg-yellow-500 inline-block" />
//                     {link}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className='md:col-span-2'>
//             <h4 ref={addRef} className="scroll-fade-up text-white font-bold text-sm uppercase tracking-widest mb-5 border-l-2 border-yellow-500 pl-3">
//               Contact
//             </h4>
//             <ul ref={addRef} className=" scroll-fade-up space-y-3 text-sm text-zinc-400">
//               <li className="flex items-start gap-2">
//                 <span className="text-yellow-500 mt-0.5">📍</span>
//                   Chennai, TamilNadu, India
//               </li>
//               {/* <li className="flex items-center gap-2">
//                 <span className="text-yellow-500">📞</span>
//                 +91 8675774990,+91 9080307894
//               </li> */}
//               <li className="flex items-center gap-2">
//                 <span className="text-yellow-500">✉️</span>
//                   deepa@joerebarservices.com
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-yellow-500">🕐</span>
//                 Reliable & Timely Communication
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div ref={addRef} className="scroll-fade-up border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-zinc-600 text-xs">
//             © 2026 JOE Rebar Services Co. All rights reserved.
//           </p>
//           <div className="flex gap-5 text-xs text-zinc-600">
//             <span className="hover:text-zinc-400 cursor-pointer transition-colors">Privacy Policy</span>
//             <span className="hover:text-zinc-400 cursor-pointer transition-colors">Terms of Use</span>
//             <span className="hover:text-zinc-400 cursor-pointer transition-colors">Sitemap</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';

export default function Footer({ setActivePage }) {
  const addRef = useScrollAnimation();

  return (
    <footer
      ref={(el) => addRef(el)}
      className="scroll-fade-up border-t pt-16 pb-8"
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        borderColor: 'var(--color-primary-border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div
              ref={(el) => addRef(el)}
              className="scroll-fade-up flex items-center gap-3 mb-4"
            >
              <div
                className="w-9 h-9 flex items-center justify-center rotate-45"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <span
                  className="font-black -rotate-45"
                  style={{ color: 'var(--color-bg-base)' }}
                >
                  JOE
                </span>
              </div>

              <span
                className="font-black text-xl uppercase"
                style={{ color: 'var(--color-text-primary)' }}
              >
                JOE&nbsp;
                <span style={{ color: 'var(--color-primary)' }}>
                  Rear Services
                </span>
              </span>
            </div>

            <p
              ref={(el) => addRef(el)}
              className="scroll-fade-up text-sm leading-relaxed max-w-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              We deliver accurate, error-free shop drawings on time while maintaining seamless client coordination and prompt response to queries.
            </p>
          </div>

          {/* Quick Links */}
          <div className='md:col-span-1'>
            <h4
              ref={(el) => addRef(el)}
              className="scroll-fade-up font-bold text-sm uppercase tracking-widest mb-5 border-l-2 pl-3"
              style={{
                color: 'var(--color-text-primary)',
                borderColor: 'var(--color-primary)'
              }}
            >
              Quick Links
            </h4>

            <ul ref={(el) => addRef(el)} className="scroll-fade-up space-y-3">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => setActivePage(link)}
                    className="text-sm transition-colors flex items-center gap-2"
                    style={{ color: 'var(--color-text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                  >
                    <span
                      className="w-1.5 h-1.5 inline-block"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='md:col-span-2'>
            <h4
              ref={(el) => addRef(el)}
              className="scroll-fade-up font-bold text-sm uppercase tracking-widest mb-5 border-l-2 pl-3"
              style={{
                color: 'var(--color-text-primary)',
                borderColor: 'var(--color-primary)'
              }}
            >
              Contact
            </h4>

            <ul
              ref={(el) => addRef(el)}
              className="scroll-fade-up space-y-3 text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-primary)' }}>📍</span>
                Chennai, TamilNadu, India
              </li>

              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--color-primary)' }}>✉️</span>
                deepa@joerebarservices.com
              </li>

              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--color-primary)' }}>🕐</span>
                Reliable & Timely Communication
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          ref={(el) => addRef(el)}
          className="scroll-fade-up border-t pt-6 flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--color-text-muted)' }}
          >
            © 2026 JOE Rebar Services Co. All rights reserved.
          </p>

          <div
            className="flex gap-5 text-xs"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <span
              className="cursor-pointer transition-colors"
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              Privacy Policy
            </span>

            <span
              className="cursor-pointer transition-colors"
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              Terms of Use
            </span>

            <span
              className="cursor-pointer transition-colors"
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              Sitemap
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}