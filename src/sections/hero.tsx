import { ArrowRightIcon } from "@heroicons/react/20/solid";
import CursorImage from "@/assets/images/cursor.png"
import MessageImage from "@/assets/images/message.png"
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-20 relative overflow-hidden z-1">
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="border border-white/30 p-2 rounded-lg flex items-center justify-center gap-4"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here.
            </span>
            <span className="inline-flex justify-center items-center gap-1">
              Read More
              <ArrowRightIcon className="size-4 mt-0.5" />
            </span>
          </a>
        </div>
        <h1 className="text-8xl mt-10 tracking-tighter text-center font-extrabold mx-4">
          One Task <br /> at a Time
        </h1>
        <Image src={CursorImage} alt="" className="hidden md:inline absolute rotate-z-10 top-58 left-40 lg:left-94 h-44 lg:h-48 w-auto"/>
        <Image src={MessageImage} alt="" className="hidden md:inline absolute top-48 right-38 lg:right-88 h-44 lg:h-48 w-auto"/>
        <p className="text-md md:text-xl mt-10 lg:mt-16 text-center mx-18 text-white/70">
          Celebrate the joy of accomplishment with an app <br /> designed to
          track progress, motivate your efforts,
          <br /> and celebrate your successes.
        </p>
        <div className="flex justify-center items-center mb-10 md:mb-14 lg:mb-24">
          <button className="mt-12 h-10 bg-white/90 text-black border-gray-200 shadow-sm/40 rounded-2xl w-auto px-6 py-2">
            Get for free
          </button>
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-[100%] border border-black/10 bg-black -z-10
          bg-[radial-gradient(closest-side,#000_80%,#9560EB)] 
             md:bg-[radial-gradient(closest-side,#000_95%,#9560EB)] 
             /* Mobile sizes */
             w-[160%] h-[300px] top-[calc(100%-100px)] 
             /* Tablet sizes */
             md:w-[150%] md:h-[500px] md:top-[calc(100%-200px)] md:translate-y-[15%]
             /* Desktop sizes */
             lg:w-[2500px] lg:h-[1200px] lg:top-[calc(100%-350px)] lg:translate-y-[16%]"
        ></div>
      </div>
    </section>
  );
}
