// Show navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});

const toggle = document.getElementById("classesToggle");
const menu = document.getElementById("classes-menu");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Schedule schedule-section
  function showSchedule(scheduleId, button) {
    document.querySelectorAll('.schedule-section').forEach(section => {
      section.classList.remove('active');
    });

    document.querySelectorAll('.studio-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    document.getElementById(scheduleId).classList.add('active');
    button.classList.add('active');
  }

// Toggle Service (Pilates / Yoga) - Updated for sliding animation
const serviceToggle = document.getElementById('serviceToggle');
const serviceOptions = document.querySelectorAll(".service-option");
const cards = document.querySelectorAll(".location-card");

serviceOptions.forEach(option => {
  option.addEventListener("click", () => {
    const service = option.dataset.service;

    // 1. Update Container Class for the sliding gold pill
    if (serviceToggle) {
      serviceToggle.classList.remove('pilates-active', 'yoga-active');
      serviceToggle.classList.add(`${service}-active`);
    }

    // 2. Update Active Text State
    serviceOptions.forEach(opt => 
      opt.classList.toggle("active", opt === option)
    );

    // 3. Toggle maps in every card
    cards.forEach(card => {
      const maps = card.querySelectorAll("[data-service-map]");
      maps.forEach(map => {
        map.style.display =
          map.dataset.serviceMap === service ? "block" : "none";
      });
    });
  });
});

// Default state: Trigger the first option if it exists
if (serviceOptions.length > 0) {
    // We use a small timeout to ensure the DOM is fully ready for the display style changes
    serviceOptions[0].click();
}
