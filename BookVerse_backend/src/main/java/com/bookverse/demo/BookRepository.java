package com.bookverse.demo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

    List<Book> findByTitleContainingIgnoreCase(String title);
    List<Book> findByCategoryIgnoreCase(String category);
    List<Book> findByStatusIgnoreCase(String status);
    List<Book> findByIsFavourite(boolean isFavourite);
    long countByStatusIgnoreCase(String status);
    long countByIsFavourite(boolean isFavourite);
    List<Book> findAllByOrderByTitleAsc();
    List<Book> findAllByOrderByPriceAsc();
    List<Book> findAllByOrderByRatingDesc();

}