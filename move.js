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
  const allCols = document.querySelectorAll("section#third-section .col-lg-6, section#third-section .col-md-6, section#third-section .col-sm-12");

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

  allCols.forEach(col => {
    // لو العمود جهة يمين (Bootstrap يديه order تلقائي)
    const parentRow = col.parentElement; 
    const isLeft = Array.from(parentRow.children).indexOf(col) === 0;

    // لو أول عمود → يدخل من الشمال
    // لو تاني عمود → يدخل من اليمين
    col.dataset.animation = isLeft ? "animate__fadeInLeft" : "animate__fadeInRight";

    col.style.opacity = 0;
    observer.observe(col);
  });
});
