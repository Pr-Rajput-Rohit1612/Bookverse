import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative h-full overflow-hidden rounded-[28px] border border-[#E9DDCD] bg-gradient-to-r from-[#FFF8EF] via-[#FCF5EA] to-[#F7EFE2] px-8 py-7 shadow-sm"
    >
      <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#D7B56A]/10 blur-3xl" />

      <div className="relative flex h-full items-center justify-between gap-10">

        <div className="max-w-[650px]">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF2D5] px-3 py-2">

            <Sparkles
              size={16}
              className="text-[#C9A24B]"
            />

            <span className="text-sm font-medium text-[#8A7A67]">
              Welcome Back 👋
            </span>

          </div>

          <h1 className="font-display text-[38px] leading-[1.18] text-[#2B2018]">

            Every book you finish
            <br />
            writes a new chapter
            <br />
            in your life.

          </h1>

          <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-[#786A58]">

            Organize your digital bookshelf, continue where you left off,
            track your achievements and build a reading habit that lasts.

          </p>

          <button className="mt-7 flex items-center gap-2 rounded-2xl bg-[#C9A24B] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            Continue Reading

            <ArrowRight size={17} />

          </button>

        </div>

        <div className="hidden w-[210px] flex-col gap-4 lg:flex">

          <div className="rounded-3xl bg-white p-5 shadow-md">

            <p className="text-xs text-[#8A7A67]">
              Current Streak
            </p>

            <h2 className="mt-1 text-4xl font-bold text-[#2B2018]">
              12
            </h2>

            <span className="text-sm text-orange-500">
              🔥 Days
            </span>

          </div>

          <div className="rounded-3xl bg-[#C9A24B] p-5 text-white">

            <p className="text-xs opacity-80">
              Books Finished
            </p>

            <h2 className="mt-1 text-4xl font-bold">
              183
            </h2>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

