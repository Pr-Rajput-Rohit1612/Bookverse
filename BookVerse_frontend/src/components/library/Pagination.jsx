import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between rounded-[24px] border border-[#E9DDCD] bg-white p-5 shadow-sm">

      <p className="text-sm text-[#7C6D5D]">
        Showing <span className="font-semibold">1 - 6</span> of{" "}
        <span className="font-semibold">248</span> books
      </p>

      <div className="flex items-center gap-2">

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8DED0]">

          <ChevronLeft size={18} />

        </button>

        <button className="h-11 w-11 rounded-xl bg-[#C9A24B] text-white">
          1
        </button>

        <button className="h-11 w-11 rounded-xl border border-[#E8DED0]">
          2
        </button>

        <button className="h-11 w-11 rounded-xl border border-[#E8DED0]">
          3
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8DED0]">

          <ChevronRight size={18} />

        </button>

      </div>

    </div>
  );
}