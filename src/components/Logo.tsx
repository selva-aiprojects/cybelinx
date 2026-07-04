import Image from "next/image";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/brand/logo-icon.svg"
      alt="Cybelinx"
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
      alt="Cybelinx — Engineering Intelligent Enterprises"
      width={height * 3.7}
      height={height}
      priority
    />
  );
}
