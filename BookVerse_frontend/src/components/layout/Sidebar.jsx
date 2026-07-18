import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import navigation from "../../data/navigation";

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside
      className={`sticky top-0 h-screen shrink-0 overflow-y-auto overflow-x-hidden overscroll-contain transition-all duration-300 [&::-webkit-scrollbar]:hidden ${
        collapsed ? "w-[86px] px-3" : "w-72 px-3 pr-9"
      }`}
      style={{
        scrollbarWidth: "none",
        backgroundImage: `
          linear-gradient(rgba(25,18,13,.84), rgba(25,18,13,.84)),
          url('/wood.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex min-h-full flex-col py-3">

        {/* LOGO */}

        <div className="relative">

          <div className={collapsed ? "text-center" : "ml-1"}>

            {collapsed ? (
              <h1 className="font-display text-[40px] leading-none text-[#E7C978]">
                B
              </h1>
            ) : (
              <>
                <h1 className="font-display text-[54px] leading-none text-[#E7C978]">
                  BookVerse
                </h1>

                <p className="mt-2 text-[14px] text-[#B89A78]">
                  Your Personal Library
                </p>
              </>
            )}

          </div>

          {/* COLLAPSE BUTTON */}

          <button
            type="button"
            onClick={onToggle}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={`absolute flex h-9 w-9 items-center justify-center rounded-xl border border-[#5A4330] bg-[#342419]/90 text-[#E8D5B7] shadow-md transition hover:bg-[#4A3324] ${
            collapsed
              ? "left-1/2 top-[46px] -translate-x-1/2"
              : "right-0 top-[58px]"
          }`}
          >
            {collapsed ? (
              <ChevronRight size={17} />
            ) : (
              <ChevronLeft size={17} />
            )}
          </button>

        </div>

        {/* NAVIGATION */}

        <div className={collapsed ? "mt-16" : "mt-7"}>

          {navigation.map((section) => (
            <div
              key={section.title}
              className="mb-5"
            >
              {!collapsed && (
                <p className="mb-2 pl-2 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#8F7155]">
                  {section.title}
                </p>
              )}

              <div className="space-y-1">

                {section.items.map(({ name, icon: Icon, path }) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    title={collapsed ? name : ""}
                  >
                    {({ isActive }) => (
                      <motion.div
                        whileHover={{
                          x: collapsed ? 0 : 4,
                        }}
                        transition={{
                          duration: 0.18,
                        }}
                        className={`flex h-[46px] items-center rounded-2xl transition-all ${
                          collapsed
                            ? "justify-center"
                            : "gap-4 px-4"
                        } ${
                          isActive
                            ? "bg-[#956B44] text-white shadow-xl"
                            : "text-[#E4D5C3] hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Icon
                          size={18}
                          className="shrink-0"
                        />

                        {!collapsed && (
                          <span className="text-[15px] font-medium">
                            {name}
                          </span>
                        )}

                      </motion.div>
                    )}
                  </NavLink>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* QUOTE AND DECORATION */}

        {!collapsed && (
          <div className="mt-3 rounded-[26px] border border-[#5A4330] bg-[#342419]/85 px-4 pb-3 pt-4">

            <p className="text-[13px] italic leading-6 text-[#E8D5B7]">
              “A room without books is like a body without a soul.”
            </p>

            <p className="mt-1 text-[11px] text-[#BA9B78]">
              — Cicero
            </p>

            <div className="relative mt-3 h-[115px] w-full">

              <img
                src="/lamp.png"
                alt="Decorative lamp"
                className="absolute bottom-0 left-0 h-[74px] object-contain"
              />

              <img
                src="/books.png"
                alt="Stack of books"
                className="absolute bottom-0 left-1/2 h-[98px] -translate-x-1/2 object-contain"
              />

              <img
                src="/plant.png"
                alt="Decorative plant"
                className="absolute bottom-0 right-0 h-[76px] object-contain"
              />

            </div>

          </div>
        )}

      </div>
    </aside>
  );
}