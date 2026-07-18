import { CalendarDays, Flame, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const week = [
  { day: "M", value: 75 },
  { day: "T", value: 40 },
  { day: "W", value: 95 },
  { day: "T", value: 60 },
  { day: "F", value: 82 },
  { day: "S", value: 30 },
  { day: "S", value: 68 },
];

export default function ReadingProgress() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] border border-[#ECE2D5] bg-white p-5 shadow-sm"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="font-display text-[24px] text-[#2B2018]">
            Weekly Progress
          </h2>

          <p className="mt-1 text-sm text-[#8A7A67]">
            Last 7 Days
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF5E5]">

          <CalendarDays
            size={20}
            className="text-[#C9A24B]"
          />

        </div>

      </div>

      {/* Graph */}

      <div className="mt-7 flex items-end justify-between">

        {week.map((item) => (

          <div
            key={item.day}
            className="flex flex-col items-center gap-2"
          >

            <div className="flex h-20 w-7 items-end rounded-full bg-[#F4EEE4]">

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${item.value}%` }}
                transition={{ duration: 0.7 }}
                className="w-full rounded-full bg-gradient-to-t from-[#C9A24B] to-[#E6C86D]"
              />

            </div>

            <span className="text-xs text-[#8A7A67]">
              {item.day}
            </span>

          </div>

        ))}

      </div>

      {/* Bottom Stats */}

      <div className="mt-6 grid grid-cols-2 gap-3">

        <div className="rounded-2xl bg-[#FCF7EF] p-4">

          <div className="flex items-center gap-2">

            <Flame
              size={18}
              className="text-orange-500"
            />

            <span className="text-sm text-[#6A5C4D]">
              Streak
            </span>

          </div>

          <h3 className="mt-2 text-2xl font-bold text-[#2B2018]">
            12 Days
          </h3>

        </div>

        <div className="rounded-2xl bg-[#EEF8F2] p-4">

          <div className="flex items-center gap-2">

            <TrendingUp
              size={18}
              className="text-green-600"
            />

            <span className="text-sm text-[#6A5C4D]">
              Growth
            </span>

          </div>

          <h3 className="mt-2 text-2xl font-bold text-green-600">
            +18%
          </h3>

        </div>

      </div>

    </motion.section>
  );
}