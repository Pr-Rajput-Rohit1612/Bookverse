package com.bookverse.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class BookServiceTest {

    @Mock
    BookRepository repo;

    @InjectMocks
    BookService service;

    @Test
    void testGetAllBooks() {

        Book b1 = new Book();
        b1.setTitle("Harry Potter");

        Book b2 = new Book();
        b2.setTitle("Atomic Habits");

        when(repo.findAll()).thenReturn(List.of(b1, b2));

        List<Book> books = service.getAllBooks();

        assertEquals(2, books.size());

    }
    @Test
    void testAddBook() {

        Book book = new Book();
        book.setTitle("Clean Code");

        when(repo.save(any(Book.class))).thenReturn(book);

        Book saved = service.addBook(book);

        assertNotNull(saved);
        assertEquals("Clean Code", saved.getTitle());

    }
    @Test
    void testGetBookById() {

        Book book = new Book();
        book.setId(1);
        book.setTitle("Atomic Habits");

        when(repo.findById(1)).thenReturn(Optional.of(book));

        Book result = service.getBookById(1);

        assertEquals(1, result.getId());
        assertEquals("Atomic Habits", result.getTitle());

    }
    @Test
    void testDeleteBook() {

        doNothing().when(repo).deleteById(1);

        service.deleteBook(1);

        verify(repo).deleteById(1);

    }
    @Test
    void testSearchBooks() {

        Book book = new Book();
        book.setTitle("Harry Potter");

        when(repo.findByTitleContainingIgnoreCase("Harry"))
                .thenReturn(List.of(book));

        List<Book> books = service.searchBooks("Harry");

        assertEquals(1, books.size());
        assertEquals("Harry Potter", books.get(0).getTitle());

    }
    @Test
    void testFilterCategory() {

        Book book = new Book();
        book.setCategory("Novel");

        when(repo.findByCategoryIgnoreCase("Novel"))
                .thenReturn(List.of(book));

        List<Book> books = service.getBooksByCategory("Novel");

        assertEquals(1, books.size());

    }
    @Test
    void testSortBooks() {

        Book book = new Book();
        book.setTitle("Atomic Habits");

        when(repo.findAllByOrderByTitleAsc())
                .thenReturn(List.of(book));

        List<Book> books = service.sortBooks("title");

        assertEquals(1, books.size());

    }
    @Test
    void testGetFavouriteBooks() {

        Book book = new Book();
        book.setFavourite(true);

        when(repo.findByIsFavourite(true))
                .thenReturn(List.of(book));

        List<Book> books = service.getFavouriteBooks();

        assertEquals(1, books.size());

    }
    @Test
    void testGetBooksByStatus() {

        Book book = new Book();
        book.setStatus("reading");

        when(repo.findByStatusIgnoreCase("reading"))
                .thenReturn(List.of(book));

        List<Book> books = service.getBooksByStatus("reading");

        assertEquals(1, books.size());

    }
    @Test
    void testGetStats() {

        when(repo.count()).thenReturn(10L);
        when(repo.countByStatusIgnoreCase("reading")).thenReturn(4L);
        when(repo.countByStatusIgnoreCase("completed")).thenReturn(3L);
        when(repo.countByStatusIgnoreCase("wishlist")).thenReturn(3L);
        when(repo.countByIsFavourite(true)).thenReturn(2L);

        BookStats stats = service.getStats();

        assertEquals(10, stats.getTotalBooks());
        assertEquals(4, stats.getReading());

    }

}