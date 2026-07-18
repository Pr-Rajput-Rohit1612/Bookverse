import LibraryHeader from "../components/library/LibraryHeader";
import LibraryToolbar from "../components/library/LibraryToolbar";
import BookGrid from "../components/library/BookGrid";
import Pagination from "../components/library/Pagination";

export default function Library() {
  return (
    <div className="mx-auto max-w-[1380px] space-y-6">

      <LibraryHeader />

      <LibraryToolbar />

      <BookGrid />

      <Pagination />

    </div>
  );
}