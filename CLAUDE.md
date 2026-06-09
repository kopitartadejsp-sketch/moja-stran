# Opombe za projekt Vektor Studio

Statična HTML stran (index, cenik, o-nas, piskotki, hvala) + style.css, anim.js, cookies.js, bg-paths.js.
Deploy: GitHub repo "moja-stran" -> Hostinger (hPanel -> Advanced -> GIT -> ročno klikni Deploy; ne deploya vedno samodejno).

## Pravilo za animacije (POMEMBNO)
Vse animacije naredi tako, da so SAMOSTOJNE in NEODVISNE od style.css — definiraj barve, velikosti,
pisave in samo animacijo direktno v SVG atributih ali v JavaScriptu (npr. element.animate / Web Animations API,
inline stili, inline keyframe injection). Razlog: Hostinger/predpomnilnik pogosto servira staro style.css,
nova HTML pa je že živa -> brez tega je element črn/nepravilen/skrit in moram delati dvakrat.

Konkretno:
- SVG logo: barve (fill/stroke), font in width/height zapisani kot atributi v sami sliki.
- bg-paths.js: sam nastavi pozicijo/z-index/overlay in animira prek element.animate (ne preko @keyframes v style.css).
- Vedno upoštevaj prefers-reduced-motion.
