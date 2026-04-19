import React, { useEffect, useRef } from 'react';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width, height;
    let particles = [];
    let animId;

    const props = {
      particleColor: 'rgba(211, 19, 36, 0.45)',
      lineColor: '211, 19, 36',
      particleRadius: 1.5,
      particleCount: prefersReducedMotion ? 20 : 60,
      maxVelocity: 0.4,
      lineLength: 140,
      mouseRadius: 120,
    };

    const mouse = { x: null, y: null };

    function onPointerMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
    function onPointerLeave() { mouse.x = null; mouse.y = null; }

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerleave', onPointerLeave);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * (props.maxVelocity * 2);
        this.vy = (Math.random() - 0.5) * (props.maxVelocity * 2);
      }
      update() {
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        this.x += this.vx;
        this.y += this.vy;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < props.mouseRadius) {
            const force = (props.mouseRadius - dist) / props.mouseRadius;
            this.x += dx * force * 0.02;
            this.y += dy * force * 0.02;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, props.particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = props.particleColor;
        ctx.fill();
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < props.lineLength) {
            const opacity = 1 - Math.pow(dist / props.lineLength, 1.5);
            ctx.strokeStyle = `rgba(${props.lineColor}, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        if (!prefersReducedMotion) p.update();
        p.draw();
      });
      drawConnections();

      if (mouse.x !== null && mouse.y !== null && !prefersReducedMotion) {
        particles.forEach(p => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < props.lineLength) {
            const opacity = (1 - dist / props.lineLength) * 0.3;
            ctx.strokeStyle = `rgba(${props.lineColor}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        });
      }
      animId = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < props.particleCount; i++) particles.push(new Particle());
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default ParticleCanvas;
