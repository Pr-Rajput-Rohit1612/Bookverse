import { Target, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function ReadingGoal() {
  const progress = 72;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full rounded-[28px] border border-[#ECE2D5] bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">

        <div>

          <h2 className="font-display text-[24px] text-[#2B2018]">
            Reading Goal
          </h2>

          <p className="mt-1 text-sm text-[#8A7A67]">
            Monthly Progress
          </p>

        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF5E5]">

          <Target
            size={20}
            className="text-[#C9A24B]"
          />

        </div>

      </div>

      <div className="mt-7 flex justify-center">

        <div className="relative flex h-40 w-40 items-center justify-center">

          <svg
            className="-rotate-90"
            width="160"
            height="160"
          >
            <circle
              cx="80"
              cy="80"
              r="66"
              stroke="#EFE5D8"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="80"
              cy="80"
              r="66"
              stroke="#C9A24B"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={415}
              strokeDashoffset={415 - (415 * progress) / 100}
            />
          </svg>

          <div className="absolute text-center">

            <h2 className="text-4xl font-bold text-[#2B2018]">
              {progress}%
            </h2>

            <p className="mt-1 text-sm text-[#8A7A67]">
              Completed
            </p>

          </div>

        </div>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">

        <div className="rounded-2xl bg-[#FCF7EF] p-4 text-center">

          <p className="text-xs text-[#8A7A67]">
            Books
          </p>

          <h3 className="mt-1 text-2xl font-bold text-[#2B2018]">
            18/25
          </h3>

        </div>

        <div className="rounded-2xl bg-[#FFF5E5] p-4 text-center">

          <div className="flex justify-center">

            <Flame
              size={20}
              className="text-orange-500"
            />

          </div>

          <h3 className="mt-1 text-2xl font-bold text-[#2B2018]">
            12
          </h3>

          <p className="text-xs text-[#8A7A67]">
            Day Streak
          </p>

        </div>

      </div>

    </motion.section>
  );
}
