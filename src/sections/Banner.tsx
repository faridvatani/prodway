import { ArrowRight } from "@/src/assets";
import { bannerData } from "@/src/constants";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
      <p className="hidden md:block text-white/60">{bannerData.title}</p>
      <Link
        href={bannerData.link.href}
        className="inline-flex items-center gap-1 cursor-pointer"
      >
        {bannerData.link.name}
        <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
      </Link>
    </div>
  );
};
