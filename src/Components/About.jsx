import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';

const team = [
  { name: "Kothandan Kanniyappan", role: "Founder & CEO", initials: "KK" },
  { name: "Deepa Kothandan", role: "Co-Founder", initials: "DK" },
  { name: "Suresh Govindhan", role: "Project Director", initials: "SD" },
  { name: "Praveen Raja", role: "Chief Technical Officer", initials: "PR" },
];

const milestones = [
  { year: "2023", event: "JOE Rebar Services founded in India with a 5-person team." },
  { year: "2024", event: "Completed our one of biggest project — a landmark Tomball ISD in USA Stadium." },
  { year: "2025", event: "Expanded operations to various Countries to deliver the Project." },
  { year: "2026", event: "Developing to impore our Network and Networth..." },
];

export default function About() {
  const addRef = useScrollAnimation();

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--color-bg-base)',
        color: 'var(--color-text-primary)'
      }}
    >

      {/* HERO */}
      <section
        ref={(el) => addRef(el)}
        className="scroll-fade-up border-b py-24 px-6 relative overflow-hidden"
        style={{
          backgroundColor: 'var(--color-bg-dark)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              var(--color-primary) 0,
              var(--color-primary) 1px,
              transparent 0,
              transparent 40px
            )`,
          }}
        />

        <div ref={(el) => addRef(el)} className="scroll-fade-up relative max-w-7xl mx-auto">
          <span
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Our Story
          </span>

          <h1 className="text-5xl md:text-6xl font-black uppercase mt-2 mb-4" style={{ color: 'var(--color-primary)' }}>
            About <span style={{ color: 'var(--color-text-primary)' }}>Us</span>
          </h1>

          <div
            className="h-1 mb-6"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />

          <p
            ref={(el) => addRef(el)}
            className="scroll-fade-up max-w-lg text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Over 3+ years of delivering precise rebar detailing solutions, we build strong structures backed by accuracy, reliability, and lasting client relationships.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        ref={(el) => addRef(el)}
        className="scroll-fade-up max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl uppercase font-black mb-4" style={{ color: 'var(--color-primary)' }}>
              Who We <span style={{ color: 'var(--color-text-primary)' }}>Are</span>
            </h2>

            <p className="leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
              JOE Rebar Services was founded in 2023 with one guiding principle: build it right the first time.
            </p>

            <p className="leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Our firm delivers high-quality rebar placement drawings for residential, commercial, and complex structures.
            </p>

            <div ref={(el) => addRef(el)} className="scroll-fade-up grid grid-cols-2 gap-4">
              {[
                { label: "Mission", text: "Deliver quality Shop Drawings on time, every time." },
                { label: "Vision", text: "To be the most trusted name in American construction." },
              ].map((v) => (
                <div
                  key={v.label}
                  className="border p-5 border-l-4"
                  style={{
                    borderLeftColor: 'var(--color-primary)',
                    backgroundColor: 'var(--color-bg-card)',
                    borderBlockEndWidth:  '10px',
                    borderBlockEndColor:'var(--color-border)',
                }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.borderLeftColor = 'var(--color-primary)';
                }}
                >
                  <h4
                    className="font-black text-sm uppercase tracking-widest mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {v.label}
                  </h4>

                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div ref={(el) => addRef(el)}>
            <h2 className="scroll-fade-up text-3xl uppercase mb-8" style={{ color: 'var(--color-primary)' }}>
              Our <span style={{ color: 'var(--color-text-primary)' }}>Journey</span>
            </h2>

            <div className="relative">
              <div
                className="absolute left-6 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: 'var(--color-border)' }}
              />

              <div ref={(el) => addRef(el)} className="scroll-fade-up space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6 items-start pl-14 relative">
                    <div
                      className="absolute left-0 w-12 h-12 flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      <span
                        className="font-black text-xs"
                        style={{ color: 'var(--color-bg-base)' }}
                      >
                        {m.year}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed pt-3" style={{ color: 'var(--color-text-muted)' }}>
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        ref={(el) => addRef(el)}
        className="scroll-fade-up border-t py-20 px-6"
        style={{
          backgroundColor: 'var(--color-bg-dark)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: 'var(--color-text-primary)' }}>
              The People Behind It
            </span>

            <h2 className="text-4xl font-black uppercase mt-2 mb-1" style={{ color: 'var(--color-primary)' }}>
              Meet the <span style={{ color: 'var(--color-text-primary)' }}>Team</span>
            </h2>

            <div
              className="h-1"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t,i) => (
              <div
                key={t.name}
                ref={addRef}
                className="service-card scroll-fade-up border p-8 group overflow-hidden min-w-0 w-full 
                transition-all duration-200 ease-in-out transform text-center"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  backgroundColor: 'var(--color-bg-card)',
                  borderBlockEndWidth:  '10px',
                  borderBlockEndColor:'var(--color-border)',
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
                <div
                  className="w-20 h-20 flex items-center justify-center mx-auto mb-4 font-black text-2xl"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-bg-base)'
                  }}
                >
                  {t.initials}
                </div>

                <h3 className="font-bold text-base">{t.name}</h3>

                <p className="text-sm mt-1 uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                  {t.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section
        ref={(el) => addRef(el)}
        className="scroll-fade-up max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: 'var(--color-text-primary)' }}>
            What Drives Us
          </span>

         <h2
            className="text-4xl md:text-4xl  uppercase mt-2 font-black mb-1"
            style={{ color:'var( --color-primary)'}}
          >
            CORE<span style={{ color: 'var( --color-text-primary)' }}> Values</span>
          </h2>

            <div
              className="h-1"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />        
            </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "🏆", title: "Excellence", desc: "We never settle for 'good enough'." },
            { icon: "🤝", title: "Integrity", desc: "Transparent pricing and honest timelines." },
            { icon: "♻️", title: "Sustainability", desc: "Green building practices for a better future." },
          ].map((v,i) => (
            <div
              key={v.title}
              ref={addRef}
              className="service-card scroll-fade-up border p-8 group overflow-hidden min-w-0 w-full 
                transition-all duration-200 ease-in-out transform text-center"
              style={{
                  transitionDelay: `${i * 100}ms`,
                  backgroundColor: 'var(--color-bg-card)',
                  borderBlockEndWidth:  '10px',
                  borderBlockEndColor:'var(--color-border)',
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
              <span className="text-5xl block mb-4">{v.icon}</span>

              <h3
                className="text-xl font-black uppercase mb-3"
                // onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                // onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
              >
                {v.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}