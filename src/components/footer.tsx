"use client";
import { T, Var } from "gt-next/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./navbar";

const links = [
  {
    text: "Docs",
    url: "/en/docs",
  },
  {
    text: "Book",
    url: "https://kastrax.ai/book",
  },
  {
    text: "llms.txt",
    url: "/llms.txt",
  },
  {
    text: "llms-full.txt",
    url: "/llms-full.txt",
  },
  {
    text: "MCP Registry Registry",
    url: "https://kastrax.ai/mcp-registry-registry",
  },
];

const socials: Array<{
  text: string;

  url: string;
}> = [
  {
    text: "github",

    url: "https://github.com/louloulin/kastrax",
  },
  {
    text: "discord",

    url: "https://discord.gg/BTYqqHKUrf",
  },
  {
    text: "X",

    url: "https://x.com/kastrax_ai",
  },
  {
    text: "youtube",

    url: "https://www.youtube.com/@kastrax-ai",
  },
];

export const Footer = () => {
  const pathname = usePathname();

  const showFooter = pathname === "/";

  return (
    <T id="components.footer.0">
      <footer
        data-state={!showFooter}
        className="flex z-30  mx-auto bg-[#fafafa] dark:bg-transparent  border-t-[var(--border)]  relative w-full border-t-[0.5px] flex-col items-center pt-8 lg:pt-[5rem] pb-24 md:pb-32 footer data-[state=false]:mt-8 "
      >
        <div className="flex max-w-(--nextra-content-width) pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] flex-col lg:flex-row gap-16 lg:gap-0 w-full justify-between">
          <div>
            <Logo />
            {/* Newsletter form removed */}
          </div>
          <div className="flex gap-10">
            <div className="flex gap-16">
              <ul className=" space-y-2 text-sm">
                <p className="text-black dark:text-white">Developers</p>
                <Var>
                  {links.map((link) => {
                    const isGithub = link.text.toLowerCase() === "github";
                    return (
                      <li key={link.url}>
                        <Link
                          target={isGithub ? "_blank" : undefined}
                          href={link.url}
                          className="dark:hover:text-white hover:text-black text-[#939393] dark:text-[#939393] transition-colors"
                        >
                          {link.text}
                        </Link>
                      </li>
                    );
                  })}
                </Var>
              </ul>
              <ul className="space-y-2 text-sm">
                <p className="text-black dark:text-white">Company</p>
                <Var>
                  {socials.map((link) => {
                    return (
                      <li key={link.url}>
                        <a
                          target="_blank"
                          href={link.url}
                          className=" text-[#939393] dark:text-[#939393] hover:text-black items-center dark:hover:text-white transition-colors capitalize group"
                        >
                          {link.text}
                        </a>
                      </li>
                    );
                  })}
                </Var>
              </ul>
            </div>
            {/* Newsletter form removed */}
          </div>
        </div>
      </footer>
    </T>
  );
};
