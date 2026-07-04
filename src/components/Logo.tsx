import Image from "next/image";
import { brand } from "@/lib/content";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/brand/logo-icon.svg"
      alt={brand.name}
      width={size}
      height={size}
      className="rounded-full"
      priority
    />
  );
}

export function LogoLockup({ height = 32 }: { height?: number }) {
  return (
    <Image
      src="/brand/logo-lockup-dark.svg"
      alt={`${brand.name} — ${brand.tagline}`}
      width={height * 3.7}
      height={height}
      priority
    />
  );
}
