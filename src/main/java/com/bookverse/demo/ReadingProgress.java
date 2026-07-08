package com.bookverse.demo;

public class ReadingProgress {

    private int bookId;
    private String title;
    private double progress;

    public ReadingProgress(int bookId, String title, double progress) {
        this.bookId = bookId;
        this.title = title;
        this.progress = progress;
    }

    public int getBookId() {
        return bookId;
    }

    public String getTitle() {
        return title;
    }

    public double getProgress() {
        return progress;
    }
}