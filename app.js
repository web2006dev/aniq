/* ========================================================
   ANIQ UNISEX BEAUTY SALON & TATTOOS — KPHB HYDERABAD
   Core Application Logic, Dual Menu (Salon + Ink) & WhatsApp Booking
   ======================================================== */

const ANIQ_DATA = {
  name: "ANIQ UNISEX BEAUTY SALON & TATTOOS",
  rating: 3.7,
  reviewsCount: 27,
  phone: "9642020909",
  displayPhone: "096420 20909",
  franchisePhone: "8143266223",
  address: "3rd phase, K P H B, opp. Vinayaka temple, near Ramya grounds, Kukatpally Housing Board Colony, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072",
  branches: [
    "KPHB Phase 3 (Flagship - 096420 20909)",
    "Bhagyalatha Colony, Hyderabad (040-24201515)",
    "Dilsukh Nagar, Hyderabad (SJI Complex)",
    "Kalyandurgam (Near Valmiki Circle - 8143266223)"
  ],
  openingHour: 8.5, // 8:30 AM
  closingHour: 22.5 // 10:30 PM (Late Night)
};

// --- Services Menu Catalog ---
const ANIQ_SERVICES = [
  // Hair & Braids
  {
    id: "hair-fade",
    category: "hair",
    categoryLabel: "Hair & Styling",
    name: "Precision Men's Haircut & Taper Fade",
    price: "₹299",
    duration: "30 mins",
    desc: "Clean clipper architecture, scissor detailing, scalp wash and matte clay styling.",
    badge: "Trending"
  },
  {
    id: "hair-women-cut",
    category: "hair",
    categoryLabel: "Hair & Styling",
    name: "Women's Layered Cut & Volume Blowout",
    price: "₹599",
    duration: "45 mins",
    desc: "Custom face-framing layers, butterfly snips, wash, and high-shine blowout finish.",
    badge: "Popular"
  },
  {
    id: "box-braids",
    category: "hair",
    categoryLabel: "Hair & Styling",
    name: "Custom Box Braids & Cornrows",
    price: "₹1,499",
    duration: "120 mins",
    desc: "Intricate protective braided patterns with neat partings and scalp nourishing oils.",
    badge: "Signature"
  },
  {
    id: "hair-smoothening",
    category: "hair",
    categoryLabel: "Hair & Styling",
    name: "Permanent Hair Smoothening / Straightening",
    price: "₹2,999",
    duration: "180 mins",
    desc: "Glass-straight, frizz-free hair using premium L'Oréal formulas. Starting offer rate.",
    badge: "Bestseller"
  },
  {
    id: "hair-spa",
    category: "hair",
    categoryLabel: "Hair & Styling",
    name: "Deep Restorative Hair Spa & Scalp Detox",
    price: "₹999",
    duration: "50 mins",
    desc: "Hydrating hair mask, hot ozone steam, acupressure head massage, and split-end repair.",
    badge: null
  },

  // Tattoo Studio
  {
    id: "tattoo-minimal",
    category: "tattoos",
    categoryLabel: "Tattoo Studio",
    name: "Custom Minimalist / Name / Script Ink",
    price: "₹999",
    duration: "45 mins",
    desc: "Ultra-fine line needle precision, personalized fonts, quotes, or delicate symbols.",
    badge: "Popular"
  },
  {
    id: "tattoo-geometric",
    category: "tattoos",
    categoryLabel: "Tattoo Studio",
    name: "Geometric / Mandala / Sleeve Artwork",
    price: "₹2,499",
    duration: "120 mins",
    desc: "Symmetrical sacred geometry and dot-work shading using imported sterile inks.",
    badge: "Custom Art"
  },
  {
    id: "tattoo-coverup",
    category: "tattoos",
    categoryLabel: "Tattoo Studio",
    name: "Tattoo Cover-up & Re-shading",
    price: "₹1,800",
    duration: "90 mins",
    desc: "Expert transformation of old faded ink into fresh, vibrant contemporary designs.",
    badge: null
  },

  // Skin & Facials
  {
    id: "dtan-cleanup",
    category: "skin",
    categoryLabel: "Skin & Facials",
    name: "Instant De-Tan Therapy & Pore Cleanup",
    price: "₹499",
    duration: "35 mins",
    desc: "Rapid tan removal for sun-exposed skin, blackhead extraction, and calming mint mask.",
    badge: "Quick Refresh"
  },
  {
    id: "o3-facial",
    category: "skin",
    categoryLabel: "Skin & Facials",
    name: "O3+ Radiance Whitening & Glow Facial",
    price: "₹1,799",
    duration: "60 mins",
    desc: "Oxygenating dermatological facial for bridal luster and dark spot reduction.",
    badge: "High Glow"
  },
  {
    id: "gold-facial",
    category: "skin",
    categoryLabel: "Skin & Facials",
    name: "24K Gold Dust Anti-Aging Facial",
    price: "₹1,499",
    duration: "55 mins",
    desc: "Collagen stimulation, lymphatic massage, and radiant gold serum infusion.",
    badge: null
  },

  // Grooming & Threading
  {
    id: "eyebrow-threading",
    category: "grooming",
    categoryLabel: "Threading & Shave",
    name: "Eyebrow Threading & Forehead Shape",
    price: "₹49",
    duration: "15 mins",
    desc: "Quick, hygienic arch shaping with soothing aloe touch. Special price starting ₹49.",
    badge: "Starts ₹49"
  },
  {
    id: "royal-shave",
    category: "grooming",
    categoryLabel: "Threading & Shave",
    name: "Royal Straight-Razor Shave & Beard Trim",
    price: "₹199",
    duration: "25 mins",
    desc: "Hot towel pre-treatment, clean razor alignment, and refreshing aftershave tonic.",
    badge: null
  },
  {
    id: "body-waxing",
    category: "grooming",
    categoryLabel: "Threading & Shave",
    name: "Full Arms & Legs Waxing (Honey / Rica)",
    price: "₹899",
    duration: "40 mins",
    desc: "Gentle hair removal leaving skin silky and soft with zero irritation.",
    badge: null
  },

  // Bridal & Makeup
  {
    id: "bridal-hd",
    category: "bridal",
    categoryLabel: "Bridal & Glam",
    name: "HD Bridal Makeup & Saree Draping",
    price: "₹9,999",
    duration: "180 mins",
    desc: "Complete bridal transformation: waterproof HD base, floral hair styling, jewels & drape.",
    badge: "Bridal Suite"
  },
  {
    id: "party-makeup",
    category: "bridal",
    categoryLabel: "Bridal & Glam",
    name: "Cocktail / Sangeet / Reception Makeup",
    price: "₹2,499",
    duration: "75 mins",
    desc: "Luminous dewy makeup with defined eyes and contemporary textured updos.",
    badge: null
  }
];

