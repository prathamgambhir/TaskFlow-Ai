import { GithubIcon } from "@/components/Icons/github";
import { LinkedInIcon } from "@/components/Icons/linkedin";
import { TwitterIcon } from "@/components/Icons/twitter";
import { HeartIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="dark:bg-black bg-white dark:text-white text-slate-900 py-12 border-t mt-28 dark:border-zinc-800 border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="dark:text-gray-400 text-slate-500 text-sm mb-2">
            © 2025 All rights reserved.
          </p>
          <p className="dark:text-gray-300 text-slate-700 font-medium flex items-center gap-2">
            Made with <HeartIcon className="size-5 dark:text-white text-slate-700" /> by{" "}
            <span className="dark:text-white text-slate-900">Pratham Gambhir</span>
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/pratham-gambhir-a52206395/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-400 text-slate-500 dark:hover:text-white hover:text-blue-500 transition-colors"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://x.com/_PrathamGambhir"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-400 text-slate-500 dark:hover:text-white hover:text-blue-500 transition-colors"
          >
            <TwitterIcon />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-400 text-slate-500 dark:hover:text-white hover:text-blue-500 transition-colors"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
