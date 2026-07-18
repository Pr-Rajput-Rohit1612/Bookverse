import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    progress: 68,
    page: 245,
    total: 372,
    cover: "https://covers.openlibrary.org/b/id/10523338-L.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    progress: 32,
    page: 98,
    total: 304,
    cover: "https://covers.openlibrary.org/b/id/8370221-L.jpg",
  },
];

export default function CurrentlyReading() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] border border-[#ECE2D5] bg-white p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">

        <div>

          <h2 className="font-display text-[28px] text-[#2B2018]">
            Continue Reading
          </h2>

          <p className="mt-1 text-sm text-[#8A7A67]">
            Pick up where you left off
          </p>

        </div>

        <button className="text-sm font-semibold text-[#C9A24B] hover:text-[#b58d36]">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {books.map((book) => (

          <motion.div
            key={book.id}
            whileHover={{ y: -3 }}
            className="flex items-center gap-4 rounded-2xl border border-[#F1E7DA] bg-[#FFFCF8] p-4 transition-shadow hover:shadow-md"
          >

            <img
              src={book.cover}
              alt={book.title}
              className="h-16 w-12 rounded-lg object-cover shadow"
            />

            <div className="flex-1 min-w-0">

              <h3 className="truncate text-[16px] font-semibold text-[#2B2018]">
                {book.title}
              </h3>

              <p className="text-sm text-[#8A7A67]">
                {book.author}
              </p>

              <div className="mt-3 flex items-center gap-5 text-xs text-[#8A7A67]">

                <span className="flex items-center gap-1">

                  <BookOpen size={13} />

                  {book.page}/{book.total}

                </span>

                <span className="flex items-center gap-1">

                  <Clock3 size={13} />

                  {book.progress}%

                </span>

              </div>

              <div className="mt-3 h-2 rounded-full bg-[#ECE3D6]">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E7C56A]"
                  style={{
                    width: `${book.progress}%`,
                  }}
                />

              </div>

            </div>

            <button className="flex items-center gap-2 rounded-xl bg-[#C9A24B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b88f35]">

              Read

              <ArrowRight size={15} />

            </button>

          </motion.div>

        ))}

      </div>
    </motion.section>
  );
}