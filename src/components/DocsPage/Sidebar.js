import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const componentLinks = [
    {
      name: "Magnetic Button",
      url: "magnetic-button",
    },
    {
      name: "White Ray",
      url: "white-ray",
    },
    {
      name: "Text Reveal v1",
      url: "text-reveal-v1",
    },
    {
      name: "Photo Trailing Effect",
      url: "photo-trailing-mousemove",
    },
    {
      name: "Water Drop Effect",
      url: "water-drop-effect",
    },
    {
      name: "Hacker Text Effect",
      url: "hacker-text-effect",
    },
    {
      name: "Floating Image Gallery",
      url: "floating-image-gallery",
    },
    {
      name: "Infinite Text Scroll v1",
      url: "infinite-text-scroll-v1",
    },
  ];
  const layoutComponentLinks = [
    {
      name: "Badges",
      url: "badges",
    },
    {
      name: "Buttons",
      url: "buttons",
    },
    {
      name: "Avatars",
      url: "avatars",
    },
    {
      name: "Loaders",
      url: "loaders",
    },
    {
      name: "Toasts",
      url: "toasts",
    },
    {
      name: "Footer",
      url: "footer",
      new: true,
    },
    {
      name: "Charts",
      url: "charts",
      new: true,
    },
    {
      name: "Carousel",
      url: "carousel",
      new: true,
    },
    {
      name: "Navbar",
      url: "navbar",
    },
    {
      name: "Alert Dialog",
      url: "alert-dialog",
    },
    {
      name: "Breadcrumb",
      url: "breadcrumb",
    },
    {
      name: "Hero",
      url: "hero",
    },
  ];
  return (
    <>
      <div
        className="fixed left-[1rem] p-[9px] cursor-pointer top-[5.3rem] border border-zinc-800 rounded bg-black hidden max-[900px]:flex z-[99] "
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14 5H2V3h12zm0 4H2V7h12zM2 13h12v-2H2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <aside
        className={`z-10 fixed flex flex-col gap-4 p-10 pb-20 bg-black border-r-2 docs-sidebar h-full max-[900px]:fixed overflow-auto  ${
          sidebarOpen ? "translate-x-0" : "translate-x-[-60rem]"
        } ${!isMobile && "translate-x-[0rem]"}`}
        style={{
          borderRight: "1px solid #ffffff20",
          minWidth: "16rem",
        }}
      >
        <div
          className="absolute w-fit justify-end items-end ml-auto right-[1rem] p-[9px] cursor-pointer top-[1rem] border border-zinc-800 rounded bg-black hidden max-[900px]:flex z-[9999999999]"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            />
          </svg>
        </div>
        <div className="relative bg-black sidebar-section">
          <p className="p-2 text-sm font-bold uppercase rounded-md">INFO</p>
          <ul className="p-2">
            <li>
              <span className="text-sm opacity-60">Stay updated </span>
              <Link
                className="text-sm blue-link w-fit"
                href="https://x.com/preetsuthar17"
                target="_blank"
              >
                @preetsuthar17
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative bg-black sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Resources
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            <li>
              <Link
                className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                  router.pathname === `/docs/resources/install-next`
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                href="/docs/resources/install-next"
              >
                Install Next.js
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                  router.pathname === `/docs/resources/install-tailwind`
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                href="/docs/resources/install-tailwind"
              >
                Install Tailwind CSS
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-1 text-sm transition-all hover:opacity-90 hover:underline w-fit ${
                  router.pathname === `/docs/resources/install-gsap`
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                href="/docs/resources/install-gsap"
              >
                Install GSAP
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                  router.pathname === `/docs/resources/install-framer-motion`
                    ? "opacity-100"
                    : "opacity-60"
                }`}
                href="/docs/resources/install-framer-motion"
              >
                Install Framer Motion
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Modern
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {componentLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                    router.pathname === `/docs/components/modern/${link.url}`
                      ? "opacity-100"
                      : "opacity-60"
                  }`}
                  href={`/docs/components/modern/${link.url}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <p className="flex items-center justify-between gap-1 p-2 text-sm font-bold uppercase ">
            Layout Components
          </p>
          <ul className="flex flex-col gap-[8px] p-2">
            {layoutComponentLinks
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((link, index) => (
                <li key={index}>
                  <Link
                    className={`flex items-center gap-1 text-sm transition-all  hover:opacity-90 hover:underline w-fit ${
                      router.pathname === `/docs/components/layout/${link.url}`
                        ? "opacity-100"
                        : "opacity-60"
                    }`}
                    href={`/docs/components/layout/${link.url}`}
                  >
                    {link.name}{" "}
                    {link.new && (
                      <span className=" bg-green-400 border border-green-900 text-black rounded-full flex items-center font-[600] text-[10px] py-[0.3px] px-[8px] decoration-none">
                        new
                      </span>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
