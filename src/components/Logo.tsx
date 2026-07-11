import Image from "next/image";
import { brand } from "@/lib/content";

export function LogoMark({ size = 72 }: { size?: number }) {
  return (
    <div className="logo-elevate-container inline-flex items-center justify-center transition-all duration-300">
      <Image
        src="/assets/logo.png"
        alt={brand.name}
        width={size}
        height={size}
        className="rounded-full object-contain"
        priority
      />
    </div>
  );
}

export function LogoLockup({ height = 64 }: { height?: number }) {
  return (
    <div className="logo-elevate-container inline-flex items-center justify-center transition-all duration-300">
      <Image
        src="/assets/logo.png"
        alt={`${brand.name}`}
        width={height * 3.7}
        height={height}
        priority
        className="rounded object-contain"
      />
    </div>
  );
}
