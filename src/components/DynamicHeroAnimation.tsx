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

    // SaaS: Global Sphere
    const sphereNodes: { x: number; y: number; z: number }[] = [];
    
    // DevSecOps: Security Icosahedron
    const icoVertices: { x: number; y: number; z: number }[] = [];
    const icoEdges: number[][] = [];
    const orbitRings: { radius: number; angleX: number; angleY: number; speed: number }[] = [];
    
    // AI: Intelligence Core
    const coreNodes: { x: number; y: number; z: number }[] = [];
    const aiOrbits: { radius: number; rotX: number; rotY: number; particles: number[] }[] = [];

    // Data Platform: Hexagons
    const hexagons: { x: number; y: number; offset: number }[] = [];

    // Initialization logic based on tab
    if (slideId === "saas") {
      const N = 200;
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      for (let i = 0; i < N; i++) {
        const theta = 2 * Math.PI * i / goldenRatio;
        const phi = Math.acos(1 - 2 * (i + 0.5) / N);
        sphereNodes.push({
          x: Math.sin(phi) * Math.cos(theta),
          y: Math.sin(phi) * Math.sin(theta),
          z: Math.cos(phi)
        });
      }
    } else if (slideId === "devsecops") {
      const t = (1.0 + Math.sqrt(5.0)) / 2.0;
      const v = [
        [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
        [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
        [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
      ];
      v.forEach(pt => {
        const len = Math.sqrt(pt[0]*pt[0] + pt[1]*pt[1] + pt[2]*pt[2]);
        icoVertices.push({ x: pt[0]/len, y: pt[1]/len, z: pt[2]/len });
      });
      for (let i = 0; i < icoVertices.length; i++) {
        for (let j = i + 1; j < icoVertices.length; j++) {
          const dx = icoVertices[i].x - icoVertices[j].x;
          const dy = icoVertices[i].y - icoVertices[j].y;
          const dz = icoVertices[i].z - icoVertices[j].z;
          if (Math.sqrt(dx*dx + dy*dy + dz*dz) < 1.1) {
            icoEdges.push([i, j]);
          }
        }
      }
      orbitRings.push({ radius: 350, angleX: 1.2, angleY: 0.5, speed: 0.01 });
      orbitRings.push({ radius: 450, angleX: -0.5, angleY: 1.5, speed: -0.015 });
      orbitRings.push({ radius: 600, angleX: 0.8, angleY: -0.8, speed: 0.008 });
    } else if (slideId === "ai") {
      for (let i = 0; i < 150; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = Math.cbrt(Math.random()) * 100; 
        coreNodes.push({
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.sin(phi) * Math.sin(theta),
          z: r * Math.cos(phi)
        });
      }
      for (let i = 0; i < 5; i++) {
        const particles = [];
        for (let j = 0; j < 4; j++) particles.push(Math.random() * Math.PI * 2);
        aiOrbits.push({
          radius: 200 + i * 90,
          rotX: Math.random() * Math.PI,
          rotY: Math.random() * Math.PI,
          particles
        });
      }
    } else if (slideId === "data-platform") {
      const hexSize = 35;
      const hexWidth = hexSize * Math.sqrt(3);
      const hexHeight = hexSize * 2;
      const cols = Math.floor(width / hexWidth) + 2;
      const rows = Math.floor(height / (hexHeight * 0.75)) + 2;
      
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * hexWidth + (row % 2 !== 0 ? hexWidth / 2 : 0);
          const y = row * hexHeight * 0.75;
          hexagons.push({
            x, 
            y,
            offset: Math.random() * Math.PI * 2
          });
        }
      }
    }

    // 3D Math shared across 3D effects
    const project3D = (x: number, y: number, z: number, scaleFactor: number = 500) => {
      const scale = scaleFactor / (scaleFactor + z); 
      return { x: cx + x * scale, y: cy + y * scale, scale, z };
    };

    const rotate3D = (x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number) => {
      let ry = y * Math.cos(rotX) - z * Math.sin(rotX);
      let rz = y * Math.sin(rotX) + z * Math.cos(rotX);
      let rx2 = x * Math.cos(rotY) + rz * Math.sin(rotY);
      let rz2 = -x * Math.sin(rotY) + rz * Math.cos(rotY);
      let rx3 = rx2 * Math.cos(rotZ) - ry * Math.sin(rotZ);
      let ry3 = rx2 * Math.sin(rotZ) + ry * Math.cos(rotZ);
      return { x: rx3, y: ry3, z: rz2 };
    };

    const render = () => {
      time += 0.015;
      cx = width / 2;
      cy = height / 2;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // ──────────────────────────────────────────────
      // 1. SaaS (Global Cloud Sphere)
      // ──────────────────────────────────────────────
      if (slideId === "saas") {
        const radius = 350;
        const projectedNodes = sphereNodes.map(node => {
          const rot = rotate3D(node.x * radius, node.y * radius, node.z * radius, time * 0.2, time * 0.5, 0);
          return project3D(rot.x, rot.y, rot.z, 800);
        });

        // Draw connections
        ctx.lineWidth = 1.0;
        for (let i = 0; i < projectedNodes.length; i++) {
          for (let j = i + 1; j < projectedNodes.length; j++) {
            const p1 = projectedNodes[i];
            const p2 = projectedNodes[j];
            if (p1.z > -100 && p2.z > -100) {
              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              if (dist < 100) {
                const alpha = Math.max(0, 0.5 - dist / 200) * (p1.z > 0 ? 1 : 0.2);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${rgbColor}, ${alpha})`;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }

        // Draw nodes
        projectedNodes.forEach(p => {
          const alpha = p.z > 0 ? 0.9 : 0.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgbColor}, ${alpha})`;
          ctx.fill();
        });
      }

      // ──────────────────────────────────────────────
      // 2. DevSecOps (Security Icosahedron & Radars)
      // ──────────────────────────────────────────────
      else if (slideId === "devsecops") {
        const radius = 180;
        const projectedVerts = icoVertices.map(v => {
          const rot = rotate3D(v.x * radius, v.y * radius, v.z * radius, time * 0.6, time * 0.4, time * 0.2);
          return project3D(rot.x, rot.y, rot.z, 600);
        });

        ctx.lineWidth = 2.5;
        icoEdges.forEach(edge => {
          const p1 = projectedVerts[edge[0]];
          const p2 = projectedVerts[edge[1]];
          const alpha = (p1.z > 0 || p2.z > 0) ? 0.8 : 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${rgbColor}, ${alpha})`;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });

        projectedVerts.forEach(p => {
          const alpha = p.z > 0 ? 1 : 0.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgbColor}, ${alpha})`;
          ctx.fill();
        });

        // Orbit rings
        orbitRings.forEach(ring => {
          const points = [];
          for (let i = 0; i <= 60; i++) {
            const angle = (Math.PI * 2 * i) / 60;
            const x = Math.cos(angle) * ring.radius;
            const y = Math.sin(angle) * ring.radius;
            const rot = rotate3D(x, y, 0, ring.angleX, ring.angleY, time * ring.speed);
            points.push(project3D(rot.x, rot.y, rot.z, 800));
          }
          
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let i = 0; i < points.length; i++) {
            if (i === 0) ctx.moveTo(points[i].x, points[i].y);
            else ctx.lineTo(points[i].x, points[i].y);
          }
          ctx.strokeStyle = `rgba(${rgbColor}, 0.15)`;
          ctx.stroke();

          // Scanner flash
          const flashPhase = (time * 2 + ring.radius) % (Math.PI * 2);
          if (flashPhase < 0.5) {
             ctx.strokeStyle = `rgba(${rgbColor}, ${0.8 - flashPhase * 1.6})`;
             ctx.stroke();
          }
        });
      }

      // ──────────────────────────────────────────────
      // 3. AI-Native Core (Intelligence Core & Orbits)
      // ──────────────────────────────────────────────
      else if (slideId === "ai") {
        // Pulsating core
        const coreScale = 1 + Math.sin(time * 3) * 0.1;
        const projectedCore = coreNodes.map(node => {
          const rot = rotate3D(node.x * coreScale, node.y * coreScale, node.z * coreScale, time * 0.2, -time * 0.3, 0);
          return project3D(rot.x, rot.y, rot.z, 600);
        });

        projectedCore.forEach(p => {
          const alpha = p.z > 0 ? 0.9 : 0.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgbColor}, ${alpha})`;
          ctx.fill();
        });

        ctx.lineWidth = 0.8;
        for (let i = 0; i < projectedCore.length; i += 2) {
          for (let j = i + 1; j < projectedCore.length; j += 2) {
            const p1 = projectedCore[i];
            const p2 = projectedCore[j];
            if (p1.z > 0 && p2.z > 0) {
              const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
              if (dist < 60) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(${rgbColor}, ${0.5 - dist/120})`;
                ctx.stroke();
              }
            }
          }
        }

        // Orbiting bezier streams
        aiOrbits.forEach((orbit, idx) => {
          const points = [];
          for (let i = 0; i <= 60; i++) {
            const angle = (Math.PI * 2 * i) / 60;
            const x = Math.cos(angle) * orbit.radius;
            const z = Math.sin(angle) * orbit.radius;
            const rot = rotate3D(x, 0, z, orbit.rotX, orbit.rotY, time * (0.5 + idx * 0.1));
            points.push(project3D(rot.x, rot.y, rot.z, 800));
          }
          
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let i = 0; i < points.length; i++) {
            if (i === 0) ctx.moveTo(points[i].x, points[i].y);
            else ctx.lineTo(points[i].x, points[i].y);
          }
          ctx.strokeStyle = `rgba(${rgbColor}, 0.15)`;
          ctx.stroke();

          // Data pulses on the stream
          orbit.particles.forEach((pAngle, pIdx) => {
            const currentAngle = (pAngle + time * (1 + pIdx * 0.5)) % (Math.PI * 2);
            const x = Math.cos(currentAngle) * orbit.radius;
            const z = Math.sin(currentAngle) * orbit.radius;
            const rot = rotate3D(x, 0, z, orbit.rotX, orbit.rotY, time * (0.5 + idx * 0.1));
            const proj = project3D(rot.x, rot.y, rot.z, 800);
            
            ctx.beginPath();
            ctx.arc(proj.x, proj.y, 6 * proj.scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgbColor}, ${proj.z > 0 ? 1 : 0.3})`;
            ctx.fill();
          });
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
      // 5. Data Platform (Hexagonal Data Grid)
      // ──────────────────────────────────────────────
      else if (slideId === "data-platform") {
        ctx.lineWidth = 2;
        hexagons.forEach(hex => {
          // Calculate wave based on distance from center + time
          const distFromCenter = Math.sqrt(Math.pow(hex.x - cx, 2) + Math.pow(hex.y - cy, 2));
          const wave = Math.sin(distFromCenter * 0.005 - time * 2) * 0.5 + 0.5; 
          
          const currentSize = 35 * (0.4 + wave * 0.6); 
          
          if (wave > 0.05) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle_deg = 60 * i - 30;
              const angle_rad = Math.PI / 180 * angle_deg;
              const px = hex.x + currentSize * Math.cos(angle_rad);
              const py = hex.y + currentSize * Math.sin(angle_rad);
              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            
            ctx.strokeStyle = `rgba(${rgbColor}, ${wave * 0.8})`;
            ctx.stroke();
            
            if (wave > 0.85) {
               ctx.fillStyle = `rgba(${rgbColor}, ${(wave - 0.85) * 3})`; 
               ctx.fill();
            }
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
