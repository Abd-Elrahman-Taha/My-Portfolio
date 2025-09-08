document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    { selector: "#about-me h1", animation: "animate__fadeInUp" },
    { selector: "#left", animation: "animate__fadeInLeft" },
    { selector: "#right", animation: "animate__fadeInRight" }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add("animate__animated", el.dataset.animation);
        el.style.opacity = 1;
        observer.unobserve(el); 
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(item => {
    const el = document.querySelector(item.selector);
    if (el) {
      el.dataset.animation = item.animation;
      observer.observe(el);
    }
  });
});
