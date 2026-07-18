import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Books",
    value: "248",
    icon: BookOpen,
    color: "bg-[#FFF5E5]",
    iconColor: "text-[#C9A24B]",
    change: "+12",
  },
  {
    title: "Completed",
    value: "183",
    icon: CheckCircle2,
    color: "bg-[#EEF9F1]",
    iconColor: "text-[#4D9B63]",
    change: "+6",
  },
  {
    title: "Reading",
    value: "07",
    icon: Clock3,
    color: "bg-[#EEF5FF]",
    iconColor: "text-[#4E7CD8]",
    change: "+2",
  },
  {
    title: "Favorites",
    value: "54",
    icon: Heart,
    color: "bg-[#FFF0F3]",
    iconColor: "text-[#D45A73]",
    change: "+8",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-4">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="rounded-[24px] border border-[#ECE2D5] bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-[#8B7A68]">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#2B2018]">
                  {item.value}
                </h2>

              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
              >

                <Icon
                  size={22}
                  className={item.iconColor}
                />

              </div>

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-xs text-[#A18F7C]">
                This Month
              </span>

              <span className="rounded-full bg-[#F5F1EA] px-2 py-1 text-xs font-semibold text-[#4D9B63]">
                {item.change}
              </span>

            </div>

          </motion.div>

        );

      })}

    </div>
  );
}