// --- Curated Lookbook Photos ---
const LOOKBOOK_ITEMS = [
  {
    title: "Precision Haircut & Fade Architecture",
    category: "Men's Styling",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    desc: "Sharp skin taper with razor line-up and clean beard sculpting."
  },
  {
    title: "Intricate Box Braids & Protective Style",
    category: "Braids & Hair",
    img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80",
    desc: "Neat geometric sectioning with long-lasting lightweight braids."
  },
  {
    title: "Custom Fine-Line & Script Tattoo",
    category: "Tattoo Studio",
    img: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80",
    desc: "Single-needle minimalist ink with 100% sterile hygienic equipment."
  },
  {
    title: "Silk Hair Straightening & Keratin Shine",
    category: "Chemical Treatments",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
    desc: "Zero-frizz pin-straight finish with mirror gloss reflection."
  },
  {
    title: "Telugu Bridal Glam & Saree Draping",
    category: "Bridal Artistry",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    desc: "Traditional bridal makeup with floral hairdo and jewelry setting."
  },
  {
    title: "Deluxe Manicure & Nail Polish Finish",
    category: "Nails & Spa",
    img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    desc: "Cuticle care, gentle scrub, and long-lasting glossy polish."
  }
];

// --- Live IST Status Calculation ---
function updateLiveStatus() {
  const statusEl = document.getElementById("salon-status-indicator");
  if (!statusEl) return;

  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5)); // IST UTC+5:30
  
  const hour = istDate.getHours() + (istDate.getMinutes() / 60);
  const isOpen = hour >= ANIQ_DATA.openingHour && hour < ANIQ_DATA.closingHour;

  if (isOpen) {
    statusEl.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block mr-1.5"></span>
      <span class="text-emerald-400 font-bold text-xs tracking-wider uppercase">Open Now · Closes 10:30 PM (Late Night)</span>
    `;
  } else {
    statusEl.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-amber-400 inline-block mr-1.5"></span>
      <span class="text-amber-300 font-bold text-xs tracking-wider uppercase">Closed Now · Opens 8:30 AM</span>
    `;
  }
}

// --- Render Services Menu ---
let currentCategory = "all";

