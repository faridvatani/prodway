import Image from "next/image";
import {
  AcmeLogo,
  ApexLogo,
  CelestialLogo,
  EchoLogo,
  PulseLogo,
  QuantumLogo,
} from "@/src/assets";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image
              src={AcmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={EchoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ApexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
