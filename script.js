const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".accordion-item");
    const willOpen = !item.classList.contains("open");

    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      otherItem.classList.remove("open");
      otherItem.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      item.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-links a")];

window.addEventListener("scroll", () => {
  const current = sections.findLast((section) => section.offsetTop <= window.scrollY + 90);

  navItems.forEach((item) => {
    item.classList.toggle("active", item.getAttribute("href") === `#${current?.id}`);
  });
}, { passive: true });
