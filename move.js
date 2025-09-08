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

document.addEventListener("DOMContentLoaded", () => {
  // نجيب كل سكاشن البروجكتس
  const projectSections = document.querySelectorAll(".third-section");

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

  projectSections.forEach((section, index) => {
    // الزوجي يدخل من اليمين - الفردي من الشمال
    const animation = index % 2 === 0 ? "animate__fadeInRight" : "animate__fadeInLeft";
    section.dataset.animation = animation;
    observer.observe(section);
  });
});
