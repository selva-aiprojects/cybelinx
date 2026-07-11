"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 220,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const particleCount = Math.min(Math.floor((width * height) / 25000), 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
        color: "#60c8e0",
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const getThemeConfig = () => {
      const theme = document.documentElement.getAttribute("data-theme") || "dark";
      if (theme === "light") {
        return {
          gridStroke: "rgba(30, 96, 145, 0.08)",
          mouseStroke: "#0284c7",
          colors: ["#0284c7", "#1e6091", "#3b82f6"],
        };
      }
      if (theme === "emerald") {
        return {
          gridStroke: "rgba(45, 212, 191, 0.06)",
          mouseStroke: "#2dd4bf",
          colors: ["#2dd4bf", "#10b981", "#059669"],
        };
      }
      if (theme === "sunset") {
        return {
          gridStroke: "rgba(192, 132, 252, 0.06)",
          mouseStroke: "#f43f5e",
          colors: ["#c084fc", "#f43f5e", "#a855f7"],
        };
      }
      return {
        gridStroke: "rgba(96, 200, 224, 0.035)",
        mouseStroke: "#60c8e0",
        colors: ["#60c8e0", "#4a9fdf", "#3b82f6"],
      };
    };

    const drawGrid = (gridStroke: string) => {
      ctx.strokeStyle = gridStroke;
      ctx.lineWidth = 1;
      const gridSize = 60;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const themeConfig = getThemeConfig();
      drawGrid(themeConfig.gridStroke);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.color = themeConfig.colors[i % themeConfig.colors.length];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 140) * 0.2;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }

        // Connect particles to mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = themeConfig.mouseStroke;
          ctx.globalAlpha = (1 - dist / mouse.radius) * 0.35;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.globalAlpha = 1;

          // Gentle magnetic push/pull on hover
          if (!prefersReducedMotion && dist > 30) {
            p.x -= (dx / dist) * 0.3;
            p.y -= (dy / dist) * 0.3;
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
