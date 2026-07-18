import {
  Search,
  SlidersHorizontal,
  Grid2X2,
  List,
  ArrowUpDown,
} from "lucide-react";

const categories = [
  "All",
  "Self Help",
  "Business",
  "Fiction",
  "History",
  "Science",
  "Biography",
];

export default function LibraryToolbar() {
  return (
    <section className="rounded-[28px] border border-[#E9DDCD] bg-white p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8A7A67]"
          />

          <input
            placeholder="Search books..."
            className="h-12 w-full rounded-2xl border border-[#ECE3D6] bg-[#FCF8F2] pl-12 pr-4 outline-none focus:border-[#C9A24B]"
          />

        </div>

        <button className="flex h-12 items-center gap-2 rounded-2xl border border-[#ECE3D6] bg-[#FCF8F2] px-5">

          <SlidersHorizontal size={18} />

          Filters

        </button>

        <button className="flex h-12 items-center gap-2 rounded-2xl border border-[#ECE3D6] bg-[#FCF8F2] px-5">

          <ArrowUpDown size={18} />

          Sort

        </button>

        <div className="flex rounded-2xl border border-[#ECE3D6] bg-[#FCF8F2] p-1">

          <button className="rounded-xl bg-[#C9A24B] p-3 text-white">

            <Grid2X2 size={18} />

          </button>

          <button className="rounded-xl p-3 text-[#8A7A67]">

            <List size={18} />

          </button>

        </div>

      </div>

      <div className="mt-5 flex flex-wrap gap-3">

        {categories.map((item, index) => (

          <button
            key={item}
            className={`rounded-full px-5 py-2 text-sm transition ${
              index === 0
                ? "bg-[#C9A24B] text-white"
                : "bg-[#F8F3EB] text-[#6A5B4B] hover:bg-[#EEE3D3]"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

    </section>
  );
}