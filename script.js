const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const signupForm = document.getElementById("signupForm");
const formMsg = document.getElementById("formMsg");
const revealElements = document.querySelectorAll(".reveal");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

if (signupForm && formMsg) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = signupForm.querySelector("#email");

    if (emailInput && emailInput.value.trim()) {
      formMsg.textContent = "Thanks for subscribing! Check your inbox for a welcome email.";
      signupForm.reset();
      return;
    }

    formMsg.textContent = "Please enter a valid email address.";
  });
}

if (revealElements.length) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("show"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }
}
