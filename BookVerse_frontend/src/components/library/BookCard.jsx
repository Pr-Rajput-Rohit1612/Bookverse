import { Heart, Star, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function BookCard({ book }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: .25 }}
      className="group overflow-hidden rounded-[26px] border border-[#E9DDCD] bg-white shadow-sm hover:shadow-xl"
    >
      <div className="relative">

        <img
          src={book.cover}
          alt={book.title}
          className="h-72 w-full object-cover duration-300 group-hover:scale-105"
        />

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur">

          <Heart
            size={18}
            className="text-[#C9A24B]"
          />

        </button>

      </div>

      <div className="p-5">

        <div className="mb-3 flex items-center justify-between">

          <span className="rounded-full bg-[#F7F1E6] px-3 py-1 text-xs text-[#85694C]">
            {book.category}
          </span>

          <div className="flex items-center gap-1">

            <Star
              size={15}
              className="fill-[#E6B93D] text-[#E6B93D]"
            />

            <span className="text-sm text-[#6E6357]">
              {book.rating}
            </span>

          </div>

        </div>

        <h3 className="line-clamp-2 text-[19px] font-semibold text-[#2C2118]">
          {book.title}
        </h3>

        <p className="mt-1 text-sm text-[#8D7A69]">
          {book.author}
        </p>

        <div className="mt-5">

          <div className="mb-2 flex justify-between text-xs text-[#8A7A67]">

            <span>{book.progress}% Read</span>

            <span>{book.pages} Pages</span>

          </div>

          <div className="h-2 rounded-full bg-[#ECE3D7]">

            <div
              className="h-full rounded-full bg-[#C9A24B]"
              style={{ width: `${book.progress}%` }}
            />

          </div>

        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C9A24B] py-3 text-white transition hover:bg-[#B88F38]">

          <BookOpen size={18} />

          Continue Reading

        </button>

      </div>
    </motion.div>
  );
}