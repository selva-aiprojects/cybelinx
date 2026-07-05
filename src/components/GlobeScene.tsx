import Image from "next/image";

export default function GlobeScene() {
  return (
    <div className="flex items-center justify-center" aria-hidden="true">
      <Image
        src="/assets/cybelinx-logo.png"
        alt="Cybelinx"
        width={480}
        height={132}
        priority
      />
    </div>
  );
}
