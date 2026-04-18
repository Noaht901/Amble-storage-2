// Amble Storage — tiny progressive enhancements

(function () {
  const nav = document.getElementById("nav");
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("primary-nav");

  // Mobile nav toggle
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Sticky nav shadow when scrolled
  const onScroll = () => {
    if (window.scrollY > 8) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal-on-scroll
  const revealables = document.querySelectorAll(
    ".section__head, .section__copy, .section__media, .card, .feature, .testimonial, .price, .faq details, .hero__card"
  );
  revealables.forEach((el) => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
  }

  // Forms: client-side "sent" success (no backend; replace with real endpoint later)
  function wireFormSuccess(form, successSelector) {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const success = form.parentElement.querySelector(successSelector) || form.querySelector(successSelector);
      form.style.display = "none";
      if (success) success.hidden = false;
    });
  }
  wireFormSuccess(document.getElementById("avail-form"), ".avail__success");
  wireFormSuccess(document.getElementById("contact-form"), ".form__success");

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
