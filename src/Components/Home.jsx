import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';
import HomeBackground from './HomeBackground';

const stats = [
  { number: "3+",  label: "Years Experience"   },
  { number: "100+",label: "Projects Completed"  },
  { number: "98%", label: "Client Satisfaction" },
  { number: "10+", label: "Expert Team"         },
];

const features = [
  {
    icon: "🏗️",
    title: "Expert Engineers",
    desc: "Our team of expert engineers, with 10+ years of experience, delivers high-quality project outcomes that consistently meet and exceed customer expectations.",
  },
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    desc: "We've maintained a 97% on-time project completion rate across all engagements.",
  },
  {
    icon: "🛡️",
    title: "Quality Drawings",
    desc: "We ensure error-free deliverables through multi-step verification and strict quality control.",
  },
  {
    icon: "📐",
    title: "Precision Build",
    desc: "Advanced rebar CAD and precision tooling for every project phase.",
  },
];

export default function Home({ setActivePage }) {
  const addRef = useScrollAnimation();

  return (
    <div style={{ backgroundColor: 'var(--color-bg-base)', color: 'var(--color-text-primary)' }}>

      {/* ── HERO SECTION ── */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: 'var(--color-bg-dark)' }}
      >
        {/* ── 3D Background fills the entire section ── */}
        <HomeBackground />

        {/* ── Dark overlay so text stays readable ── */}
        <div className="hero-overlay" />

        {/* Yellow accent stripe */}
        <div
          className="absolute left-0 top-0 h-full w-1 z-10"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />

        {/* Hero content — sits on top of the 3D canvas */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-screen py-24">
          <div>

            {/* Badge */}
            <span
              className="anim-hero-badge inline-block text-xs font-bold uppercase mb-4 px-3 py-1"
              style={{
                color:        'var(--color-primary)',
                border:       '2px solid var(--color-primary-border)',
                letterSpacing:'var(--tracking-widest)',
                fontFamily:   'var(--font-body)',
                background:   '#eaedf1ff'
              }}
            >
              Est. 2023 · India
            </span>

            {/* Heading */}
            <h1
              className="anim-hero-title text-5xl font-black md:text-7xl leading-none uppercase mb-6"
              style={{ fontFamily: 'var(--font-heading)'}}
            >
              We Build
              <br />
              <span style={{ color: 'var(--color-primary)' }}>The Future</span>
              <br />
              Together
            </h1>

            {/* Divider */}
            <div
              className="anim-hero-divider h-1 mb-6"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />

            {/* Paragraph */}
            <p
              className="anim-hero-desc text-lg leading-relaxed mb-8 max-w-md"
              style={{
                color:      'white',
                fontFamily: 'var(--font-body)',
              }}
            >
              From initial planning to construction-ready deliverables, we provide comprehensive
              reinforcement detailing services customized to suit your project's unique needs.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{ opacity: 0, animation: 'fadeUp 0.65s ease-out 0.7s forwards' }}
            >
              <button
                onClick={() => setActivePage('Services')}
                className="px-8 py-4 text-sm font-black uppercase transition-all duration-200"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color:           'var(--color-bg-base)',
                  letterSpacing:   'var(--tracking-widest)',
                  fontFamily:      'var(--font-body)',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
              >
                Our Services
              </button>

              <button
                onClick={() => setActivePage('Contact')}
                className="px-8 py-4 text-sm font-bold uppercase transition-all duration-200"
                style={{
                  border:        '1px solid var(--color-primary)',
                  color:         'var(--color-text-primary)',
                  letterSpacing: 'var(--tracking-widest)',
                  fontFamily:    'var(--font-body)',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.color       = 'var(--color-primary)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border-light)';
                  e.currentTarget.style.color       = 'var(--color-text-primary)';
                }}
              >
                Get a Quote →
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="backdrop-blur p-6 transition-all duration-300 group"
                style={{
                  backgroundColor: 'var(--color-bg-card-glass)',
                  border:          '1px solid var(--color-border)',
                  opacity:          0,
                  animation:       `fadeUp 0.65s ease-out ${0.5 + i * 0.1}s forwards`,
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-primary-border-hover)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div
                  className="text-4xl font-black transition-transform group-hover:scale-105"
                  style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  {s.number}
                </div>
                <div
                  className="text-sm mt-1 uppercase"
                  style={{
                    color:         'var(--color-text-muted)',
                    letterSpacing: 'var(--tracking-wider)',
                    fontFamily:    'var(--font-body)',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs uppercase animate-bounce z-10"
          style={{ color: 'var(--color-border)', letterSpacing: 'var(--tracking-widest)' }}
        >
          <span>Scroll</span>
          <span>↓</span>
        </div>

      </section>
      {/* ── end HERO SECTION ── */}

      {/* ── MOBILE STATS ── */}
      <section
        className="md:hidden border-t grid grid-cols-2 divide-x divide-y"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          borderColor:     'var(--color-border)',
        }}
      >
        {stats.map((s) => (
          <div key={s.label} className="p-5 text-center">
            <div
              className="text-3xl font-black"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {s.number}
            </div>
            <div
              className="text-xs uppercase mt-1"
              style={{
                color:         'var(--color-text-muted)',
                letterSpacing: 'var(--tracking-wider)',
                fontFamily:    'var(--font-body)',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* ── WHY CHOOSE US — scroll animated ── */}
      <section
        className="py-24 px-6 max-w-7xl mx-auto"
        style={{ paddingTop: 'var(--space-section-y)', paddingBottom: 'var(--space-section-y)' }}
      >
        {/* Section header */}
        <div ref={addRef} className="scroll-fade-up mb-14 text-center max-w-7xl mx-auto">
          <span
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{
              color:         'var(--color-primary)',
              letterSpacing: 'var(--tracking-widest)',
              fontFamily:    'var(--font-body)',
            }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-4xl md:text-4xl font-black uppercase mt-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Built on <span style={{ color: 'var(--color-primary)' }}>Trust</span>
          </h2>
          <div
            className=" h-1 mt-4"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={addRef}
              className="service-card scroll-fade-up border p-8 group overflow-hidden min-w-0 w-full 
                transition-all duration-200 ease-in-out transform"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border:          '1px solid var(--color-border)',
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
                e.currentTarget.style.borderColor = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <span className="text-4xl block mb-4">{f.icon}</span>
              <h3
                className="font-bold text-lg mb-2 transition-colors"
                style={{
                  color:      'var(--color-text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color:      'var(--color-text-muted)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER — scroll animated ── */}
      <section
        ref={addRef}
        className="scroll-fade-up py-16 px-6"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-black uppercase mb-4"
            style={{
              color:      'var(--color-text-dark)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{
              color:      'var(--color-text-dark-muted)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Get a free consultation and detailed cost estimate from our experts.
          </p>
          <button
            onClick={() => {
              setActivePage('Contact');
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-10 py-4 text-sm font-black uppercase transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-bg-base)',
              color:           'var(--color-primary)',
              letterSpacing:   'var(--tracking-widest)',
              fontFamily:      'var(--font-body)',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-bg-card)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-bg-base)'}
          >
            Contact Us Today →
          </button>
        </div>
      </section>

    </div>
  );
}