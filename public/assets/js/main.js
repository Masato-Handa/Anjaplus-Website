// Show navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});

// Language Button Toggle with Animation
document.addEventListener('DOMContentLoaded', function() {
  // Load saved language preference first
  const savedLang = localStorage.getItem('anjapro-lang');
  if (savedLang && translations[savedLang]) {
    updateContent(savedLang);
  }
  
  // Setup language toggle event listeners on individual options
  document.querySelectorAll('.lang-toggle-btn').forEach(langToggle => {
    const langOptions = langToggle.querySelectorAll('.lang-option');
    
    langOptions.forEach((option) => {
      option.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        
        const clickedLang = this.textContent.trim().toLowerCase();
        
        // Only switch if clicking a different language
        if (clickedLang === currentLang) {
          console.log('Same language clicked, ignoring');
          return; // Do nothing if clicking the same language
        }
        
        console.log('Switching from', currentLang, 'to', clickedLang);
        
        // Update content with new language
        updateContent(clickedLang);
      });
    });
  });
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

function showSchedule(id, btn) {
  document
    .querySelectorAll('.schedule-section')
    .forEach(s => s.classList.remove('active'));

  document
    .querySelectorAll('.tab')
    .forEach(t => t.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}


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
