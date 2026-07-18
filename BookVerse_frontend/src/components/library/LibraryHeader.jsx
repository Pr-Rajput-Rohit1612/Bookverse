import { LibraryBig, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function LibraryHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[30px] border border-[#E9DDCD] bg-gradient-to-r from-[#FFF9F1] via-[#FCF5EA] to-[#F7EEE0] p-8 shadow-sm"
    >
      <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[#D6B46A]/10 blur-3xl" />

      <div className="relative flex items-center justify-between">

        <div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF3DB] px-4 py-2">

            <Sparkles
              size={15}
              className="text-[#C9A24B]"
            />

            <span className="text-sm text-[#8B7865]">
              Your Digital Collection
            </span>

          </div>

          <h1 className="font-display text-[42px] text-[#2B2018]">
            My Library
          </h1>

          <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#7B6D5C]">

            Organize, discover and manage every book in one beautiful place.

          </p>

        </div>

        <div className="flex gap-4">

          <div className="rounded-3xl bg-white p-5 shadow">

            <BookOpen
              size={28}
              className="text-[#C9A24B]"
            />

            <h2 className="mt-3 text-3xl font-bold text-[#2B2018]">
              248
            </h2>

            <p className="text-sm text-[#8A7A67]">
              Books
            </p>

          </div>

          <div className="rounded-3xl bg-[#C9A24B] p-5 text-white">

            <LibraryBig size={28} />

            <h2 className="mt-3 text-3xl font-bold">
              18
            </h2>

            <p className="text-sm opacity-90">
              Collections
            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}