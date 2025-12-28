import { GithubIcon } from "@/components/Icons/github";
import { LinkedInIcon } from "@/components/Icons/linkedin";
import { TwitterIcon } from "@/components/Icons/twitter";
import { HeartIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t mt-28 border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 All rights reserved.
          </p>
          <p className="text-gray-300 font-medium flex items-center gap-2">
            Made with <HeartIcon className="size-5" /> by{" "}
            <span className="text-white">Pratham Gambhir</span>
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/pratham-gambhir-a52206395/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://x.com/_PrathamGambhir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <TwitterIcon />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
