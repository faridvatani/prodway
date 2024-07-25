import { ArrowRight } from "@/src/assets";

export const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
      <p className="hidden md:block text-white/60">
        Streamline your workflow and boost your productivity
      </p>
      <div className="inline-flex items-center gap-1">
        <p>Get started for free</p>
        <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
      </div>
    </div>
  );
};