function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  const filtered = ANIQ_SERVICES.filter(item => 
    currentCategory === "all" || item.category === currentCategory
  );

  container.innerHTML = filtered.map(s => `
    <div class="card-obsidian rounded-2xl p-5 sm:p-6 flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-stone-900 text-stone-300 border border-stone-800">
            ${s.categoryLabel}
          </span>
          ${s.badge ? `
            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E5A93C]/20 text-[#E5A93C] border border-[#E5A93C]/40">
              ${s.badge}
            </span>
          ` : ''}
        </div>

        <h3 class="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#E5A93C] transition-colors leading-snug mt-1">
          ${s.name}
        </h3>

        <p class="text-xs text-stone-400 mt-2 leading-relaxed">
          ${s.desc}
        </p>
      </div>

      <div class="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between">
        <div>
          <span class="text-[10px] text-stone-500 uppercase tracking-widest block font-medium">Pricing</span>
          <div class="flex items-baseline gap-1.5">
            <span class="text-xl font-bold text-white font-mono">${s.price}</span>
            <span class="text-[11px] text-stone-400">· ${s.duration}</span>
          </div>
        </div>

        <button onclick="openBookingModal('${s.id}')" class="btn-amber px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold shadow-sm flex items-center gap-1">
          <span>Book</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

function setupCategoryPills() {
  document.querySelectorAll(".category-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.dataset.cat;
      renderServices();
    });
  });
}

// --- Render Visual Lookbook ---
function renderLookbook() {
  const container = document.getElementById("lookbook-grid");
  if (!container) return;

  container.innerHTML = LOOKBOOK_ITEMS.map(item => `
    <div onclick="openLightbox('${item.img}', '${item.title}', '${item.category}', '${item.desc}')" 
         class="lookbook-card group rounded-2xl overflow-hidden aspect-[4/5] bg-stone-900 border border-stone-800 shadow-md">
      <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover">
      
      <div class="absolute inset-0 bg-gradient-to-t from-[#09090C]/90 via-[#09090C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
        <span class="text-[10px] font-bold uppercase tracking-widest text-[#E5A93C] block">
          ${item.category}
        </span>
        <h4 class="font-display text-base font-bold text-white mt-1 leading-snug">
          ${item.title}
        </h4>
        <p class="text-xs text-stone-300 mt-1 line-clamp-2">
          ${item.desc}
        </p>
        <span class="text-[10px] text-amber-300 font-bold mt-2 uppercase tracking-wider flex items-center gap-1">
          <span>Inspect photo</span>
          <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
        </span>
      </div>
    </div>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

// --- Lightbox Modal Logic ---
function openLightbox(imgSrc, title, category, desc) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const t = document.getElementById("lightbox-title");
  const c = document.getElementById("lightbox-category");
  const d = document.getElementById("lightbox-desc");
  if (!modal || !img) return;

  img.src = imgSrc;
  if (t) t.innerText = title;
  if (c) c.innerText = category;
  if (d) d.innerText = desc || "";

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  const img = document.getElementById("lightbox-img");
  if (img) img.src = "";
}

// --- Booking Modal Management ---
function openBookingModal(preselectedId = null) {
  const modal = document.getElementById("booking-modal");
  const select = document.getElementById("booking-service-select");
  const dateInput = document.getElementById("booking-date-input");
  if (!modal) return;

  if (select) {
    select.innerHTML = ANIQ_SERVICES.map(s => `
      <option value="${s.id}" ${s.id === preselectedId ? 'selected' : ''}>
        ${s.name} — ${s.price} (${s.duration})
      </option>
    `).join("");
  }

  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    if (!dateInput.value) dateInput.value = today;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// --- Submit Booking via WhatsApp ---
function handleBookingSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("client-name")?.value.trim();
  const phone = document.getElementById("client-phone")?.value.trim();
  const serviceId = document.getElementById("booking-service-select")?.value;
  const branch = document.getElementById("booking-branch-select")?.value || "KPHB Phase 3, Hyderabad";
  const date = document.getElementById("booking-date-input")?.value;
  const time = document.getElementById("booking-time-select")?.value;
  const note = document.getElementById("client-notes")?.value.trim() || "None";

  if (!name || !phone || !date || !time) {
    showToast("Please fill in your name, mobile, date, and preferred time slot.");
    return;
  }

  const selectedService = ANIQ_SERVICES.find(s => s.id === serviceId) || ANIQ_SERVICES[0];
  const refCode = "ANIQ-" + Math.floor(1000 + Math.random() * 9000);

  const messageText = 
`✨ *NEW SALON / TATTOO BOOKING* ✨
*ANIQ Unisex Beauty Salon & Tattoos*
━━━━━━━━━━━━━━━━━━━━━━━━━
🔖 *Booking ID:* ${refCode}
👤 *Client Name:* ${name}
📞 *Mobile:* ${phone}
💈 *Service Selection:* ${selectedService.name}
💰 *Price Est.:* ${selectedService.price} (${selectedService.duration})
📅 *Date:* ${date}
⏰ *Time:* ${time}
📍 *Branch:* ${branch}
📝 *Notes:* ${note}
━━━━━━━━━━━━━━━━━━━━━━━━━
_Please confirm my booking slot. Thank you!_`;

  // WhatsApp to KPHB Desk: 9642020909
  const waUrl = `https://wa.me/91${ANIQ_DATA.phone}?text=${encodeURIComponent(messageText)}`;

  closeBookingModal();
  showReceiptModal({
    refCode,
    name,
    phone,
    serviceName: selectedService.name,
    servicePrice: selectedService.price,
    branch,
    date,
    time,
    waUrl
  });
}

