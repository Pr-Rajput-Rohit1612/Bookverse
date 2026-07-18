package com.bookverse.demo.dashboard;

public class DashboardData {

    private long totalBooks;
    private long readingBooks;
    private long completedBooks;
    private long wishlistBooks;
    private long favouriteBooks;

    private int readingGoal;

    public DashboardData() {
    }

    public DashboardData(long totalBooks,
                         long readingBooks,
                         long completedBooks,
                         long wishlistBooks,
                         long favouriteBooks,
                         int readingGoal) {

        this.totalBooks = totalBooks;
        this.readingBooks = readingBooks;
        this.completedBooks = completedBooks;
        this.wishlistBooks = wishlistBooks;
        this.favouriteBooks = favouriteBooks;
        this.readingGoal = readingGoal;
    }

    public long getTotalBooks() {
        return totalBooks;
    }

    public void setTotalBooks(long totalBooks) {
        this.totalBooks = totalBooks;
    }

    public long getReadingBooks() {
        return readingBooks;
    }

    public void setReadingBooks(long readingBooks) {
        this.readingBooks = readingBooks;
    }

    public long getCompletedBooks() {
        return completedBooks;
    }

    public void setCompletedBooks(long completedBooks) {
        this.completedBooks = completedBooks;
    }

    public long getWishlistBooks() {
        return wishlistBooks;
    }

    public void setWishlistBooks(long wishlistBooks) {
        this.wishlistBooks = wishlistBooks;
    }

    public long getFavouriteBooks() {
        return favouriteBooks;
    }

    public void setFavouriteBooks(long favouriteBooks) {
        this.favouriteBooks = favouriteBooks;
    }

    public int getReadingGoal() {
        return readingGoal;
    }

    public void setReadingGoal(int readingGoal) {
        this.readingGoal = readingGoal;
    }
}