import { ArrowRight } from "@/src/assets";
import { bannerData } from "@/src/lib/constants";
import Link from "next/link";

export const Banner = () => {
  return (
    <aside
      aria-label="Product announcement"
      className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm"
    >
      <p className="hidden md:block text-white/60">{bannerData.title}</p>
      <Link
        href={bannerData.link.href}
        className="inline-flex items-center gap-1 cursor-pointer touch-manipulation focus-visible:outline-3 focus-visible:outline-blue-600 focus-visible:outline-offset-3"
      >
        {bannerData.link.name}
        <ArrowRight
          aria-hidden="true"
          className="w-4 h-4 inline-flex justify-center items-center"
        />
      </Link>
    </aside>
  );
};
