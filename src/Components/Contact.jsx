// import { useState } from "react";
// import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';


// export default function Contact() {
//   const addRef = useScrollAnimation();  

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.name && form.email && form.message) {
//       setSubmitted(true);
//     }
//   };

//   return (
//     <div className="bg-zinc-900 text-white min-h-screen">
//       {/* Page Hero */}
//       <section ref={addRef} className="scroll-fade-up bg-zinc-800 border-b border-zinc-700 py-24 px-6 relative overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg, #eab308 0, #eab308 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #eab308 0, #eab308 1px, transparent 0, transparent 50%)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//         <div className="relative max-w-7xl mx-auto">
//           <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]">Get In Touch</span>
//           <h1 className="text-5xl md:text-6xl font-black uppercase mt-2 mb-4">
//             Contact <span className="text-yellow-500">Us</span>
//           </h1>
//             <div className="anim-hero-divider h-1 bg-yellow-500 mb-6" />
//           <p className="text-zinc-400 max-w-lg text-lg">
//             Ready to discuss your project? Our team is available Monday through Saturday. Reach out and we'll respond within 24 hours.
//           </p>
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-5 gap-12">
//           {/* Contact Info */}
//           <div ref={addRef} className="scroll-fade-up lg:col-span-2 space-y-6">
//             <h2 className="text-2xl font-black uppercase mb-6">
//               Reach Us <span className="text-yellow-500">Directly</span>
//             </h2>
//             {[
//               {
//                 icon: "📍",
//                 title: "Office Address",
//                 detail: "Chennai, TamilNadu, India",
//               },
//               // {
//               //   icon: "📞",
//               //   title: "Phone Number",
//               //   detail: "+1 (800) 555-BUILD\n+1 (212) 555-0192",
//               // },
//               {
//                 icon: "✉️",
//                 title: "Email Address",
//                 detail: "deepa@joerebarservices.com\ndetailing@joerebarservices.com",
//               },
//               {
//                 icon: "🕐",
//                 title: "Working Hours",
//                 detail: "Reliable & Timely Communication",
//               },
//             ].map((c) => (
//               <div
//                 key={c.title}
//                 className="bg-zinc-800 border border-zinc-700 p-5 flex gap-4 hover:border-yellow-500/50 transition-all"
//               >
//                 <span className="text-2xl flex-shrink-0">{c.icon}</span>
//                 <div>
//                   <h4 className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-1">
//                     {c.title}
//                   </h4>
//                   <p className="text-zinc-400 text-sm whitespace-pre-line">{c.detail}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Contact Form */}
//           <div ref={addRef} className="scroll-fade-up lg:col-span-3">
//             <h2 className="text-2xl font-black uppercase mb-6">
//               Send a <span className="text-yellow-500">Message</span>
//             </h2>

//             {submitted ? (
//               <div ref={addRef} className="scroll-fade-up bg-zinc-800 border border-yellow-500 p-10 text-center">
//                 <div className="text-6xl mb-4">✅</div>
//                 <h3 className="text-2xl font-black text-yellow-500 uppercase mb-2">Message Sent!</h3>
//                 <p className="text-zinc-400">
//                   Thank you, <strong className="text-white">{form.name}</strong>! Our team will contact you within 24 hours.
//                 </p>
//                 <button
//                   onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
//                   className="mt-6 px-6 py-2.5 bg-yellow-500 text-zinc-900 font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all"
//                 >
//                   Send Another
//                 </button>
//               </div>
//             ) : (
//               <form ref={addRef} onSubmit={handleSubmit} className="scroll-fade-up space-y-5">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
//                       Full Name <span className="text-#ef4444-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={form.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="Please Enter Your Name..."
//                       className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-zinc-600"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
//                       Email Address  <span className="text-#ef4444-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       required
//                       placeholder="Please Enter Your Email..."
//                       className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-zinc-600"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={form.phone}
//                       onChange={handleChange}
//                       placeholder="Please Enter Your Mobile No..."
//                       className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder-zinc-600"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
//                       Service Needed
//                     </label>
//                     <select
//                       name="service"
//                       value={form.service}
//                       onChange={handleChange}
//                       className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors appearance-none"
//                     >
//                       <option value="">Select a service...</option>
//                       <option>Rebar Detailing</option>
//                       <option>Bar Bending Schedules</option>
//                       <option>Renovation & Remodeling</option>
//                       <option>Civil & Infrastructure</option>
//                       <option>Project Management</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2">
//                     Your Message <span className="text-#ef4444-500">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     placeholder="Tell us about your project..."
//                     className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors resize-none placeholder-zinc-600"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-4 bg-yellow-500 text-zinc-900 font-black text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all duration-200"
//                 >
//                   Send Message →
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { useState } from "react";
import useScrollAnimation from '../Components/CommonComponents/useScrollAnimation';
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../Constants/EmailServices";
import Swal from "sweetalert2";

export default function Contact() {
  const addRef = useScrollAnimation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;

  let updatedValue = value;

  // 🔹 Name: allow only letters, space, dot
  if (name === "name") {
    updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
  }

  // 🔹 Phone: allow only numbers and +
  if (name === "phone") {
    updatedValue = value.replace(/[^0-9+]/g, "");
  }

  // 🔹 Email: no restriction while typing (validate later)
  if (name === "email") {
    updatedValue = value;
  }

  setForm((prev) => ({
    ...prev,
    [name]: updatedValue,
  }));

  // 🔹 Remove error when user types valid input
  setErrors((prev) => ({
    ...prev,
    [name]: updatedValue.trim() ? "" : prev[name],
  }));
};


const validateForm = () => {
  let newErrors = {};

  // Name
  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  }

  // Email
  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Invalid email format";
  }

  // Phone
  if (!form.phone.trim()) {
    newErrors.phone = "Phone number is required";
  }

  // Service
  if (!form.service) {
    newErrors.service = "Please select a service";
  }

  // Message
  if (!form.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const isValid = validateForm();

  if(isValid){
      emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: form?.name,
      email: form?.email,
      phone: form?.phone,
      service: form?.service,
      message: form?.message,
    },
    PUBLIC_KEY
  )
  .then(() => {
    setSubmitted(true);
Swal.fire({
  icon: "success",
  title: "Message Sent Successfully",
  text: "We will get back to you!!!!",
});

    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  })
  .catch((error) => {
    console.error(error);
    alert("Email failed to send");
  });
  }

};

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
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              var(--color-primary) 0,
              var(--color-primary) 1px,
              transparent 0,
              transparent 50%
            ),
            repeating-linear-gradient(
              90deg,
              var(--color-primary) 0,
              var(--color-primary) 1px,
              transparent 0,
              transparent 50%
            )`,
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <span
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-primary)' }}
          >
            Get In Touch
          </span>

          <h1 className="text-5xl md:text-6xl font-black uppercase mt-2 mb-4">
            Contact <span style={{ color: 'var(--color-primary)' }}>Us</span>
          </h1>

          <div
            className="h-1 mb-6"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />

          <p
            className="max-w-lg text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Ready to discuss your project? Our team is available Monday through Saturday. Reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* CONTACT INFO */}
          <div ref={(el) => addRef(el)} className="scroll-fade-up lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black uppercase mb-6">
              Reach Us <span style={{ color: 'var(--color-primary)' }}>Directly</span>
            </h2>

            {[
              {
                icon: "📍",
                title: "Office Address",
                detail: "Chennai, TamilNadu, India",
              },
              {
                icon: "✉️",
                title: "Email Address",
                detail: "deepa@joerebarservices.com\ndetailing@joerebarservices.com",
              },
              {
                icon: "🕐",
                title: "Working Hours",
                detail: "Reliable & Timely Communication",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="border p-5 flex gap-4 transition-all"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border)'
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <span className="text-2xl">{c.icon}</span>

                <div>
                  <h4
                    className="font-bold text-xs uppercase tracking-widest mb-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {c.title}
                  </h4>

                  <p
                    className="text-sm whitespace-pre-line"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {c.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div ref={(el) => addRef(el)} className="scroll-fade-up lg:col-span-3">
            <h2 className="text-2xl font-black uppercase mb-6">
              Send a <span style={{ color: 'var(--color-primary)' }}>Message</span>
            </h2>

            <div>
             <form ref={(el) => addRef(el)} noValidate onSubmit={handleSubmit} className="scroll-fade-up space-y-5">

  {/* NAME + EMAIL */}
  <div className="grid sm:grid-cols-2 gap-5">

    {/* NAME */}
    <div>
      <label
        className="block text-xs uppercase mb-2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Full Name <span style={{ color: 'var(--color-primary)' }}>*</span>
      </label>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Please enter your name..."
        className="w-full px-4 py-3 text-sm border"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          borderColor: errors.name ? '#ef4444' : 'var(--color-border)',
          color: 'var(--color-text-primary)'
        }}
        required= {true}
      />
    </div>

    {/* EMAIL */}
    <div>
      <label
        className="block text-xs uppercase mb-2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Email Address <span style={{ color: 'var(--color-primary)' }}>*</span>
      </label>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Please enter your email..."
        className="w-full px-4 py-3 text-sm border"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          borderColor: errors.email ? '#ef4444' : 'var(--color-border)',
          color: 'var(--color-text-primary)'
        }}
        required= {true}
      />
    </div>

  </div>

  {/* PHONE + SERVICE */}
  <div className="grid sm:grid-cols-2 gap-5">

    {/* PHONE */}
    <div>
      <label
        className="block text-xs uppercase mb-2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Phone Number
      </label>

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Please enter your phone number..."
        className="w-full px-4 py-3 text-sm border"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-primary)'
        }}
      />
    </div>

    {/* SERVICE */}
    <div>
      <label
        className="block text-xs uppercase mb-2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Service Needed
      </label>

      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className="w-full px-4 py-3 text-sm border"
        style={{
          backgroundColor: 'var(--color-bg-card)',
          borderColor: 'var(--color-border)',
          color: 'var(--color-text-primary)'
        }}
      >
        <option value="">Select a service...</option>
        <option>Rebar Detailing</option>
        <option>Bar Bending Schedules</option>
        <option>Renovation</option>
      </select>
    </div>

  </div>

  {/* MESSAGE */}
  <div>
    <label
      className="block text-xs uppercase mb-2"
      style={{ color: 'var(--color-text-muted)' }}
    >
      Your Message <span style={{ color: 'var(--color-primary)' }}>*</span>
    </label>

    <textarea
      name="message"
      value={form.message}
      onChange={handleChange}
      rows={5}
      placeholder="Please describe your requirement..."
      className="w-full px-4 py-3 text-sm border"
      style={{
        backgroundColor: 'var(--color-bg-card)',
        borderColor: errors.message ? '#ef4444' : 'var(--color-border)',        
        color: 'var(--color-text-primary)'
      }}
      required={true}
    />
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="w-full py-4 font-black text-sm uppercase tracking-widest"
    style={{
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-bg-base)'
    }}
    
  >
    Send Message →
  </button>

</form>

</div>
          </div>

        </div>
      </section>

    </div>
  );
}
