package com.bookverse.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/books")
public class BookController {

    @Autowired
    BookService service;

    @GetMapping
    public List<Book> getAll() {
        return service.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable int id) {
        return service.getBookById(id);
    }

    @PostMapping
    public Book add(@Valid @RequestBody Book book) {
        return service.addBook(book);
    }

    @PutMapping("/{id}")
    public Book update(@PathVariable int id,@Valid  @RequestBody Book book) {
        return service.updateBook(id, book);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.deleteBook(id);
    }

    @GetMapping("/search")
    public List<Book> search(@RequestParam String title) {
        return service.searchBooks(title);
    }

    @GetMapping("/category")
    public List<Book> category(@RequestParam String category) {
        return service.getBooksByCategory(category);
    }
    @GetMapping("/status")
    public List<Book> status(@RequestParam String status) {
        return service.getBooksByStatus(status);
    }
    @GetMapping("/favourites")
    public List<Book> favourites() {
        return service.getFavouriteBooks();
    }
    @GetMapping("/stats")
    public BookStats stats() {
        return service.getStats();
    }
    @GetMapping("/sort")
    public List<Book> sort(@RequestParam String by) {
        return service.sortBooks(by);
    }
    @GetMapping("/page")
    public Page<Book> getPage(
            @RequestParam int page,
            @RequestParam int size) {

        return service.getBooksByPage(page, size);

    }
    @GetMapping("/{id}/progress")
    public ReadingProgress progress(@PathVariable int id) {

        return service.getReadingProgress(id);

    }
    //tests
}