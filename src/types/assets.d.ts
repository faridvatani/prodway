declare module "*.png" {
  const image: import("next/image").StaticImageData;
  export default image;
}

declare module "*.svg" {
  const Component: import("react").FC<import("react").SVGProps<SVGSVGElement>>;
  export default Component;
}
