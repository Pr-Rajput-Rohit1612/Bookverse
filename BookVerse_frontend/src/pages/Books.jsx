import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Heart,
  LoaderCircle,
  Search,
  Star,
} from "lucide-react";

import { getPagedBooks } from "../service/api";

const PAGE_SIZE = 15;

export default function Books() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadBooks();
  }, [currentPage]);

  const loadBooks = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getPagedBooks(currentPage, PAGE_SIZE);
      const data = response.data;

      if (Array.isArray(data)) {
        setBooks(data);
        setTotalBooks(data.length);
        setTotalPages(1);
      } else {
        setBooks(Array.isArray(data.content) ? data.content : []);
        setTotalPages(Number(data.totalPages) || 0);
        setTotalBooks(Number(data.totalElements) || 0);
      }
    } catch (err) {
      console.error("Failed to load books:", err);

      setError(
        err.response?.data?.message ||
          "Books load nahi ho paayi. Backend ya pagination API check karo."
      );
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return books;
    }

    return books.filter((book) => {
      return (
        book.title?.toLowerCase().includes(query) ||
        book.author?.toLowerCase().includes(query) ||
        book.category?.toLowerCase().includes(query) ||
        book.status?.toLowerCase().includes(query)
      );
    });
  }, [books, searchText]);

  const getProgress = (book) => {
    const totalPagesCount = Number(book.totalPages) || 0;
    const pagesRead = Number(book.pagesRead) || 0;

    if (totalPagesCount <= 0) {
      return 0;
    }

    return Math.min(
      100,
      Math.round((pagesRead / totalPagesCount) * 100)
    );
  };

  const changePage = (pageNumber) => {
    if (
      pageNumber < 0 ||
      pageNumber >= totalPages ||
      pageNumber === currentPage
    ) {
      return;
    }

    setCurrentPage(pageNumber);
    setSearchText("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    const startPage = Math.max(0, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    for (let page = startPage; page <= endPage; page += 1) {
      visiblePages.push(page);
    }

    return visiblePages;
  };

  return (
    <div className="mx-auto max-w-[1350px] space-y-6">

      {/* HEADER */}

      <section className="rounded-[28px] border border-[#E9DDCD] bg-gradient-to-r from-[#FFF8EF] to-[#F7EFE2] p-7 shadow-sm">

        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

          <div>
            <p className="text-sm font-medium text-[#C9A24B]">
              Personal Collection
            </p>

            <h1 className="mt-1 font-display text-[38px] text-[#2B2018]">
              My Library
            </h1>

            <p className="mt-2 text-sm text-[#786A58]">
              Browse and manage all books in your BookVerse collection.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DCCA] bg-white px-6 py-3 text-center shadow-sm">

            <p className="text-xs uppercase tracking-wider text-[#8A7A67]">
              Total Books
            </p>

            <p className="mt-1 text-3xl font-bold text-[#2B2018]">
              {totalBooks}
            </p>

          </div>

        </div>

      </section>

      {/* SEARCH */}

      <section className="rounded-[24px] border border-[#E9DDCD] bg-white p-5 shadow-sm">

        <div className="relative">

          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A7A67]"
          />

          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search books on this page..."
            className="h-12 w-full rounded-2xl border border-[#E7DCCA] bg-[#FFFCF7] pl-12 pr-4 text-sm text-[#2B2018] outline-none transition focus:border-[#C9A24B] focus:ring-2 focus:ring-[#C9A24B]/20"
          />

        </div>

      </section>

      {/* ERROR */}

      {error && (
        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">

          <AlertCircle size={20} />

          <p className="text-sm">
            {error}
          </p>

        </div>
      )}

      {/* LOADING */}

      {loading && (
        <div className="flex min-h-[55vh] items-center justify-center">

          <div className="text-center">

            <LoaderCircle
              size={42}
              className="mx-auto animate-spin text-[#C9A24B]"
            />

            <p className="mt-4 text-sm text-[#786A58]">
              Loading your library...
            </p>

          </div>

        </div>
      )}

      {/* EMPTY */}

      {!loading && !error && filteredBooks.length === 0 && (
        <div className="rounded-[28px] border border-[#E9DDCD] bg-white px-6 py-16 text-center shadow-sm">

          <BookOpen
            size={48}
            className="mx-auto text-[#C9A24B]"
          />

          <h2 className="mt-4 font-display text-2xl text-[#2B2018]">
            No books found
          </h2>

          <p className="mt-2 text-sm text-[#8A7A67]">
            Search text change karke dobara try karo.
          </p>

        </div>
      )}

      {/* BOOK GRID */}

      {!loading && !error && filteredBooks.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredBooks.map((book) => {
            const progress = getProgress(book);

            return (
              <article
                key={book.id}
                className="group overflow-hidden rounded-[24px] border border-[#E8DDCC] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* COVER */}

                <div className="relative h-[270px] overflow-hidden bg-[#F4EBDD]">

                  {book.imageUrl ? (
                    <img
                      src={book.imageUrl}
                      alt={book.title || "Book cover"}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">

                      <BookOpen
                        size={58}
                        className="text-[#C9A24B]"
                      />

                    </div>
                  )}

                  <button
                    type="button"
                    title="Favourite"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#C9A24B] shadow-md backdrop-blur transition hover:scale-105"
                  >
                    <Heart
                      size={18}
                      fill={book.isFavourite ? "currentColor" : "none"}
                    />
                  </button>

                  <span className="absolute bottom-3 left-3 rounded-full bg-[#342419]/85 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                    {book.status || "Unknown"}
                  </span>

                </div>

                {/* INFORMATION */}

                <div className="p-4">

                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C9A24B]">
                    {book.category || "Uncategorized"}
                  </p>

                  <h2 className="mt-2 line-clamp-1 font-display text-[21px] text-[#2B2018]">
                    {book.title || "Untitled Book"}
                  </h2>

                  <p className="mt-1 line-clamp-1 text-sm text-[#8A7A67]">
                    {book.author || "Unknown Author"}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <div className="flex items-center gap-1 text-[#C9A24B]">

                      <Star
                        size={16}
                        fill="currentColor"
                      />

                      <span className="text-sm font-semibold">
                        {Number(book.rating || 0).toFixed(1)}
                      </span>

                    </div>

                    <p className="text-xs text-[#8A7A67]">
                      {book.pagesRead || 0}/{book.totalPages || 0} pages
                    </p>

                  </div>

                  <div className="mt-4">

                    <div className="mb-2 flex items-center justify-between">

                      <span className="text-xs text-[#8A7A67]">
                        Progress
                      </span>

                      <span className="text-xs font-semibold text-[#2B2018]">
                        {progress}%
                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[#EEE4D7]">

                      <div
                        className="h-full rounded-full bg-[#C9A24B] transition-all duration-500"
                        style={{
                          width: `${progress}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>
      )}

      {/* PAGINATION */}

      {!loading && !error && totalPages > 1 && (
        <section className="flex flex-col items-center justify-between gap-4 rounded-[24px] border border-[#E9DDCD] bg-white px-5 py-4 shadow-sm sm:flex-row">

          <p className="text-sm text-[#8A7A67]">
            Page{" "}
            <span className="font-semibold text-[#2B2018]">
              {currentPage + 1}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-[#2B2018]">
              {totalPages}
            </span>
          </p>

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 0}
              className="flex h-10 items-center gap-1 rounded-xl border border-[#E7DCCA] px-3 text-sm font-medium text-[#2B2018] transition hover:bg-[#FCF7EF] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={17} />
              Previous
            </button>

            {getVisiblePages().map((page) => (
              <button
                type="button"
                key={page}
                onClick={() => changePage(page)}
                className={`h-10 min-w-10 rounded-xl px-3 text-sm font-semibold transition ${
                  page === currentPage
                    ? "bg-[#C9A24B] text-white shadow-md"
                    : "border border-[#E7DCCA] bg-white text-[#2B2018] hover:bg-[#FCF7EF]"
                }`}
              >
                {page + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className="flex h-10 items-center gap-1 rounded-xl border border-[#E7DCCA] px-3 text-sm font-medium text-[#2B2018] transition hover:bg-[#FCF7EF] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight size={17} />
            </button>

          </div>

        </section>
      )}

    </div>
  );
}