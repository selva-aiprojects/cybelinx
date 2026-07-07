"use client";

import { useRef, useState, useEffect, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Helper: Convert Latitude and Longitude to 3D Sphere Coordinates
function latLongToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Helper: Create a glowing 3D curved tube arc between two city points on the globe
function GlobeDataArc({ start, end, radius = 1.6, arcHeight = 0.25, color = "#60c8e0" }: { start: [number, number]; end: [number, number]; radius?: number; arcHeight?: number; color?: string }) {
  const tubeGeometry = useMemo(() => {
    const vStart = latLongToVector3(start[0], start[1], radius);
    const vEnd = latLongToVector3(end[0], end[1], radius);
    
    // Midpoint elevated above the globe surface
    const vMid = vStart.clone().add(vEnd).multiplyScalar(0.5);
    const distance = vStart.distanceTo(vEnd);
    vMid.normalize().multiplyScalar(radius + distance * arcHeight);

    const curve = new THREE.QuadraticBezierCurve3(vStart, vMid, vEnd);
    return new THREE.TubeGeometry(curve, 40, 0.007, 8, false);
  }, [start, end, radius, arcHeight]);

  return (
    <mesh geometry={tubeGeometry}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.0} roughness={0.1} metalness={0.9} />
    </mesh>
  );
}

// Global Enterprise Tech Hubs (Cities with exact Lat/Long)
const globalHubs = [
  { name: "Bangalore", lat: 12.97, lon: 77.59, color: "#60c8e0", size: 0.045 }, // HQ
  { name: "New York", lat: 40.71, lon: -74.00, color: "#3b82f6", size: 0.04 },
  { name: "London", lat: 51.50, lon: -0.12, color: "#60c8e0", size: 0.04 },
  { name: "Tokyo", lat: 35.67, lon: 139.65, color: "#93c5fd", size: 0.04 },
  { name: "Singapore", lat: 1.35, lon: 103.81, color: "#60c8e0", size: 0.04 },
  { name: "Frankfurt", lat: 50.11, lon: 8.68, color: "#3b82f6", size: 0.035 },
  { name: "Sydney", lat: -33.86, lon: 151.20, color: "#60c8e0", size: 0.035 },
  { name: "Dubai", lat: 25.20, lon: 55.27, color: "#93c5fd", size: 0.035 },
  { name: "San Francisco", lat: 37.77, lon: -122.41, color: "#3b82f6", size: 0.04 },
  { name: "Sao Paulo", lat: -23.55, lon: -46.63, color: "#60c8e0", size: 0.035 },
];

// International Data Transfer Arcs
const dataArcs: Array<{ start: [number, number]; end: [number, number]; color?: string }> = [
  { start: [12.97, 77.59], end: [1.35, 103.81], color: "#60c8e0" }, // Bangalore -> Singapore
  { start: [12.97, 77.59], end: [25.20, 55.27], color: "#60c8e0" }, // Bangalore -> Dubai
  { start: [12.97, 77.59], end: [51.50, -0.12], color: "#3b82f6" }, // Bangalore -> London
  { start: [51.50, -0.12], end: [40.71, -74.00], color: "#60c8e0" }, // London -> New York
  { start: [40.71, -74.00], end: [37.77, -122.41], color: "#93c5fd" }, // New York -> SF
  { start: [51.50, -0.12], end: [50.11, 8.68], color: "#60c8e0" }, // London -> Frankfurt
  { start: [1.35, 103.81], end: [35.67, 139.65], color: "#3b82f6" }, // Singapore -> Tokyo
  { start: [1.35, 103.81], end: [-33.86, 151.20], color: "#60c8e0" }, // Singapore -> Sydney
  { start: [40.71, -74.00], end: [-23.55, -46.63], color: "#3b82f6" }, // New York -> Sao Paulo
  { start: [25.20, 55.27], end: [50.11, 8.68], color: "#60c8e0" }, // Dubai -> Frankfurt
];

