// Vektor Studio — animacije ob nalaganju in drsenju
(function () {
  var d = document;
  d.documentElement.classList.add("anim-ready");

  // Vstop hero / page-hero ob nalaganju
  function heroIn() {
    var groups = [
      ".hero .eyebrow", ".hero h1", ".hero p", ".hero-btns", ".hero-stats",
      ".page-hero .breadcrumb", ".page-hero h1", ".page-hero p"
    ];
    groups.forEach(function (sel, i) {
      d.querySelectorAll(sel).forEach(function (el) {
        el.classList.add("reveal", "reveal-now");
        el.style.transitionDelay = (i * 0.1) + "s";
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { el.classList.add("in"); });
        });
      });
    });
  }

  // Elementi, ki se pojavijo ob drsenju
  var targets = d.querySelectorAll(
    ".card,.step,.price,.faq-item,.sec-head,.maint,.cta-band,.info-item,.contact-wrap form"
  );
  targets.forEach(function (el) {
    if (!el.classList.contains("reveal-now")) el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var sibs = Array.prototype.slice.call(el.parentNode.children).filter(function (c) {
          return c.classList.contains("reveal");
        });
        var idx = sibs.indexOf(el);
        el.style.transitionDelay = (Math.max(0, idx) * 0.09) + "s";
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (el) {
      if (!el.classList.contains("reveal-now")) io.observe(el);
    });
  } else {
    targets.forEach(function (el) { el.classList.add("in"); });
  }

  if (d.readyState !== "loading") heroIn();
  else d.addEventListener("DOMContentLoaded", heroIn);
})();
