import HelixImage from "@/assets/images/helix2.png";
import EmojisterImage from "@/assets/images/emojistar.png";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-black text-white py-24 md:py-32 lg:py-38 px-6 relative">
        <Image src={HelixImage} alt="Helix Image" className="absolute lg:right-22 md:right-5 md:size-35 lg:size-60 bottom-8 hidden md:inline" />
        <Image src={EmojisterImage} alt="Imojister Image" className="absolute lg:left-22 md:left-8 md:size-35 lg:size-60 top-10 hidden md:inline" />
      <div className="w-3/4 max-w-3xl mx-auto text-center relative z-10">
        <div className="absolute -z-10 bg-linear-to-b from-black via-purple-700 to-black blur-[100px] w-full h-full"></div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
          Get instant access
        </h2>

        <p className="text-gray-400 max-w-3xl text-lg md:text-xl leading-relaxed mb-10 mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <form className="flex flex-col gap-3 w-full mx-auto max-w-3xl md:max-w-xl md:flex-row md:items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full bg-zinc-800 border-none rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/80 outline-none"
          />

          <button
            type="submit"
            className="w-full lg:max-w-48 md:max-w-36 bg-white text-black font-medium py-3 px-4 rounded-lg hover:bg-gray-200"
          >
            Get access
          </button>
        </form>
      </div>
    </section>
  );
}
