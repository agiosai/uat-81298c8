import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://web-agi-2ec363.webflow.io/"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://web-agi-2ec363.webflow.io/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a>
      </div>
      <h1 className="sr-only">AGI OS</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        AGIO OS
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
