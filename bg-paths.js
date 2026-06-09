(function () {
  var host = document.getElementById("bgPaths");
  if (!host) return;

  var NS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 696 316");
  svg.setAttribute("fill", "none");
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
  svg.setAttribute("aria-hidden", "true");
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

      var len = p.getTotalLength();
      var period = len / 10;
      p.style.strokeDasharray = (period * 0.4).toFixed(2) + " " + (period * 0.6).toFixed(2);

      if (!reduce) {
        p.style.setProperty("--period", (reverse ? -period : period).toFixed(2) + "px");
        var dur = (16 + Math.random() * 12).toFixed(1);
        p.style.animation = "bgpFlow " + dur + "s linear infinite";
        p.style.animationDelay = (-Math.random() * 12).toFixed(1) + "s";
      }
    }
  }

  build(1, false);
  build(-1, true);
})();
