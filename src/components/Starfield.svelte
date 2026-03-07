<script lang="ts">
  import { onMount } from 'svelte';

  let { static: isStatic = false }: { static?: boolean } = $props();

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    const STAR_COUNT = 150;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.3 + 0.05,
        });
      }
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(200, 210, 230, ${star.opacity})`;
        ctx!.fill();
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.opacity += (Math.random() - 0.5) * 0.01;
        star.opacity = Math.max(0.05, Math.min(0.6, star.opacity));
        star.y -= star.speed;
        if (star.y < -2) {
          star.y = canvas.height + 2;
          star.x = Math.random() * canvas.width;
        }

        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(200, 210, 230, ${star.opacity})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    init();

    if (isStatic || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      drawStatic();
      window.addEventListener('resize', () => { resize(); drawStatic(); });
      return;
    }

    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<canvas bind:this={canvas} class="starfield" aria-hidden="true"></canvas>

<style>
  .starfield {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }
</style>
