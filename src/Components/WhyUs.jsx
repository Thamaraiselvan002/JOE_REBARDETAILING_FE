// import React from 'react'
// import useScrollAnimation from './CommonComponents/useScrollAnimation';
// import '../CustomStyles/WhyUs.css'
// import AASHTO from '../Assets/WhyUs_Images/AASHTO.png';
// import ACI318 from '../Assets/WhyUs_Images/ACI318.jpg';
// import ASTM from '../Assets/WhyUs_Images/ASTM.jpg';
// import Autocad from '../Assets/WhyUs_Images/Autocad.png';
// import CRSI from '../Assets/WhyUs_Images/CRSI.png';
// import RebarCad from '../Assets/WhyUs_Images/RebarCad.png';



// // Define your images array
// const carouselImages = [
//   { src: AASHTO, alt: "AASHTO" },
//   { src: ACI318, alt: "ACI318" },
//   { src: ASTM, alt: "ASTM" },
//   { src: Autocad, alt: "Autocad" },
//   { src: CRSI, alt: "CRSI" },
//   { src: RebarCad, alt: "RebarCad" },
// ];

// export default function WhyUs (){
//     const addRef = useScrollAnimation();
//     return (
//         <div ref={addRef} className="bg-zinc-900 text-white min-h-screen">
//             <section ref={addRef} className="scroll-fade-up bg-zinc-800 border-b border-zinc-700 py-24 px-6 relative overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(45deg, #eab308 0, #eab308 1px, transparent 0, transparent 20px)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//         <div className="relative max-w-7xl mx-auto">
//           <span className="services-hero-badge text-yellow-500 text-xs font-bold uppercase tracking-[0.3em] ">
//             Why Choose Us
//           </span>
//           <h1 className="services-hero-title text-5xl md:text-2xl font-black uppercase mt-2 mb-4">
//             Precision was the foundation of this structure.<span className="text-yellow-500">Trust propels us forward.</span>
//           </h1>
//             <div className="anim-hero-divider h-1 bg-yellow-500 mb-6" />
//           <p className="services-hero-desc text-zinc-400 max-w-lg text-lg">
//             We deliver precision-driven, high-quality solutions that empower businesses to achieve reliable performance and long-term success.          </p>
//         </div>
//       </section>

//     <section ref={addRef} className="scroll-fade-up max-w-7xl mx-auto px-6 py-20">
//   <div className="text-center mb-12">
//     <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">
//       Our Standards and Instruments
//     </span>
//     <div className="w-40 h-1 bg-yellow-500 mx-auto mt-4" />
//   </div>

//   {/* Added flex flex-col items-center to center the carousel */}
//   <div className="flex flex-col items-center w-full">
//     <div className=" carousel-wrapper w-full max-w-4xl overflow-hidden">
//       <div className="carousel-track">
//         {/* Original group */}
//         <div className="carousel-group">
//           {carouselImages.map((img, i) => (
//             <div key={i} className="card">
//               <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
//             </div>
//           ))}
//         </div>

//         {/* Duplicate for seamless loop */}
//         <div className="carousel-group" aria-hidden="true">
//           {carouselImages.map((img, i) => (
//             <div key={i} className="card">
//               <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
//             </div>
//           ))}
//         </div>
//         {/* Duplicate for seamless loop */}
//         <div className="carousel-group" aria-hidden="true">
//           {carouselImages.map((img, i) => (
//             <div key={i} className="card">
//               <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </div>
//   </div>
// </section>

//         </div>


//     );
// }


import React from 'react'
import useScrollAnimation from './CommonComponents/useScrollAnimation';
import '../CustomStyles/WhyUs.css'
import AASHTO from '../Assets/WhyUs_Images/AASHTO.png';
import ACI318 from '../Assets/WhyUs_Images/ACI318.jpg';
import ASTM from '../Assets/WhyUs_Images/ASTM.jpg';
import Autocad from '../Assets/WhyUs_Images/Autocad.png';
import CRSI from '../Assets/WhyUs_Images/CRSI.png';
import RebarCad from '../Assets/WhyUs_Images/RebarCad.png';

// Images
const carouselImages = [
  { src: AASHTO, alt: "AASHTO" },
  { src: ACI318, alt: "ACI318" },
  { src: ASTM, alt: "ASTM" },
  { src: Autocad, alt: "Autocad" },
  { src: CRSI, alt: "CRSI" },
  { src: RebarCad, alt: "RebarCad" },
];

export default function WhyUs (){
  const addRef = useScrollAnimation();

  return (
    <div
      ref={(el) => addRef(el)}
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
            className="services-hero-badge text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-primary)' }}
          >
            Why Choose Us
          </span>

          <h1 className="services-hero-title text-5xl md:text-2xl font-black uppercase mt-2 mb-4">
            Precision was the foundation of this structure.
            <span style={{ color: 'var(--color-primary)' }}>
              Trust propels us forward.
            </span>
          </h1>

          <div
            className="anim-hero-divider h-1 mb-6"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />

          <p
            className="services-hero-desc max-w-lg text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            We deliver precision-driven, high-quality solutions that empower businesses to achieve reliable performance and long-term success.
          </p>

        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section
        ref={(el) => addRef(el)}
        className="scroll-fade-up max-w-7xl mx-auto px-6 py-20"
      >

        <div className="text-center mb-12">
          <span
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-primary)' }}
          >
            Our Standards and Instruments
          </span>

          <div
            className="w-40 h-1 mx-auto mt-4"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center w-full">
          <div className="carousel-wrapper w-full max-w-4xl overflow-hidden">
            <div className="carousel-track">

              {/* Original */}
              <div className="carousel-group">
                {carouselImages.map((img, i) => (
                  <div key={i} className="card">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>

              {/* Duplicate */}
              <div className="carousel-group" aria-hidden="true">
                {carouselImages.map((img, i) => (
                  <div key={i} className="card">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>

              {/* Duplicate */}
              <div className="carousel-group" aria-hidden="true">
                {carouselImages.map((img, i) => (
                  <div key={i} className="card">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  );
}