
// import PillarsIcon from '../Assets/Services_Icons/pillars.png';
// import Building from '../Assets/Services_Icons/office-building.png';
// import Hook from '../Assets/Services_Icons/hook.png';
// import QualityAssurance from '../Assets/Services_Icons/quality.png';
// import Designing from '../Assets/Services_Icons/design.png';
// import Divider from '../Assets/Services_Icons/divider.png';
// import '../CustomStyles/Services.css';
// import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';
// import { Player } from '@lottiefiles/react-lottie-player';
// // import HomeElement from '.src/Assets/Home element.mp4'
// import HomeElement from '../Assets/Home element.mp4'



// const services = [
//   {
//     icon: Building,
//     title: "Rebar Detailing",
//     desc: "All structural components, including beams, columns, slabs, footings, walls, and unique structures, have thorough reinforcing details. Each bar was positioned precisely.",
//     items: ["Office Complexes", "Retail Centers", "Warehouses", "Industrial Parks"],
//   },
//   {
//     icon: PillarsIcon,
//     title: "Bar Bending Schedules",
//     desc: "Accurate BBS preparation with precise bar marks, shapes, dimensions, and quantities, ensuring a seamless procurement and fabrication workflow.",
//     items: ["Precision-driven Quantity Takeoffs", "Compliance with Standard Shape Codes", "Accurate and Reliable Weight Calculations", "Comprehensive Cutting & Bending Lists"],
//   },
//   {
//     icon: Hook,
//     title: "Renovation & Remodeling",
//     desc: "Revitalize existing structures with our comprehensive renovation and remodeling services.We handle repair works with detailed reinforcement elements and provide clear, accurate shop drawings.",
//     items: ["Interior Remodeling", "Structural Repairs", "Extensions"],
//   },
//   {
//     icon: Divider,
//     title: "Civil & Infrastructure",
//     desc: "Roads, bridges, drainage systems, and public infrastructure built for longevity.",
//     items: ["Road Construction", "Bridge Building", "Drainage Systems", "Public Works"],
//   },
//   {
//     icon: QualityAssurance,
//     title: "Project Management",
//     desc: "End-to-end project management ensuring timelines, budgets, and quality standards are met.",
//     items: ["Client Requirement Focus", "Submission Scheduling", "Client Clarifications", "Three-Step Checking","Shop Drawing QA","Final Client Submission"],
//   },
//   {
//     icon: Designing,
//     title: "Shop Drawing Review & Coordination",
//     desc: "Ensure accurate, clash-free, and fully coordinated shop drawings aligned with project requirements and standards.",
//     items: ["Drawing Compliance Check", "Rebar Detailing Verification", "Clash Detection & Resolution", "Client Specification Alignment","Interdisciplinary Coordination","Revision & Update Management"],
//   },
// ];

// export default function Services() {
//  const addRef = useScrollAnimation();

//   return (
//     <div className="bg-zinc-900 text-white min-h-screen">

//       {/* ── Page Hero ── */}
//       <section ref={addRef} className="scroll-fade-up bg-zinc-800 border-b border-zinc-700 py-24 px-6 relative overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(45deg, #eab308 0, #eab308 1px, transparent 0, transparent 20px)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//         <div className="relative max-w-7xl mx-auto">
//           <span className="services-hero-badge text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">
//             What We build
//           </span>
//           <h1 className="services-hero-title text-5xl md:text-6xl font-black uppercase mt-2 mb-4">
//             Rebar Detailing <span className="text-yellow-500"> Solutions</span>
//           </h1>
//             <div className="anim-hero-divider h-1 bg-yellow-500 mb-6" />
//           <p className="services-hero-desc text-zinc-400 max-w-lg text-lg">
//             From concept to construction-ready documentation, we deliver end-to-end reinforcement detailing services tailored to meet your project’s specific requirements.
//           </p>
//         </div>
//       </section>


