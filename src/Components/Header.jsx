import { useState } from "react";
import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';
import Logo_With_Transparent from '../Assets/Logo/LOGO_1.png';

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
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        {/* <div
          ref={(el) => addRef(el)}
          className="scroll-fade-up flex items-center gap-3 cursor-pointer"
          // onClick={() => setActivePage("Home")}
          onClick={() => {
            setActivePage("Home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div
           className="w-10 h-10 flex items-center justify-center"
          >
            <img src={Logo_With_Transparent} alt="logo" width={'100px'} height={'100px'} />
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
        </div> */}

<div
  ref={(el) => addRef(el)}
  className="scroll-fade-up flex items-center gap-2 cursor-pointer"
  onClick={() => {
    setActivePage("Home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  {/* Increased logo size */}
  <div className="w-20 h-20 p-[5px] flex items-center justify-center flex-shrink-0">
    <img 
      src={Logo_With_Transparent} 
      alt="logo" 
      className="w-50 h-50 object-contain scale-125" 
    />
  </div>

  {/* Text */}
  <div className="flex flex-col justify-center leading-tight">
    <span
      className="font-black text-2xl tracking-tight uppercase"
      style={{ color: 'var(--color-primary)' }}
    >
      Joe{" "}
      <span style={{ color: 'var( --color-text-primary)' }}>
        Rebar Services
      </span>
    </span>

    <p
      className="text-[10px] tracking-[0.2em] uppercase font-semibold mt-[2px]"
      style={{ color: 'var(--color-text-muted)' }}
    >
      JOY OF EMPLOYEE
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
              // onClick={() => setActivePage(link)}
              onClick={() => {
                setActivePage(link);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2 text-sm font-black tracking-widest uppercase transition-all duration-200"
              style={
                activePage === link
                  ? { color: 'var(--color-primary)', borderBottom: '2px solid var(--color-primary)' }
                  : { color: 'var(--color-text-muted)' }
              }
              onMouseEnter={e => {
                if (activePage !== link)
                  e.currentTarget.style.color = 'var(--color-primary)';
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
            // onClick={() => setActivePage("Contact")}
            onClick={() => {
              setActivePage("Contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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
          className="md:hidden flex flex-col gap-1.5 p-2"
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

      {/* ✅ Mobile Menu — NO ref/scroll-fade-up to avoid opacity:0 from IntersectionObserver */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-2"
          style={{
            backgroundColor: 'var(--color-bg-dark)',
            borderColor: 'var(--color-primary-border)'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                setActivePage(link);
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}              
              className="text-left px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-200"
              style={
                activePage === link
                  ? {
                      color: 'var(--color-primary)',
                      backgroundColor: 'var(--color-primary-border)'
                    }
                  : {
                      color: 'var(--color-text-primary)'
                    }
              }
              onMouseEnter={e => {
                if (activePage !== link)
                  e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={e => {
                if (activePage !== link)
                  e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
            >
              {link}
            </button>
          ))}

          {/* Mobile Get a Quote button */}
          <button
            // onClick={() => { setActivePage("Contact"); setMenuOpen(false); }}
            onClick={() => {
                setActivePage("Contact");
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}  
            className="mt-2 px-6 py-3 font-bold text-sm uppercase tracking-widest transition-all duration-200 text-left"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-bg-base)'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}