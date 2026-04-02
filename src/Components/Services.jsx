

import PillarsIcon from '../Assets/Services_Icons/pillars.png';
import Building from '../Assets/Services_Icons/office-building.png';
import Hook from '../Assets/Services_Icons/hook.png';
import QualityAssurance from '../Assets/Services_Icons/quality.png';
import Designing from '../Assets/Services_Icons/design.png';
import Divider from '../Assets/Services_Icons/divider.png';
import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';
import { ClipboardList, Workflow, Hammer, CheckCircle } from "lucide-react";

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

const steps = [
  {
    title: "Project Assessment",
    desc: "Understand project scope, drawings, and client requirements.",
    icon: ClipboardList,
  },
  {
    title: "Strategic Planning",
    desc: "Define workflow, timelines, and detailing approach.",
    icon: Workflow,
  },
  {
    title: "Detailing Execution",
    desc: "Expert crews execute every phase with precision and care.",
    icon: Hammer,
  },
  {
    title: "Quality Assurance & Delivery",
    desc: "Final inspections, quality checks, and project delivery.",
    icon: CheckCircle,
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
            // <div
            //   key={s.title}
            //   ref={addRef}
            //   className="service-card scroll-fade-up border p-8 group overflow-hidden min-w-0 w-full"
            //   style={{
            //     transitionDelay: `${i * 100}ms`,
            //     backgroundColor: 'var(--color-bg-card)',
            //     borderColor: 'var(--color-border)'
            //   }}
            // >
            <div
                key={s.title}
                ref={addRef}
                className="service-card scroll-fade-up border p-8 group overflow-hidden min-w-0 w-full 
                transition-all duration-200 ease-in-out transform"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border)',
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
              { step: "🔍", title: "Project Assessment", desc: "Understand project scope, drawings, and client requirements." },
              { step: "📝", title: "Strategic Planning", desc: "Define workflow, timelines, and detailing approach." },
              { step: "⚙️", title: "Detailing Execution", desc: "Expert crews execute every phase with precision and care." },
              { step: "🚀", title: "Quality Assurance & Delivery", desc: "Final inspections, quality checks, and project delivery." },
            ].map((p, i) => (
              <div
                key={p.step}
                ref={addRef}
                className="scroll-fade-up"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className="text-7xl font-black mb-2"
                  style={{ color: 'rgba(149, 132, 82, 0.59)' }}
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