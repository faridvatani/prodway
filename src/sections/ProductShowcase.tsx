import Image from "next/image";
import { ProductImage, PyramidImage, TubeImage } from "@/src/assets";

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <Image
            src={PyramidImage}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={TubeImage}
            alt="Tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute -left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};
