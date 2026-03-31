// import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';

// const team = [
//   { name: "Kothandan Kanniyappan", role: "Founder & CEO", initials: "KK" },
//   { name: "Deepa Kothandan", role: "Co-Founder", initials: "DK" },
//   { name: "Suresh Govindhan", role: "Project Director", initials: "SD" },
//   { name: "Praveen Raja", role: "Chief Technical Officer", initials: "PR" },
// ];

// const milestones = [
//   { year: "2023", event: "JEO Rebar Services founded in India with a 5-person team." },
//   { year: "2024", event: "Completed our one of biggest project — a landmark Tomball ISD in USA Stadium." },
//   { year: "2025", event: "Expanded operations to various Countries to deliver the Project." },
//   { year: "2026", event: "Developing to impore our Network and Networth..." },
// ];

// export default function About() {
//    const addRef = useScrollAnimation();  

//   return (
//     <div className="bg-zinc-900 text-white min-h-screen">
//       {/* Page Hero */}
//       <section ref={addRef} className="scroll-fade-up bg-zinc-800 border-b border-zinc-700 py-24 px-6 relative overflow-hidden">
//         <div
//           className="absolute right-0 top-0 w-1/2 h-full opacity-5"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(90deg, #eab308 0, #eab308 1px, transparent 0, transparent 40px)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//         <div ref={addRef} className=" scroll-fade-up relative max-w-7xl mx-auto">
//           <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">Our Story</span>
//           <h1 className="text-5xl md:text-6xl font-black uppercase mt-2 mb-4">
//             About <span className="text-yellow-500">Us</span>
//           </h1>
//             <div className="anim-hero-divider h-1 bg-yellow-500 mb-6" />
//           <p ref={addRef} className="scroll-fade-up text-zinc-400 max-w-lg text-lg">
//             Over 3+ years of delivering precise rebar detailing solutions, we build strong structures backed by accuracy, reliability, and lasting client relationships.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section ref={addRef} className="scroll-fade-up max-w-7xl mx-auto px-6 py-20">
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           <div>
//             <h2 className="text-3xl font-black uppercase mb-4">
//               Who We <span className="text-yellow-500">Are</span>
//             </h2>
//             <p className="text-zinc-400 leading-relaxed mb-4">
//               JEO Rebar Services was founded in 2023 with one guiding principle: build it right the first time. From a small team of to achieve the big dream. 
//             </p>
//             <p className="text-zinc-400 leading-relaxed mb-6">
//               Our firm delivers high-quality rebar placement drawings for residential, commercial, and complex structures, including water treatment plants, with strong client coordination and flexible timelines.
//             </p>
//             <div ref={addRef} className="scroll-fade-up grid grid-cols-2 gap-4">
//               {[
//                 { label: "Mission", text: "Deliver quality Shop Drawings on time, every time." },
//                 { label: "Vision", text: "To be the most trusted name in American construction." },
//               ].map((v) => (
//                 <div key={v.label} className="bg-zinc-800 border border-zinc-700 p-5 border-l-4 border-l-yellow-500">
//                   <h4 className="text-yellow-500 font-bold text-sm uppercase tracking-widest mb-2">{v.label}</h4>
//                   <p className="text-zinc-400 text-sm">{v.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Timeline */}
//           <div ref={addRef}>
//             <h2 className="scroll-fade-up text-3xl font-black uppercase mb-8">
//               Our <span className="text-yellow-500">Journey</span>
//             </h2>
//             <div className="relative">
//               <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-700" />
//               <div ref={addRef} className="scroll-fade-up space-y-8">
//                 {milestones.map((m) => (
//                   <div key={m.year} className="flex gap-6 items-start pl-14 relative">
//                     <div className="absolute left-0 w-12 h-12 bg-yellow-500 flex items-center justify-center flex-shrink-0">
//                       <span className="text-zinc-900 font-black text-xs">{m.year}</span>
//                     </div>
//                     <p className="text-zinc-400 text-sm leading-relaxed pt-3">{m.event}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section ref={addRef} className="scroll-fade-up bg-zinc-800 border-t border-zinc-700 py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">The People Behind It</span>
//             <h2 className="text-4xl font-black uppercase mt-2">
//               Meet the <span className="text-yellow-500">Team</span>
//             </h2>
//             <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4" />
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {team.map((t) => (
//               <div
//                 key={t.name}
//                 className="bg-zinc-900 border border-zinc-700 p-6 hover:border-yellow-500 transition-all duration-300 group text-center"
//               >
//                 <div className="w-20 h-20 bg-yellow-500 flex items-center justify-center mx-auto mb-4 text-zinc-900 font-black text-2xl group-hover:bg-yellow-400 transition-colors">
//                   {t.initials}
//                 </div>
//                 <h3 className="text-white font-bold text-base">{t.name}</h3>
//                 <p className="text-zinc-500 text-sm mt-1 uppercase tracking-wider">{t.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section ref={addRef} className=" scroll-fade-up max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center mb-12">
//           <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">What Drives Us</span>
//           <h2 className="text-4xl font-black uppercase mt-2">Core Values</h2>
//           <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4" />
//         </div>
//         <div className="grid sm:grid-cols-3 gap-6">
//           {[
//             { icon: "🏆", title: "Excellence", desc: "We never settle for 'good enough'. Every nail, beam, and finish reflects our commitment to quality." },
//             { icon: "🤝", title: "Integrity", desc: "Transparent pricing, honest timelines, and accountable teams on every single project." },
//             { icon: "♻️", title: "Sustainability", desc: "Green building practices, sustainable materials, and energy-efficient designs for a better future." },
//           ].map((v) => (
//             <div key={v.title} className="bg-zinc-800 border border-zinc-700 p-8 hover:border-yellow-500 transition-all duration-300 text-center group">
//               <span className="text-5xl block mb-4">{v.icon}</span>
//               <h3 className="text-xl font-black uppercase mb-3 group-hover:text-yellow-500 transition-colors">{v.title}</h3>
//               <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';

const team = [
  { name: "Kothandan Kanniyappan", role: "Founder & CEO", initials: "KK" },
  { name: "Deepa Kothandan", role: "Co-Founder", initials: "DK" },
  { name: "Suresh Govindhan", role: "Project Director", initials: "SD" },
  { name: "Praveen Raja", role: "Chief Technical Officer", initials: "PR" },
];

const milestones = [
  { year: "2023", event: "JEO Rebar Services founded in India with a 5-person team." },
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
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-primary)' }}
          >
            Our Story
          </span>

          <h1 className="text-5xl md:text-6xl font-black uppercase mt-2 mb-4">
            About <span style={{ color: 'var(--color-primary)' }}>Us</span>
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
            <h2 className="text-3xl font-black uppercase mb-4">
              Who We <span style={{ color: 'var(--color-primary)' }}>Are</span>
            </h2>

            <p className="leading-relaxed mb-4" style={{ color: 'var(--color-text-muted)' }}>
              JEO Rebar Services was founded in 2023 with one guiding principle: build it right the first time.
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
                    backgroundColor: 'var(--color-bg-card)',
                    borderColor: 'var(--color-border)',
                    borderLeftColor: 'var(--color-primary)'
                  }}
                >
                  <h4
                    className="font-bold text-sm uppercase tracking-widest mb-2"
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
            <h2 className="scroll-fade-up text-3xl font-black uppercase mb-8">
              Our <span style={{ color: 'var(--color-primary)' }}>Journey</span>
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
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--color-primary)' }}>
              The People Behind It
            </span>

            <h2 className="text-4xl font-black uppercase mt-2">
              Meet the <span style={{ color: 'var(--color-primary)' }}>Team</span>
            </h2>

            <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: 'var(--color-primary)' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div
                key={t.name}
                className="border p-6 text-center transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border)'
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
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
          <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--color-primary)' }}>
            What Drives Us
          </span>

          <h2 className="text-4xl font-black uppercase mt-2">
            Core Values
          </h2>

          <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: 'var(--color-primary)' }} />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "🏆", title: "Excellence", desc: "We never settle for 'good enough'." },
            { icon: "🤝", title: "Integrity", desc: "Transparent pricing and honest timelines." },
            { icon: "♻️", title: "Sustainability", desc: "Green building practices for a better future." },
          ].map((v) => (
            <div
              key={v.title}
              className="border p-8 text-center transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <span className="text-5xl block mb-4">{v.icon}</span>

              <h3
                className="text-xl font-black uppercase mb-3"
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
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