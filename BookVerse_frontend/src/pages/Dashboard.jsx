
import HeroSection from "../components/dashboard/HeroSection";
import StatsCards from "../components/dashboard/StatsCards";
import CurrentlyReading from "../components/dashboard/CurrentlyReading";
import RecentlyAdded from "../components/dashboard/RecentlyAdded";

import ReadingGoal from "../components/dashboard/ReadingGoal";
import Milestones from "../components/dashboard/Milestones";
import ReadingProgress from "../components/dashboard/ReadingProgress";
import CategoriesChart from "../components/dashboard/CategoriesChart";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-[1350px] space-y-5">

      {/* TOP */}

      <div className="grid grid-cols-12 items-stretch gap-5">

        <div className="col-span-12 h-full xl:col-span-9">
          <HeroSection />
        </div>

        <div className="col-span-12 h-full xl:col-span-3">
          <ReadingGoal />
        </div>

      </div>

      {/* STATS */}

      <StatsCards />

      {/* CONTENT */}

      <div className="grid grid-cols-12 items-start gap-5">

        {/* LEFT */}

        <div className="col-span-12 space-y-5 lg:col-span-8">

          <CurrentlyReading />

          <CategoriesChart />

        </div>

        {/* RIGHT */}

        <div className="col-span-12 space-y-5 lg:col-span-4">

          <Milestones />

          <ReadingProgress />

        </div>

        <div className="col-span-12">
          <RecentlyAdded />
        </div>

      </div>

    </div>
  );
}