//       <section ref={addRef} className="scroll-fade-up max-w-7xl mx-auto px-6 py-20">
//   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//     {services.map((s, i) => (
//       <div
//         key={s.title}
//         ref={addRef}
//         className="service-card scroll-fade-up bg-zinc-800 border border-zinc-700 p-8 group overflow-hidden min-w-0 w-full"
//         style={{ transitionDelay: `${i * 100}ms` }}
//       >
//         <img
//           src={s.icon}
//           alt={s.title}
//           className="service-card-icon w-12 h-12 object-contain mb-5 flex-shrink-0"
//         />
//         <h3 className="text-xl font-black uppercase mb-3 group-hover:text-yellow-500 transition-colors break-words">
//           {s.title}
//         </h3>
//         <p className="text-zinc-400 text-sm leading-relaxed mb-5 break-words">
//           {s.desc}
//         </p>
//         <ul className="space-y-2">
//           {s.items.map((item) => (
//             <li key={item} className="flex items-center gap-2 text-sm text-zinc-300 min-w-0">
//               <span className="w-1.5 h-1.5 bg-yellow-500 flex-shrink-0" />
//               <span className="break-words min-w-0">{item}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//   </div>
// </section>

//       {/* ── Process Section ── */}
//       <section ref={addRef} className="scroll-fade-up bg-zinc-800 border-t border-zinc-700 py-20 px-6">
//         <div className="max-w-7xl mx-auto">

//           {/* Header */}
//           <div
//             ref={addRef}
//             className="process-section-header scroll-fade-up text-center mb-14"
//           >
//             <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">
//               How We Work
//             </span>
//             <h2 className="text-4xl font-black uppercase mt-2 mb-5">Our Process</h2>
//             <div className="process-divider h-1 bg-yellow-500" />
//           </div>

//           {/* Steps */}
//           <div ref={addRef} className="scroll-fade-up grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { step: "01", title: "Project Assessment", desc: "Understand project scope, drawings, and client requirements." },
//               { step: "02", title: "Strategic Planning", desc: "Define workflow, timelines, and detailing approach." },
//               { step: "03", title: "Detailing Execution", desc: "Expert crews execute every phase with precision and care." },
//               { step: "04", title: "Quality Assurance & Delivery", desc: "Final inspections, quality checks, and project delivery." },
//             ].map((p, i) => (
//               <div
//                 key={p.step}
//                 ref={addRef}
//                 className="process-step scroll-fade-up relative"
//                 style={{ transitionDelay: `${i * 120}ms` }}
//               >
//                 <div className="text-7xl font-black text-yellow-500/10 leading-none mb-2">{p.step}</div>
//                 <h3 className="text-white font-bold text-lg uppercase mb-2">{p.title}</h3>
//                 <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }



import PillarsIcon from '../Assets/Services_Icons/pillars.png';
import Building from '../Assets/Services_Icons/office-building.png';
import Hook from '../Assets/Services_Icons/hook.png';
import QualityAssurance from '../Assets/Services_Icons/quality.png';
import Designing from '../Assets/Services_Icons/design.png';
import Divider from '../Assets/Services_Icons/divider.png';
import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';

const services = [
  {
    icon: Building,
    title: "Rebar Detailing",
    desc: "All structural components, including beams, columns, slabs, footings, walls, and unique structures, have thorough reinforcing details. Each bar was positioned precisely.",
    items: ["Office Complexes", "Retail Centers", "Warehouses", "Industrial Parks"],
  },
  {
    icon: PillarsIcon,
    title: "Bar Bending Schedules",
    desc: "Accurate BBS preparation with precise bar marks, shapes, dimensions, and quantities, ensuring a seamless procurement and fabrication workflow.",
    items: [
      "Precision-driven Quantity Takeoffs",
      "Compliance with Standard Shape Codes",
      "Accurate and Reliable Weight Calculations",
      "Comprehensive Cutting & Bending Lists"
    ],
  },
  {
    icon: Hook,
    title: "Renovation & Remodeling",
    desc: "Revitalize existing structures with our comprehensive renovation and remodeling services.We handle repair works with detailed reinforcement elements and provide clear, accurate shop drawings.",
    items: ["Interior Remodeling", "Structural Repairs", "Extensions"],
  },
  {
    icon: Divider,
    title: "Civil & Infrastructure",
    desc: "Roads, bridges, drainage systems, and public infrastructure built for longevity.",
    items: ["Road Construction", "Bridge Building", "Drainage Systems", "Public Works"],
  },
  {
    icon: QualityAssurance,
    title: "Project Management",
    desc: "End-to-end project management ensuring timelines, budgets, and quality standards are met.",
    items: [
      "Client Requirement Focus",
      "Submission Scheduling",
      "Client Clarifications",
      "Three-Step Checking",
      "Shop Drawing QA",
      "Final Client Submission"
    ],
  },
  {
    icon: Designing,
    title: "Shop Drawing Review & Coordination",
    desc: "Ensure accurate, clash-free, and fully coordinated shop drawings aligned with project requirements and standards.",
    items: [
      "Drawing Compliance Check",
      "Rebar Detailing Verification",
      "Clash Detection & Resolution",
      "Client Specification Alignment",
      "Interdisciplinary Coordination",
      "Revision & Update Management"
    ],
  },
];

