/**
 * 1. CUSTOM CURSOR
 */
const customCursor = document.getElementById("customCursor");

if (customCursor) {
  document.addEventListener("mousemove", (e) => {
    // Add small delay using requestAnimationFrame for smoother following
    requestAnimationFrame(() => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    });
  });

  const hoverTargets = document.querySelectorAll("a, button, .btn, .interactive-card, .avatar-container");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => customCursor.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => customCursor.classList.remove("cursor-hover"));
  });
}

/**
 * 2. MOUSE TRACKING GLOW FOR GLASS PANELS
 * This powers the radial gradient highlight on interactive cards.
 */
const interactiveCards = document.querySelectorAll(".interactive-card");

document.addEventListener("mousemove", (e) => {
  interactiveCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

/**
 * 3. REFINED TEXT SCRAMBLE (BRUTE-FORCE) EFFECT
 * Faster, cleaner, more professional.
 */
const heroNameEl = document.getElementById("heroName");

if (heroNameEl) {
  const targetText = heroNameEl.dataset.text || heroNameEl.textContent.trim();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let iteration = 0;
  
  // Total iterations to lock all letters
  const totalIterations = 14; 
  let interval = null;

  const runScramble = () => {
    clearInterval(interval);
    
    interval = setInterval(() => {
      heroNameEl.innerText = targetText
        .split("")
        .map((letter, index) => {
          if (letter === " ") return " ";
          if (index < iteration) {
            return targetText[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
      
      if (iteration >= targetText.length) { 
        clearInterval(interval);
      }
      
      iteration += 1 / 3; // speed of locking letters
    }, 40);
  };

  // Run on load
  window.addEventListener("load", runScramble);

  // Re-run on hover to show interactivity
  heroNameEl.addEventListener("mouseenter", () => {
    iteration = 0;
    runScramble();
  });
}

/**
 * 4. MOBILE HAMBURGER MENU
 */
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}

/**
 * 5. SCROLL REVEAL (INTERSECTION OBSERVER)
 */
const revealItems = document.querySelectorAll(".scroll-reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { 
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: "0px 0px -50px 0px"
  }
);

revealItems.forEach((el) => window.requestAnimationFrame(() => revealObserver.observe(el)));

/**
 * 6. HEADER SCROLL FX
 */
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 40) {
    header.style.background = "rgba(11, 15, 25, 0.9)";
    header.style.backdropFilter = "blur(12px)";
    header.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
    header.style.padding = "0.75rem 4vw";
  } else {
    header.style.background = "transparent";
    header.style.backdropFilter = "blur(0px)";
    header.style.borderBottom = "none";
    header.style.padding = "1rem 4vw";
  }
});
