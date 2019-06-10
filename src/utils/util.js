export function scrollTo(distance, duration) {
  var initialY = window.scrollY;
  var y = initialY + distance;
  var baseY = (initialY + y) * 0.5;
  var difference = initialY - baseY;
  var startTime = performance.now();

  function step() {
    var normalizedTime = (performance.now() - startTime) / duration;
    if (normalizedTime > 1) normalizedTime = 1;

    window.scrollTo(
      0,
      baseY + difference * Math.cos(normalizedTime * Math.PI)
    );
    if (normalizedTime < 1) window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}