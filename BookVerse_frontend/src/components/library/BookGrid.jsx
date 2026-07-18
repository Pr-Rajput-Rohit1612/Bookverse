import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    rating: "4.9",
    pages: 320,
    progress: 82,
    cover: "https://covers.openlibrary.org/b/id/10523338-L.jpg",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    rating: "4.8",
    pages: 280,
    progress: 46,
    cover: "https://covers.openlibrary.org/b/id/8370221-L.jpg",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Héctor García",
    category: "Lifestyle",
    rating: "4.7",
    pages: 220,
    progress: 100,
    cover: "https://covers.openlibrary.org/b/id/9259256-L.jpg",
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    rating: "4.9",
    pages: 256,
    progress: 64,
    cover: "https://covers.openlibrary.org/b/id/12617727-L.jpg",
  },
  {
    id: 5,
    title: "Can't Hurt Me",
    author: "David Goggins",
    category: "Biography",
    rating: "4.8",
    pages: 364,
    progress: 18,
    cover: "https://covers.openlibrary.org/b/id/10594765-L.jpg",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Finance",
    rating: "4.6",
    pages: 336,
    progress: 72,
    cover: "https://covers.openlibrary.org/b/id/240726-L.jpg",
  },
];

export default function BookGrid() {
  return (
    <section className="grid grid-cols-4 gap-6">

      {books.map((book) => (

        <BookCard
          key={book.id}
          book={book}
        />

      ))}

    </section>
  );
}