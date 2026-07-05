"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function formatTimecode(progress: number) {
  // Purely decorative "timecode" derived from scroll position — hh:mm:ss:ff
  const totalFrames = Math.round(progress * 24 * 60 * 3); // ~3 min reel at 24fps
  const ff = totalFrames % 24;
  const totalSeconds = Math.floor(totalFrames / 24);
  const ss = totalSeconds % 60;
  const mm = Math.floor(totalSeconds / 60) % 60;
  const hh = Math.floor(totalSeconds / 3600);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
}

export default function ScrollReel() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const [timecode, setTimecode] = useState("00:00:00:00");

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setTimecode(formatTimecode(v)));
    return unsub;
  }, [scrollYProgress]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex h-6 items-center bg-ink/90 backdrop-blur-sm">
      <div className="sprocket-strip h-1.5 w-full opacity-40" />
      <motion.div
        className="absolute inset-y-0 left-0 h-full origin-left bg-primary/25"
        style={{ scaleX }}
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-tally" aria-hidden="true" />
        <span className="font-slug text-[10px] tracking-widest text-surface/70">{timecode}</span>
      </div>
    </div>
  );
}
