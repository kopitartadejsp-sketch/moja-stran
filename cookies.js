// Vektor Studio — pasica za piškotke (GDPR)
(function () {
  var KEY = "vs_cookie_consent";
  if (localStorage.getItem(KEY)) return; // izbira že shranjena

  // Slog
  var css = document.createElement("style");
  css.textContent =
    "#vs-cookies{position:fixed;left:0;right:0;bottom:0;z-index:999;" +
    "background:#0b1f3a;color:#cdd6e4;border-top:2px solid #c9a14a;" +
    "padding:18px 24px;box-shadow:0 -6px 24px rgba(0,0,0,.25)}" +
    "#vs-cookies .wrap{max-width:1140px;margin:0 auto;display:flex;gap:20px;" +
    "align-items:center;justify-content:space-between;flex-wrap:wrap}" +
    "#vs-cookies p{margin:0;font-size:.92rem;line-height:1.5;color:#cdd6e4;max-width:680px}" +
    "#vs-cookies a{color:#e0bd6a;text-decoration:underline}" +
    "#vs-cookies .btns{display:flex;gap:10px;flex-shrink:0}" +
    "#vs-cookies button{padding:11px 22px;border-radius:7px;font-weight:700;" +
    "font-size:.9rem;cursor:pointer;border:2px solid transparent;font-family:inherit}" +
    "#vs-cookies .ok{background:#c9a14a;color:#0b1f3a}" +
    "#vs-cookies .ok:hover{background:#e0bd6a}" +
    "#vs-cookies .no{background:transparent;color:#cdd6e4;border-color:rgba(255,255,255,.35)}" +
    "#vs-cookies .no:hover{border-color:#fff;color:#fff}" +
    "@media(max-width:600px){#vs-cookies .wrap{flex-direction:column;align-items:flex-start}" +
    "#vs-cookies .btns{width:100%}#vs-cookies button{flex:1}}";
  document.head.appendChild(css);

  // Pasica
  var bar = document.createElement("div");
  bar.id = "vs-cookies";
  bar.innerHTML =
    '<div class="wrap">' +
    "<p>Ta spletna stran uporablja piškotke za pravilno delovanje in analizo obiska. " +
    "S klikom na <strong>Sprejmi</strong> se strinjate z uporabo vseh piškotkov. " +
    'Več v <a href="piskotki.html">politiki piškotkov</a>.</p>' +
    '<div class="btns">' +
    '<button class="no" id="vs-no">Zavrni</button>' +
    '<button class="ok" id="vs-ok">Sprejmi</button>' +
    "</div></div>";
  document.body.appendChild(bar);

  function close(val) {
    localStorage.setItem(KEY, val);
    bar.remove();
  }
  document.getElementById("vs-ok").onclick = function () { close("accepted"); };
  document.getElementById("vs-no").onclick = function () { close("rejected"); };
})();
