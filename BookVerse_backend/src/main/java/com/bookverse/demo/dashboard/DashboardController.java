package com.bookverse.demo.dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookverse.demo.BookService;
import com.bookverse.demo.BookStats;
import com.bookverse.demo.user.User;
import com.bookverse.demo.user.UserService;

@RestController
public class DashboardController {

    @Autowired
    private BookService bookService;

    @Autowired
    private UserService userService;

    @GetMapping("/dashboard")
    public DashboardData getDashboard() {

        BookStats stats = bookService.getStats();

        User user = userService.getProfile();

        DashboardData data = new DashboardData();

        data.setTotalBooks(stats.getTotalBooks());
        data.setReadingBooks(stats.getReading());
        data.setCompletedBooks(stats.getCompleted());
        data.setWishlistBooks(stats.getWishlist());
        data.setFavouriteBooks(stats.getFavourites());

        data.setReadingGoal(user.getReadingGoal());

        return data;
    }
}