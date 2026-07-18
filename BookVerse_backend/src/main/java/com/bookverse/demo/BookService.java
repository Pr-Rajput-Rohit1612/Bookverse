package com.bookverse.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    BookRepository repo;

    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    public Book getBookById(int id) {
    	return repo.findById(id)
    	        .orElseThrow(() -> new BookNotFoundException("Book with ID " + id + " not found."));
    }

    public Book addBook(Book book) {
        return repo.save(book);
    }

    public Book updateBook(int id, Book book) {
        book.setId(id);
        return repo.save(book);
    }

    public void deleteBook(int id) {
        repo.deleteById(id);
    }

    public List<Book> searchBooks(String title) {
        return repo.findByTitleContainingIgnoreCase(title);
    }

    public List<Book> getBooksByCategory(String category) {
        return repo.findByCategoryIgnoreCase(category);
    }
    public List<Book> getBooksByStatus(String status) {
        return repo.findByStatusIgnoreCase(status);
    }
    public List<Book> getFavouriteBooks() {
        return repo.findByIsFavourite(true);
    }
    //stats add kiye
    public BookStats getStats() {

        long total = repo.count();

        long reading = repo.countByStatusIgnoreCase("reading");

        long completed = repo.countByStatusIgnoreCase("completed");

        long wishlist = repo.countByStatusIgnoreCase("wishlist");

        long favourites = repo.countByIsFavourite(true);

        return new BookStats(total, reading, completed, wishlist, favourites);
    }
    // book sort by price/title/rating
    public List<Book> sortBooks(String by) {

        switch (by.toLowerCase()) {

        case "title":
            return repo.findAllByOrderByTitleAsc();

        case "price":
            return repo.findAllByOrderByPriceAsc();

        case "rating":
            return repo.findAllByOrderByRatingDesc();

        default:
            return repo.findAll();
        }
    }
    public Page<Book> getBooksByPage(int page, int size) {

        return repo.findAll(PageRequest.of(page, size));

    }
    public ReadingProgress getReadingProgress(int id) {

    	Book book = repo.findById(id)
    	        .orElseThrow(() -> new BookNotFoundException("Book with ID " + id + " not found."));

        if (book == null) {
            return null;
        }

        double progress = 0;

        if (book.getTotalPages() > 0) {
            progress = ((double) book.getPagesRead() / book.getTotalPages()) * 100;
        }

        return new ReadingProgress(
                book.getId(),
                book.getTitle(),
                Math.round(progress * 100.0) / 100.0
        );
    }
    
}