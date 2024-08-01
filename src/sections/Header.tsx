import Image from "next/image";
import { Banner } from "./Banner";
import { Logo, Menu } from "@/src/assets";
import Link from "next/link";
import { headerData } from "@/src/constants";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md z-20">
      <Banner />
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Prodway SaaS logo" width={40} height={40} />
            <Menu className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {headerData.headerLinks.map((link) => (
                <Link href={link.href} key={link.name} className="hover:text-black">
                  {link.name}
                </Link>
              ))}
              <button type="button" className="btn btn-primary">
                {headerData.cta}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
