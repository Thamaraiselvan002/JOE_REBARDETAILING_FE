// import { useState } from "react";
// import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';


// export default function Header({ activePage, setActivePage }) {

//   const addRef = useScrollAnimation();  
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navLinks = ["Home", "Services", "About", "Contact","Why Us"];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900 border-b border-yellow-500/30 shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div
//           ref={addRef}
//           className="scroll-fade-up flex items-center gap-3 cursor-pointer"
//           onClick={() => setActivePage("Home")}
//         >
//           <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rotate-45">
//             <span className="text-zinc-900 font-black text-lg -rotate-45">JOE</span>
//           </div>
//           <div>
//             <span className="text-white font-black text-xl tracking-tight uppercase">
//               Joe &nbsp; <span className="text-yellow-500">Rebar Services</span>
//             </span>
//             <p className="text-zinc-500 text-xs tracking-widest uppercase">Designing Services</p>
//           </div>
//         </div>


//         {/* Desktop Nav */}
//         <nav ref={addRef} className=" scroll-fade-up hidden md:flex items-center gap-1">
//           {navLinks.map((link) => (
//             <button
//               key={link}
//               onClick={() => setActivePage(link)}
//               className={`px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-200
//                 ${activePage === link
//                   ? "text-yellow-500 border-b-2 border-yellow-500"
//                   : "text-zinc-400 hover:text-white"
//                 }`}
//             >
//               {link}
//             </button>
//           ))}
//           <button ref={addRef} 
//             onClick={() => setActivePage("Contact")}
//             className="scroll-fade-up ml-4 px-6 py-2.5 bg-yellow-500 text-zinc-900 font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all duration-200"
//           >
//             Get a Quote
//           </button>
//         </nav>

//         {/* Mobile Hamburger */}
//         <button ref={addRef}
//           className="scroll-fade-up md:hidden flex flex-col gap-1.5 p-2"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className={`block w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
//           <span className={`block w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
//           <span className={`block w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div ref={addRef} className="scroll-fade-up md:hidden bg-zinc-800 border-t border-yellow-500/20 px-6 py-4 flex flex-col gap-2">
//           {navLinks.map((link) => (
//             <button
//               key={link}
//               onClick={() => { setActivePage(link); setMenuOpen(false); }}
//               className={`text-left px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-all
//                 ${activePage === link ? "text-yellow-500 bg-yellow-500/10" : "text-zinc-400 hover:text-white"}`}
//             >
//               {link}
//             </button>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }


import { useState } from "react";
import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';

export default function Header({ activePage, setActivePage }) {

  const addRef = useScrollAnimation();  
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Services", "About", "Contact", "Why Us"];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b shadow-lg"
      style={{
        backgroundColor: 'var(--color-bg-base)',
        borderColor: 'var(--color-primary-border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          ref={(el) => addRef(el)}
          className="scroll-fade-up flex items-center gap-3 cursor-pointer"
          onClick={() => setActivePage("Home")}
        >
          <div
            className="w-10 h-10 flex items-center justify-center rotate-45"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <span
              className="font-black text-lg -rotate-45"
              style={{ color: 'var(--color-bg-base)' }}
            >
              JOE
            </span>
          </div>

          <div>
            <span
              className="font-black text-xl tracking-tight uppercase"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Joe &nbsp;
              <span style={{ color: 'var(--color-primary)' }}>
                Rebar Services
              </span>
            </span>

            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Designing Services
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav
          ref={(el) => addRef(el)}
          className="scroll-fade-up hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActivePage(link)}
              className="px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-200"
              style={
                activePage === link
                  ? {
                      color: 'var(--color-primary)',
                      borderBottom: '2px solid var(--color-primary)'
                    }
                  : {
                      color: 'var(--color-text-muted)'
                    }
              }
              onMouseEnter={e => {
                if (activePage !== link)
                  e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={e => {
                if (activePage !== link)
                  e.currentTarget.style.color = 'var(--color-text-muted)';
              }}
            >
              {link}
            </button>
          ))}

          <button
            ref={(el) => addRef(el)}
            onClick={() => setActivePage("Contact")}
            className="scroll-fade-up ml-4 px-6 py-2.5 font-bold text-sm uppercase tracking-widest transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-bg-base)'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          ref={(el) => addRef(el)}
          className="scroll-fade-up md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={(el) => addRef(el)}
          className="scroll-fade-up md:hidden border-t px-6 py-4 flex flex-col gap-2"
          style={{
            backgroundColor: 'var(--color-bg-dark)',
            borderColor: 'var(--color-primary-border)'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { setActivePage(link); setMenuOpen(false); }}
              className="text-left px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-all"
              style={
                activePage === link
                  ? {
                      color: 'var(--color-primary)',
                      backgroundColor: 'rgba(255,193,7,0.1)'
                    }
                  : {
                      color: 'var(--color-text-muted)'
                    }
              }
              onMouseEnter={e => {
                if (activePage !== link)
                  e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onMouseLeave={e => {
                if (activePage !== link)
                  e.currentTarget.style.color = 'var(--color-text-muted)';
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}