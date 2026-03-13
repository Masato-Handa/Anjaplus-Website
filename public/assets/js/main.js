// ===============================
// NAVBAR VISIBILITY ON SCROLL
// ===============================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  if (window.scrollY > 100) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});


// ===============================
// CLASSES DROPDOWN (Desktop)
// ===============================
const classesToggle = document.getElementById("classesToggle");
const classesMenu = document.getElementById("classes-menu");

if (classesToggle && classesMenu) {

  classesToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = classesMenu.classList.toggle("open");
    classesToggle.setAttribute("aria-expanded", open);
  });

  document.addEventListener("click", (e) => {
    if (!classesToggle.contains(e.target) && !classesMenu.contains(e.target)) {
      classesMenu.classList.remove("open");
      classesToggle.setAttribute("aria-expanded", "false");
    }
  });
}


// ===============================
// MOBILE HAMBURGER MENU
// ===============================
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('is-active');
  });
}


// ===============================
// SCHEDULE SWITCHING
// ===============================
function showSchedule(scheduleId, button) {
  document.querySelectorAll('.schedule-section').forEach(section => {
    section.classList.remove('active');
  });

  document.querySelectorAll('.studio-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const target = document.getElementById(scheduleId);
  if (target) target.classList.add('active');
  if (button) button.classList.add('active');
}


// ===============================
// SERVICE TOGGLE (Yoga / Pilates)
// ===============================
const serviceToggle = document.getElementById('serviceToggle');
const serviceOptions = document.querySelectorAll(".service-option");
const cards = document.querySelectorAll(".location-card");

serviceOptions.forEach(option => {
  option.addEventListener("click", () => {
    const service = option.dataset.service;

    if (serviceToggle) {
      serviceToggle.classList.remove('pilates-active', 'yoga-active');
      serviceToggle.classList.add(`${service}-active`);
    }

    serviceOptions.forEach(opt =>
      opt.classList.toggle("active", opt === option)
    );

    cards.forEach(card => {
      const maps = card.querySelectorAll("[data-service-map]");
      maps.forEach(map => {
        map.style.display =
          map.dataset.serviceMap === service ? "block" : "none";
      });
    });
  });
});

// Set default state
if (serviceOptions.length > 0) {
  serviceOptions[0].click();
}

