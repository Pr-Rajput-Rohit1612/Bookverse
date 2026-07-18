import {
  Award,
  BookOpen,
  Flame,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    title: "Books Read",
    value: "183",
    icon: BookOpen,
    color: "bg-[#FFF5E5]",
    iconColor: "text-[#C9A24B]",
  },
  {
    title: "Achievements",
    value: "24",
    icon: Award,
    color: "bg-[#EEF7FF]",
    iconColor: "text-[#4E7CD8]",
  },
  {
    title: "Reading Streak",
    value: "12",
    icon: Flame,
    color: "bg-[#FFF0EB]",
    iconColor: "text-[#FF7A45]",
  },
  {
    title: "Rating",
    value: "4.9",
    icon: Star,
    color: "bg-[#FFF8E3]",
    iconColor: "text-[#E3B100]",
  },
];

export default function Milestones() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] border border-[#ECE2D5] bg-white p-5 shadow-sm"
    >
      <div className="mb-5">

        <h2 className="font-display text-[24px] text-[#2B2018]">
          Milestones
        </h2>

        <p className="mt-1 text-sm text-[#8A7A67]">
          Reading Achievements
        </p>

      </div>

      <div className="grid grid-cols-2 gap-3">

        {milestones.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-[#F0E7DB] bg-[#FFFCF8] p-4 shadow-sm hover:shadow-md"
            >

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.color}`}
              >

                <Icon
                  size={20}
                  className={item.iconColor}
                />

              </div>

              <h3 className="mt-4 text-2xl font-bold text-[#2B2018]">
                {item.value}
              </h3>

              <p className="mt-1 text-sm text-[#8A7A67]">
                {item.title}
              </p>

            </motion.div>

          );

        })}

      </div>
    </motion.section>
  );
}