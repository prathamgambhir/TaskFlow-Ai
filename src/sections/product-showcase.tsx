import Image from "next/image";
import ProductScreenshot from "@/assets/images/app-screen.png";

export default function ProductShowcase() {
  return (
    <section className="bg-black text-white pt-14 pb-20 md:py-28 relative z-10">
      <div className="absolute -z-10 bg-linear-to-b from-black via-purple-700 to-black blur-[100px] w-full h-full"></div>
      <div className="flex flex-col gap-8 items-center ">
        <div className="text-center flex flex-col gap-2 md:gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-bold">Intutive Interface</h2>
          <p className="text-base max-w-xl font-extralight leading-relaxed text-gray-400 max-w-5/6 p-4">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, progress, motivate your efforts, and celebrate your
            successes, one task at a time.
          </p>
        </div>
        <Image
          src={ProductScreenshot}
          alt="Product Screenshot"
          className="mt-4 md:mt-10 h-70 md:h-140 lg:h-180 w-auto"
        />
      </div>
    </section>
  );
}
