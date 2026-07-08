package com.bookverse.demo;

public class BookStats {

    private long totalBooks;
    private long reading;
    private long completed;
    private long wishlist;
    private long favourites;

    public BookStats() {
    }

    public BookStats(long totalBooks, long reading, long completed, long wishlist, long favourites) {
        this.totalBooks = totalBooks;
        this.reading = reading;
        this.completed = completed;
        this.wishlist = wishlist;
        this.favourites = favourites;
    }

    public long getTotalBooks() {
        return totalBooks;
    }

    public void setTotalBooks(long totalBooks) {
        this.totalBooks = totalBooks;
    }

    public long getReading() {
        return reading;
    }

    public void setReading(long reading) {
        this.reading = reading;
    }

    public long getCompleted() {
        return completed;
    }

    public void setCompleted(long completed) {
        this.completed = completed;
    }

    public long getWishlist() {
        return wishlist;
    }

    public void setWishlist(long wishlist) {
        this.wishlist = wishlist;
    }

    public long getFavourites() {
        return favourites;
    }

    public void setFavourites(long favourites) {
        this.favourites = favourites;
    }
}
