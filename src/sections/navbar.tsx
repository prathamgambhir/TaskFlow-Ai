import logoImage from "@/assets/images/logosaas.png";
import Button from "@/components/button";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";

const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Upadates", href: "#updates" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section>
      <div className="w-full flex justify-center mb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 border border-white/15 px-2 rounded-full h-16 w-7/8 m-4 items-center mt-6 md:mt-8">
          <div className="flex justify-start pl-4 items-center">
            <Image src={logoImage} alt="logo-img" className="size-10" />
          </div>
          <div className="hidden md:inline">
            <nav className="flex items-center justify-center gap-4 lg:gap-6 text-md font-medium opacity-90">
              {navLinks.map((link, idx) => (
                <a href={link.href} key={idx}>{link.label}</a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end pr-4">
            <Bars3Icon className="size-6 md:hidden" />
            <div className="hidden md:flex gap-2 lg:gap-4 justify-center items-center">
              <Button varient="primary">Login</Button>
              <Button varient="secondary">SignUp</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