// --- Receipt Modal ---
function showReceiptModal(data) {
  const modal = document.getElementById("receipt-modal");
  const content = document.getElementById("receipt-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="text-center pb-4 border-b border-stone-800">
      <div class="w-12 h-12 mx-auto rounded-full bg-[#E5A93C]/20 text-[#E5A93C] flex items-center justify-center mb-2 border border-[#E5A93C]/40">
        <i data-lucide="check" class="w-6 h-6"></i>
      </div>
      <span class="text-[10px] uppercase font-bold tracking-widest text-[#E5A93C]">Booking Summary Prepared</span>
      <h3 class="font-display text-2xl font-bold text-white mt-0.5">Reservation Ready</h3>
      <p class="text-xs text-stone-400 mt-1">Ref ID: <span class="font-mono font-bold text-white">${data.refCode}</span></p>
    </div>

    <div class="py-4 space-y-2 text-xs sm:text-sm text-stone-300">
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Client:</span>
        <span class="font-semibold text-white">${data.name}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Contact:</span>
        <span class="font-semibold text-white">${data.phone}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Service:</span>
        <span class="font-semibold text-[#E5A93C] text-right">${data.serviceName}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Estimated Price:</span>
        <span class="font-bold text-white">${data.servicePrice}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Schedule:</span>
        <span class="font-semibold text-white">${data.date} at ${data.time}</span>
      </div>
      <div class="flex justify-between py-1 border-b border-stone-800/60">
        <span class="text-stone-400">Branch:</span>
        <span class="font-semibold text-stone-300 text-right text-[11px]">${data.branch}</span>
      </div>
    </div>

    <div class="pt-3 flex flex-col gap-2">
      <a href="${data.waUrl}" target="_blank" class="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-colors">
        <i data-lucide="message-circle" class="w-4 h-4"></i>
        <span>Send WhatsApp Confirmation (096420 20909)</span>
      </a>
      <button onclick="closeReceiptModal()" class="w-full py-2 text-xs text-stone-400 hover:text-white uppercase tracking-wider font-semibold">
        Close Window
      </button>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  if (window.lucide) lucide.createIcons();
}

function closeReceiptModal() {
  const modal = document.getElementById("receipt-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// --- Copy & Toast Utility ---
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(label ? `${label} copied!` : "Copied to clipboard!");
  }).catch(() => {
    showToast("Copy failed. Please copy manually.");
  });
}

function showToast(msg) {
  let toast = document.getElementById("aniq-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "aniq-toast";
    toast.className = "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#121217] border border-[#E5A93C]/40 text-white text-xs font-semibold shadow-2xl transition-all duration-300 opacity-0 pointer-events-none flex items-center gap-2";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-[#E5A93C]"></i> ${msg}`;
  if (window.lucide) lucide.createIcons();

  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 3200);
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  updateLiveStatus();
  setInterval(updateLiveStatus, 60000);

  renderServices();
  setupCategoryPills();
  renderLookbook();

  const form = document.getElementById("appointment-form");
  if (form) form.addEventListener("submit", handleBookingSubmit);

  // Close modals on Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBookingModal();
      closeReceiptModal();
      closeLightbox();
    }
  });

  // Modal backdrop click
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeBookingModal();
        closeReceiptModal();
        closeLightbox();
      }
    });
  });

  if (window.lucide) lucide.createIcons();
});