function CyberWorldGlobe({ reducedMotion }: { reducedMotion: boolean }) {
  const globeGroupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!globeGroupRef.current) return;

    if (!reducedMotion) {
      // Smooth interactive rotation tracking mouse pointer
      const targetX = (state.pointer.x * Math.PI) / 5;
      const targetY = (state.pointer.y * Math.PI) / 5;

      globeGroupRef.current.rotation.y += (targetX - globeGroupRef.current.rotation.y) * 0.05 + delta * 0.15; // Slow continuous Earth spin
      globeGroupRef.current.rotation.x += (-targetY - globeGroupRef.current.rotation.x) * 0.05;

      // Satellite orbital physics
      if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.35;
      if (ring2Ref.current) ring2Ref.current.rotation.x -= delta * 0.25;
      if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <group ref={globeGroupRef}>
      {/* Studio Lighting System */}
      <ambientLight intensity={1.5} />
      <pointLight position={[15, 15, 15]} intensity={4} color="#60c8e0" />
      <pointLight position={[-15, -15, -15]} intensity={3} color="#3b82f6" />
      <directionalLight position={[0, 10, 5]} intensity={2} color="#ffffff" />

      {/* Earth Globe Core & Geodesic Grid */}
      <Float speed={reducedMotion ? 0 : 1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Layer 1: Deep Ocean Holographic Shell */}
        <Sphere args={[1.56, 64, 64]}>
          <meshStandardMaterial
            color="#021a36"
            emissive="#003366"
            emissiveIntensity={0.8}
            roughness={0.15}
            metalness={0.85}
            transparent
            opacity={0.65}
          />
        </Sphere>

        {/* Layer 2: Latitude & Longitude Geodesic Globe Grid */}
        <Sphere args={[1.6, 48, 24]}>
          <meshStandardMaterial
            color="#60c8e0"
            wireframe
            emissive="#60c8e0"
            emissiveIntensity={1.4}
            transparent
            opacity={0.85}
          />
        </Sphere>

        {/* 10 Global Enterprise Tech Hubs (City Nodes) */}
        {globalHubs.map((hub) => {
          const pos = latLongToVector3(hub.lat, hub.lon, 1.61);
          return (
            <group key={hub.name} position={pos}>
              {/* Core City Beacon Sphere */}
              <Sphere args={[hub.size, 16, 16]}>
                <meshStandardMaterial color={hub.color} emissive={hub.color} emissiveIntensity={2.5} roughness={0.1} />
              </Sphere>
              {/* Outer Pulsing Beacon Ring */}
              <Sphere args={[hub.size * 1.8, 16, 16]}>
                <meshBasicMaterial color={hub.color} wireframe transparent opacity={0.5} />
              </Sphere>
            </group>
          );
        })}

        {/* Optical Data Transfer Arcs between Global Hubs */}
        {dataArcs.map((arc, idx) => (
          <GlobeDataArc key={idx} start={arc.start} end={arc.end} radius={1.61} arcHeight={0.25} color={arc.color} />
        ))}
      </Float>

      {/* Satellite Orbital Infrastructure Rings */}
      <Torus ref={ring1Ref} args={[2.0, 0.025, 48, 120]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#60c8e0" emissive="#60c8e0" emissiveIntensity={1.4} roughness={0.15} metalness={0.85} />
      </Torus>

      <Torus ref={ring2Ref} args={[2.3, 0.02, 48, 120]} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1.1} roughness={0.15} metalness={0.85} />
      </Torus>

      <Torus ref={ring3Ref} args={[2.6, 0.015, 48, 120]} rotation={[Math.PI / 6, Math.PI / 3, 0]}>
        <meshStandardMaterial color="#93c5fd" emissive="#60c8e0" emissiveIntensity={0.7} transparent opacity={0.75} />
      </Torus>

      {/* Orbiting Communication Satellites */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2.35;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = ((i % 3) - 1) * 0.7;
        return (
          <Float key={i} speed={reducedMotion ? 0 : 3} floatIntensity={1.5}>
            <Sphere position={[x, y, z]} args={[0.055, 20, 20]}>
              <meshStandardMaterial color="#ffffff" emissive="#60c8e0" emissiveIntensity={1.5} />
            </Sphere>
          </Float>
        );
      })}
    </group>
  );
}

export default function GlobeScene() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex h-[420px] w-[420px] items-center justify-center lg:h-[520px] lg:w-[520px]" aria-hidden="true">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(96,200,224,0.22),transparent_70%)] blur-3xl animate-pulse-glow" />
      </div>
    );
  }

  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center lg:h-[520px] lg:w-[520px]" aria-hidden="true">
      {/* Deep Glowing Backdrop Aura */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(96,200,224,0.25),transparent_70%)] blur-3xl animate-pulse-glow" />

      <Canvas
        dpr={[1.5, 3]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 7.8], fov: 42 }}
        className="z-10 cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <CyberWorldGlobe reducedMotion={reducedMotion} />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
        </Suspense>
      </Canvas>
    </div>
  );
}