export default function Services() {
  const addRef = useScrollAnimation();

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--color-bg-base)',
        color: 'var(--color-text-primary)'
      }}
    >

      {/* ── HERO ── */}
      <section
        ref={addRef}
        className="scroll-fade-up border-b py-24 px-6 relative overflow-hidden"
        style={{
          backgroundColor: 'var(--color-bg-dark)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--color-primary) 0,
              var(--color-primary) 1px,
              transparent 0,
              transparent 20px
            )`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <span
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-primary)' }}
          >
            What We Build
          </span>

          <h1 className="text-5xl md:text-6xl font-black uppercase mt-2 mb-4">
            Rebar Detailing{" "}
            <span style={{ color: 'var(--color-primary)' }}>Solutions</span>
          </h1>

          <div
            className="h-1 mb-6"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />

          <p
            className="max-w-lg text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            From concept to construction-ready documentation, we deliver end-to-end reinforcement detailing services tailored to meet your project’s specific requirements.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section ref={addRef} className="scroll-fade-up max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              ref={addRef}
              className="service-card scroll-fade-up border p-8 group overflow-hidden min-w-0 w-full"
              style={{
                transitionDelay: `${i * 100}ms`,
                backgroundColor: 'var(--color-bg-card)',
                borderColor: 'var(--color-border)'
              }}
            >
              <img
                src={s.icon}
                alt={s.title}
                className="w-12 h-12 object-contain mb-5"
              />

              <h3
                className="text-xl font-black uppercase mb-3 transition-colors break-words"
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
              >
                {s.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5 break-words"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {s.desc}
              </p>

              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    <span
                      className="w-1.5 h-1.5"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        ref={addRef}
        className="scroll-fade-up border-t py-20 px-6"
        style={{
          backgroundColor: 'var(--color-bg-dark)',
          borderColor: 'var(--color-border)'
        }}
      >
        <div className="max-w-7xl mx-auto">

          <div ref={(el) => addRef(el)} className="scroll-fade-up text-center mb-14">
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: 'var(--color-primary)' }}
            >
              How We Work
            </span>

            <h2 className="text-4xl font-black uppercase mt-2 mb-5">
              Our Process
            </h2>

            <div
              className="h-1"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
          </div>

          <div ref={(el) => addRef(el)} className="scroll-fade-up grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Project Assessment", desc: "Understand project scope, drawings, and client requirements." },
              { step: "02", title: "Strategic Planning", desc: "Define workflow, timelines, and detailing approach." },
              { step: "03", title: "Detailing Execution", desc: "Expert crews execute every phase with precision and care." },
              { step: "04", title: "Quality Assurance & Delivery", desc: "Final inspections, quality checks, and project delivery." },
            ].map((p, i) => (
              <div
                key={p.step}
                ref={addRef}
                className="scroll-fade-up"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className="text-7xl font-black mb-2"
                  style={{ color: 'rgba(255, 193, 7, 0.1)' }}
                >
                  {p.step}
                </div>

                <h3 className="font-bold text-lg uppercase mb-2">
                  {p.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}