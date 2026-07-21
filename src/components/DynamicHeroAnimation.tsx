"use client";
import { useEffect, useRef } from "react";

interface DynamicHeroAnimationProps {
  color: string;
  slideId: string;
}

export default function DynamicHeroAnimation({ color, slideId }: DynamicHeroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "15, 85, 196";
    };
    
    const rgbColor = hexToRgb(color);
    let animationFrameId: number;
    let time = 0;

    // --- SHARED DATA ---
    let cx = width / 2;
    let cy = height / 2;

    // SaaS: Particle Mesh
    const meshParticles: { x: number; y: number; baseX: number; baseY: number; size: number }[] = [];
    
    // DevSecOps: Radar
    const radarDots: { x: number; y: number; angle: number; dist: number; active: number }[] = [];
    const radarRings: { r: number }[] = [{r: 100}, {r: 300}, {r: 500}, {r: 700}];
    
    // AI: Neural Synapses
    const neurons: { x: number; y: number; vx: number; vy: number; connections: number[] }[] = [];
    const pulses: { from: number; to: number; progress: number; speed: number }[] = [];

    // Data Platform: Streams
    const streams: { x: number; y: number; speed: number; length: number; charOffset: number }[] = [];

    // Initialization logic based on tab
    if (slideId === "saas") {
      const cols = Math.floor(width / 70);
      const rows = Math.floor(height / 70);
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          meshParticles.push({
            x: i * (width / cols) + (Math.random() - 0.5) * 40,
            y: j * (height / rows) + (Math.random() - 0.5) * 40,
            baseX: i * (width / cols),
            baseY: j * (height / rows),
            size: Math.random() * 1.5 + 0.8,
          });
        }
      }
    } else if (slideId === "devsecops") {
      for (let i = 0; i < 200; i++) {
        const dist = Math.random() * (Math.max(width, height) / 1.1);
        const angle = Math.random() * Math.PI * 2;
        radarDots.push({
          x: cx + Math.cos(angle) * dist,
          y: cy + Math.sin(angle) * dist,
          angle,
          dist,
          active: 0,
        });
      }
    } else if (slideId === "ai") {
      for (let i = 0; i < 80; i++) {
        neurons.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          connections: [],
        });
      }
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < 250) {
            neurons[i].connections.push(j);
            neurons[j].connections.push(i);
          }
        }
      }
    } else if (slideId === "data-platform") {
      const cols = Math.floor(width / 15);
      for (let i = 0; i < cols; i++) {
        // Spawn multiple streams per column for density
        streams.push({
          x: i * 15,
          y: Math.random() * height,
          speed: Math.random() * 4 + 3,
          length: Math.random() * 150 + 50,
          charOffset: Math.random() * 100,
        });
        streams.push({
          x: i * 15,
          y: Math.random() * height,
          speed: Math.random() * 4 + 2,
          length: Math.random() * 100 + 30,
          charOffset: Math.random() * 100,
        });
      }
    }

    // 3D Math for Quantum Wireframe
    const project3D = (x: number, y: number, z: number) => {
      const scale = 500 / (500 + z); // Adjusted focal length for bigger view
      return { x: cx + x * scale, y: cy + y * scale };
    };

    const render = () => {
      time += 0.015;
      cx = width / 2;
      cy = height / 2;

      // Clear Canvas
      if (slideId === "data-platform") {
        // Trailing fade effect for streams
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; 
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      // ──────────────────────────────────────────────
      // 1. SaaS (Particle Wave Mesh)
      // ──────────────────────────────────────────────
      if (slideId === "saas") {
        meshParticles.forEach((p) => {
          p.x = p.baseX + Math.sin(time + p.baseY * 0.01) * 35;
          p.y = p.baseY + Math.cos(time + p.baseX * 0.01) * 35;
        });

        ctx.lineWidth = 0.6;
        for (let i = 0; i < meshParticles.length; i++) {
          for (let j = i + 1; j < meshParticles.length; j++) {
            const p1 = meshParticles[i];
            const p2 = meshParticles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${rgbColor}, ${0.8 - dist / 120})`;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        meshParticles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgbColor}, 0.9)`;
          ctx.fill();
        });
      }

      // ──────────────────────────────────────────────
      // 2. DevSecOps (Radar Ripples)
      // ──────────────────────────────────────────────
      else if (slideId === "devsecops") {
        const radarAngle = (time * 1.5) % (Math.PI * 2);
        
        ctx.lineWidth = 1;
        radarRings.forEach(ring => {
          ring.r += 0.5;
          if (ring.r > Math.max(width, height)) ring.r = 0;
          ctx.beginPath();
          ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${rgbColor}, ${Math.max(0, 0.2 - ring.r / 2000)})`;
          ctx.stroke();
        });

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(radarAngle) * 2000, cy + Math.sin(radarAngle) * 2000);
        ctx.strokeStyle = `rgba(${rgbColor}, 0.5)`;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, 2000, radarAngle - 0.5, radarAngle, false);
        ctx.closePath();
        ctx.fillStyle = `rgba(${rgbColor}, 0.03)`;
        ctx.fill();

        radarDots.forEach(dot => {
          let diff = radarAngle - dot.angle;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          
          if (diff > 0 && diff < 0.2) dot.active = 1; 
          if (dot.active > 0) dot.active -= 0.01; 
          
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 2 + dot.active * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgbColor}, ${0.1 + dot.active * 0.9})`;
          ctx.fill();
        });
      }

      // ──────────────────────────────────────────────
      // 3. AI-Native Core (Neural Synapses)
      // ──────────────────────────────────────────────
      else if (slideId === "ai") {
        neurons.forEach(n => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        });

        ctx.lineWidth = 0.5;
        neurons.forEach((n, i) => {
          // Re-calculate local connections for performance
          n.connections.forEach(j => {
            if (j > i) {
              const n2 = neurons[j];
              const dist = Math.sqrt(Math.pow(n.x-n2.x,2) + Math.pow(n.y-n2.y,2));
              if (dist < 300) {
                ctx.beginPath();
                ctx.moveTo(n.x, n.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.strokeStyle = `rgba(${rgbColor}, ${0.15 - dist/2000})`; 
                ctx.stroke();
              }
            }
          });
        });

        if (Math.random() < 0.2 && neurons.length > 0) {
          const fromIdx = Math.floor(Math.random() * neurons.length);
          if (neurons[fromIdx].connections.length > 0) {
            const toIdx = neurons[fromIdx].connections[Math.floor(Math.random() * neurons[fromIdx].connections.length)];
            pulses.push({ from: fromIdx, to: toIdx, progress: 0, speed: Math.random() * 0.02 + 0.02 });
          }
        }

        for (let i = pulses.length - 1; i >= 0; i--) {
          const p = pulses[i];
          p.progress += p.speed;
          if (p.progress >= 1) {
            pulses.splice(i, 1);
            continue;
          }
          const n1 = neurons[p.from];
          const n2 = neurons[p.to];
          const px = n1.x + (n2.x - n1.x) * p.progress;
          const py = n1.y + (n2.y - n1.y) * p.progress;
          
          ctx.beginPath();
          ctx.arc(px, py, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgbColor}, 1)`;
          ctx.fill();
        }

        neurons.forEach((n) => {
          ctx.beginPath();
          ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgbColor}, 0.4)`;
          ctx.fill();
        });
      }

      // ──────────────────────────────────────────────
      // 4. Quantum-Ready (Rotating Tesseracts)
      // ──────────────────────────────────────────────
      else if (slideId === "quantum") {
        const cubes = [
          { size: 180, rotX: time * 0.4, rotY: time * 0.3, rotZ: time * 0.2 },
          { size: 280, rotX: -time * 0.2, rotY: time * 0.5, rotZ: -time * 0.3 },
          { size: 400, rotX: time * 0.1, rotY: -time * 0.2, rotZ: time * 0.4 }
        ];

        cubes.forEach((cube, idx) => {
          const s = cube.size;
          const vertices = [
            { x: -s, y: -s, z: -s }, { x: s, y: -s, z: -s },
            { x: s, y: s, z: -s }, { x: -s, y: s, z: -s },
            { x: -s, y: -s, z: s }, { x: s, y: -s, z: s },
            { x: s, y: s, z: s }, { x: -s, y: s, z: s }
          ];

          const projected = vertices.map(v => {
            let y = v.y * Math.cos(cube.rotX) - v.z * Math.sin(cube.rotX);
            let z = v.y * Math.sin(cube.rotX) + v.z * Math.cos(cube.rotX);
            let x = v.x * Math.cos(cube.rotY) + z * Math.sin(cube.rotY);
            z = -v.x * Math.sin(cube.rotY) + z * Math.cos(cube.rotY);
            let finalX = x * Math.cos(cube.rotZ) - y * Math.sin(cube.rotZ);
            let finalY = x * Math.sin(cube.rotZ) + y * Math.cos(cube.rotZ);
            return project3D(finalX, finalY, z);
          });

          const edges = [
            [0,1], [1,2], [2,3], [3,0],
            [4,5], [5,6], [6,7], [7,4],
            [0,4], [1,5], [2,6], [3,7]
          ];

          ctx.lineWidth = 1.5;
          ctx.strokeStyle = `rgba(${rgbColor}, ${0.7 - (idx * 0.2)})`;

          edges.forEach(edge => {
            const p1 = projected[edge[0]];
            const p2 = projected[edge[1]];
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          });
          
          projected.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgbColor}, 0.9)`;
            ctx.fill();
          });
        });
      }

      // ──────────────────────────────────────────────
      // 5. Data Platform (Cascading Streams)
      // ──────────────────────────────────────────────
      else if (slideId === "data-platform") {
        ctx.fillStyle = `rgba(${rgbColor}, 0.8)`;
        streams.forEach(stream => {
          ctx.beginPath();
          ctx.fillRect(stream.x, stream.y, 2.5, 12);
          
          stream.y += stream.speed;
          if (stream.y > height) {
            stream.y = -50;
            stream.x = Math.floor(Math.random() * (width / 15)) * 15; 
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, slideId]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
