import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://covers.openlibrary.org/b/id/10523338-L.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://covers.openlibrary.org/b/id/8370221-L.jpg",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Héctor García",
    image: "https://covers.openlibrary.org/b/id/9259256-L.jpg",
  },
  {
    id: 4,
    title: "Psychology of Money",
    author: "Morgan Housel",
    image: "https://covers.openlibrary.org/b/id/12617727-L.jpg",
  },
  {
    id: 5,
    title: "Can't Hurt Me",
    author: "David Goggins",
    image: "https://covers.openlibrary.org/b/id/10594765-L.jpg",
  },
];

export default function RecentlyAdded() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] border border-[#ECE2D5] bg-white p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">

        <div>
          <h2 className="font-display text-[24px] text-[#2B2018]">
            Recently Added
          </h2>

          <p className="mt-1 text-sm text-[#8A7A67]">
            Latest books in your library
          </p>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A24B] text-white">
          <Plus size={18} />
        </button>

      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

        {books.map((book) => (

          <motion.div
            key={book.id}
            whileHover={{ y: -5 }}
            className="min-w-[150px] rounded-2xl border border-[#F0E6D9] bg-[#FFFCF8] p-3 shadow-sm hover:shadow-lg transition"
          >

            <img
              src={book.image}
              alt={book.title}
              className="h-32 w-full rounded-xl object-cover"
            />

            <h3 className="mt-3 line-clamp-1 font-semibold text-[#2B2018]">
              {book.title}
            </h3>

            <p className="mt-1 text-xs text-[#8A7A67] line-clamp-1">
              {book.author}
            </p>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}