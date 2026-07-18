import {
  BookOpen,
  Brain,
  Heart,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Self Growth",
    books: 48,
    percent: 82,
    icon: Brain,
    color: "bg-[#C9A24B]",
    bg: "bg-[#FFF5E5]",
  },
  {
    name: "Fiction",
    books: 36,
    percent: 68,
    icon: BookOpen,
    color: "bg-[#8B6542]",
    bg: "bg-[#F8F1EA]",
  },
  {
    name: "History",
    books: 21,
    percent: 42,
    icon: Landmark,
    color: "bg-[#67A16E]",
    bg: "bg-[#EEF8F1]",
  },
  {
    name: "Romance",
    books: 15,
    percent: 28,
    icon: Heart,
    color: "bg-[#D96B84]",
    bg: "bg-[#FFF1F4]",
  },
];

export default function CategoriesChart() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] border border-[#ECE2D5] bg-white p-5 shadow-sm"
    >
      {/* Header */}

      <div className="mb-5">

        <h2 className="font-display text-[24px] text-[#2B2018]">
          Categories
        </h2>

        <p className="mt-1 text-sm text-[#8A7A67]">
          Library Distribution
        </p>

      </div>

      {/* Category Cards */}

      <div className="space-y-3">

        {categories.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.name}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-[#F2E9DD] bg-[#FFFCF8] p-3"
            >

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.bg}`}
                >
                  <Icon
                    size={19}
                    className="text-[#2B2018]"
                  />
                </div>

                <div className="flex-1">

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm font-semibold text-[#2B2018]">
                      {item.name}
                    </span>

                    <span className="text-xs text-[#8A7A67]">
                      {item.books} books
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-[#EEE4D8]">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 0.8 }}
                      className={`h-full rounded-full ${item.color}`}
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>
    </motion.section>
  );
}