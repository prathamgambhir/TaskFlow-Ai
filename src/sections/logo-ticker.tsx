import AcmeLogo from "@/assets/images/acme.png";
import ApexLogo from "@/assets/images/apex.png";
import CelestialLogo from "@/assets/images/celestial.png";
import QuantumLogo from "@/assets/images/quantum.png";
import EchoLogo from "@/assets/images/echo.png";
import PulseLogo from "@/assets/images/pulse.png";
import Image, { StaticImageData } from "next/image";

const images: { src: StaticImageData; alt: string }[] = [
  { src: AcmeLogo, alt: "Acme Logo" },
  { src: ApexLogo, alt: "Apex Logo" },
  { src: CelestialLogo, alt: "Celestial Logo" },
  { src: QuantumLogo, alt: "Quantum Logo" },
  { src: EchoLogo, alt: "Echo Logo" },
  { src: PulseLogo, alt: "Pulse Logo" },
];

export default function LogoTicker() {
  return (
    <section>
      <div className="bg-black text-white flex flex-col gap-12 md:gap-14 lg:gap-16 items-center py-10">
        <h2 className="text-sm lg:text-base font-medium text-white/60">
            Trusted by the world's most innovative teams
        </h2>
        <div className="flex gap-16 md:gap-20 lg:gap-24 overflow-hidden">
            {images.map((image, idx) => (
                <Image src={image.src} alt={image.alt} key={idx} className="flex-none h-8 md:h-10 w-auto"/>
            ))}
        </div>
      </div>
    </section>
  );
}
