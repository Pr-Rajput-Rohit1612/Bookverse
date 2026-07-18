import { Bell, Search, Sun, Moon } from "lucide-react";
export default function Navbar() {
  return (
    <header className="flex h-24 items-center justify-between border-b border-[#E8DDCC] bg-[#F8F3EB] px-10">

      {/* Left */}

      <div>
        <p className="text-sm text-[#9C866F]">
          Welcome back 👋
        </p>

        <h1 className="mt-1 font-display text-4xl text-[#2B2018]">
          Home
        </h1>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        {/* Search */}

        {/* Search */}

<div className="relative">

  <Search
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7A67]"
  />

  <input
    type="text"
    placeholder="Search books..."
    className="h-12 w-80 rounded-2xl border border-[#E7DCCA] bg-[#FFFCF7] pl-11 pr-4 text-sm outline-none transition focus:border-[#C9A24B] focus:ring-2 focus:ring-[#C9A24B]/20"
  />

</div>

{/* Notification */}

<button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7DCCA] bg-[#FFFCF7] transition hover:scale-105">

  <Bell size={20} />

</button>

{/* Date & Time */}

<div className="flex h-12 min-w-[210px] items-center justify-between rounded-2xl border border-[#E7DCCA] bg-[#FFFCF7] px-5">

  <div>

    <p className="text-[11px] uppercase tracking-wider text-[#8A7A67]">
      Monday
    </p>

    <p className="text-sm font-semibold text-[#2B2018]">
      07 July
    </p>

  </div>

  <div className="flex items-center gap-2">

    <span className="font-semibold text-[#C9A24B]">
      7:00 PM
    </span>

    <Moon
      size={17}
      className="text-[#C9A24B]"
    />

  </div>

</div>

{/* Avatar */}

<button className=" flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#E7DCCA] bg-[#FFFCF7] transition hover:scale-105">

  <img
    src="https://api.dicebear.com/7.x/initials/svg?seed=Kaptaan"
    alt="profile"
    className="h-full w-full"
  />

</button>

      </div>

    </header>
  );
}