import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const RAZORPAY_PAYMENT_LINK = "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    email: "",
    phone: "",
    bookingFor: "",
    profession: "",
    painArea: [] as string[],
  });

  const [errors, setErrors] = useState<any>({});
  const [shake, setShake] = useState(false);

  const handlePainToggle = (area: string) => {
    setFormData(prev => ({
      ...prev,
      painArea: prev.painArea.includes(area)
        ? prev.painArea.filter(a => a !== area)
        : [...prev.painArea, area],
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.age.trim()) newErrors.age = true;
    if (!formData.city.trim()) newErrors.city = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = true;
    if (!formData.profession.trim()) newErrors.profession = true;
    if (!formData.bookingFor.trim()) newErrors.bookingFor = true;
    if (formData.painArea.length === 0) newErrors.painArea = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Pre-save form data to backend (webhook will use this)
    fetch("https://sourabh-lp-1.onrender.com/api/pre-register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(console.error); // fire-and-forget

    // Track Facebook pixel event
    if (window.fbq) window.fbq("track", "InitiateCheckout");

    // Redirect to Razorpay with pre-filled fields (delay to let pixel fire)
    const params = new URLSearchParams({
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
    });

    setTimeout(() => {
      window.location.href = `${RAZORPAY_PAYMENT_LINK}?${params.toString()}`;
    }, 300);
  };

  const inputClass = (field: string) =>
    `w-full bg-card border rounded-xl px-4 py-3 text-foreground text-sm
     transition-all duration-200
     focus:outline-none focus:ring-2 focus:ring-orange-500/60
     focus:border-orange-500
     ${errors[field] ? "border-red-500" : "border-border"}`;

  return (
    <section id="register" className="py-10 md:py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="relative bg-secondary/30 rounded-3xl px-6 md:px-10 py-12 overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-lg mx-auto">

              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                FM4 Workshop Mein Apni Seat Book Karein
              </h2>

              <p className="text-center mb-2">
                <span className="text-foreground">Special Price: </span>
                <span className="text-gradient font-bold">₹99</span>
                <span className="text-muted-foreground line-through ml-2">₹499</span>
              </p>

              {/* Razorpay Badge */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 px-5 py-2 rounded-full
                                border border-orange-500/40
                                bg-gradient-to-r from-orange-500/5 to-yellow-400/5
                                backdrop-blur-sm
                                shadow-[0_0_10px_rgba(255,140,0,0.15)]">
                  <span className="text-orange-400 text-sm">🔒</span>
                  <span className="text-xs text-muted-foreground">
                    Secure Checkout by
                  </span>
                  <span className="text-orange-400 font-semibold text-xs tracking-wide">
                    Razorpay
                  </span>
                </div>
              </div>

              <form
                className={`space-y-4 ${shake ? "animate-shake" : ""}`}
                onSubmit={handleSubmit}
              >

                {/* Name */}
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                  <input
                    className={inputClass("name")}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Age & City */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Age</label>
                    <input
                      type="number"
                      min="1"
                      max="120"
                      className={inputClass("age")}
                      value={formData.age}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          age: e.target.value.replace(/\D/g, ""),
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">City</label>
                    <input
                      className={inputClass("city")}
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    className={inputClass("email")}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
                  <input
                    type="tel"
                    maxLength={10}
                    className={inputClass("phone")}
                    value={formData.phone}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        phone: e.target.value.replace(/\D/g, ""),
                      })
                    }
                  />
                </div>

                {/* Radio */}
                <div className={errors.bookingFor ? "border border-red-500 rounded-xl p-3" : ""}>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Aap kiske liye book kar rahe hain?
                  </label>

                  <div className="flex gap-4">
                    {[
                      { val: "self", label: "Apne liye" },
                      { val: "other", label: "Kisi loved one ke liye" },
                    ].map((o) => (
                      <label key={o.val} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="bookingFor"
                          value={o.val}
                          checked={formData.bookingFor === o.val}
                          onChange={() =>
                            setFormData({ ...formData, bookingFor: o.val })
                          }
                          className="appearance-none w-4 h-4 rounded-full border-2 border-gray-400
                             checked:border-orange-500 checked:bg-orange-500
                             relative cursor-pointer
                             before:content-[''] before:absolute before:inset-1
                             before:rounded-full before:bg-black
                             checked:before:bg-black"
                        />
                        <span className="text-sm text-foreground">
                          {o.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Profession */}
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">
                    Aap kya karte hain?
                  </label>
                  <select
                    className={inputClass("profession")}
                    value={formData.profession}
                    onChange={e =>
                      setFormData({ ...formData, profession: e.target.value })
                    }
                  >
                    <option value="">Select Profession</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Business Owner / Entrepreneur">Business Owner / Entrepreneur</option>
                    <option value="Self-Employed / Freelancer">Self-Employed / Freelancer</option>
                    <option value="Retired / Homemaker">Retired / Homemaker</option>
                  </select>
                </div>

                {/* Pain Area */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Aapki pareshani kya hai?
                  </label>
                  <div className="flex gap-3">
                    {["Knee", "Neck", "Spine"].map(area => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => handlePainToggle(area)}
                        className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all ${
                          formData.painArea.includes(area)
                            ? "bg-orange-500 text-black border-orange-500"
                            : errors.painArea
                            ? "border-red-500"
                            : "bg-card border-border text-foreground hover:border-orange-500"
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="relative mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="relative px-10 py-4 rounded-xl
                    bg-gradient-to-r from-[#FF8A00] via-[#FFA000] to-[#FF6A00]
                    text-black font-bold text-sm
                    shadow-[0_0_15px_rgba(255,140,0,0.35)]
                    transition-all duration-300
                    hover:scale-105 hover:-translate-y-1
                    hover:shadow-[0_0_25px_rgba(255,140,0,0.5)]
                    active:scale-95"
                  >
                    ABHI REGISTER KAREIN — ₹99 PAY KAREIN
                  </button>
                </div>

                <p className="text-center text-muted-foreground text-xs mt-2">
                  UPI • Cards • Net Banking • Wallets Supported
                </p>

              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RegisterSection;
