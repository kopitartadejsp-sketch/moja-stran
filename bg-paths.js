(function () {
  var host = document.getElementById("bgPaths");
  if (!host) return;

  var NS = "http://www.w3.org/2000/svg";
  var section = host.parentNode;

  if (section) {
    if (getComputedStyle(section).position === "static") section.style.position = "relative";
    section.style.overflow = "hidden";
    Array.prototype.forEach.call(section.children, function (ch) {
      if (ch !== host) {
        if (getComputedStyle(ch).position === "static") ch.style.position = "relative";
        ch.style.zIndex = "2";
      }
    });
  }

  host.style.position = "absolute";
  host.style.top = "0";
  host.style.left = "0";
  host.style.right = "0";
  host.style.bottom = "0";
  host.style.zIndex = "0";
  host.style.pointerEvents = "none";
  host.style.opacity = "0.85";

  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 696 316");
  svg.setAttribute("fill", "none");
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
  svg.setAttribute("aria-hidden", "true");
  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.style.display = "block";
  host.appendChild(svg);

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function build(position, reverse) {
    for (var i = 0; i < 36; i++) {
      var d =
        "M-" + (380 - i * 5 * position) + " -" + (189 + i * 6) +
        "C-" + (380 - i * 5 * position) + " -" + (189 + i * 6) +
        " -" + (312 - i * 5 * position) + " " + (216 - i * 6) +
        " " + (152 - i * 5 * position) + " " + (343 - i * 6) +
        "C" + (616 - i * 5 * position) + " " + (470 - i * 6) +
        " " + (684 - i * 5 * position) + " " + (875 - i * 6) +
        " " + (684 - i * 5 * position) + " " + (875 - i * 6);

      var p = document.createElementNS(NS, "path");
      p.setAttribute("d", d);
      p.setAttribute("fill", "none");
      p.setAttribute("stroke-linecap", "round");

      var op = Math.min(0.5, 0.05 + i * 0.012);
      var gold = (i % 6 === 0);
      p.setAttribute("stroke", gold
        ? "rgba(201,161,74," + (op + 0.1).toFixed(3) + ")"
        : "rgba(255,255,255," + op.toFixed(3) + ")");
      p.setAttribute("stroke-width", (0.5 + i * 0.04).toFixed(2));
      svg.appendChild(p);

      // Viden utrip, a samo na vsaki 3. črti -> manj animacij = brez štekanja.
      if (!reduce && p.animate && i % 3 === 0) {
        var dur = (16 + Math.random() * 12) * 1000;
        p.animate(
          [{ opacity: 0.4 }, { opacity: 1 }, { opacity: 0.4 }],
          { duration: dur, iterations: Infinity, easing: "ease-in-out", delay: -Math.random() * dur }
        );
      }
    }
  }

  build(1, false);
  build(-1, true);
})();
