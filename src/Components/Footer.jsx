import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';
import Logo_With_Transparent from '../Assets/Logo/LOGO_1.png';

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
              className="scroll-fade-up flex items-center mb-4"
            >
              <div className="w-10 h-10 flex p-[5px] items-center justify-center flex-shrink-0">
                  <img 
                    src={Logo_With_Transparent} 
                    alt="logo" 
                    className="w-50 h-50 object-contain scale-125" 
                  />
              </div>
              <span
                className="font-black text-xl uppercase"
                style={{ color: 'var( --color-primary)' }}
              >
                JOE&nbsp;
                <span style={{ color: 'var( --color-text-primary)' }}>
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
                    onClick={() => {
                      setActivePage(link);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
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