<script>
(() => {
  const canvas = document.getElementById('snow');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = 1;

  function resize(){
    dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const flakes = [];
  const FLAKE_COUNT = Math.round(Math.min(140, Math.max(60, w / 10)));

  function rand(min, max){ return Math.random() * (max - min) + min; }

  function spawnFlake(){
    return {
      x: rand(0, w),
      y: rand(-h, 0),
      r: rand(1, 3.2),
      vy: rand(0.6, 2.0),
      vx: rand(-0.4, 0.4),
      drift: rand(0.002, 0.01),
      phase: rand(0, Math.PI * 2),
      alpha: rand(0.35, 0.85)
    };
  }

  for (let i = 0; i < FLAKE_COUNT; i++) flakes.push(spawnFlake());

  let last = performance.now();
  function tick(now){
    const dt = Math.min(33, now - last);
    last = now;

    ctx.clearRect(0, 0, w, h);

    for (const f of flakes){
      f.phase += f.drift * dt;
      f.x += f.vx * dt * 0.06 + Math.sin(f.phase) * 0.35;
      f.y += f.vy * dt * 0.06;

      if (f.y - f.r > h) {
        f.y = -f.r;
        f.x = rand(0, w);
      }
      if (f.x < -10) f.x = w + 10;
      if (f.x > w + 10) f.x = -10;

      ctx.beginPath();
      ctx.globalAlpha = f.alpha;
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
</script>
