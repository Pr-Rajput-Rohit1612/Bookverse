package com.bookverse.demo;


import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

@Entity
@Table(name = "books")
@JsonPropertyOrder({"id", "title", "author", "category", "rating", "imageUrl", "description", "publishedYear", "totalPages", "pagesRead", "status", "isFavourite", "lastReadDate", "notes", "price","readingMode","pdfUrl"})
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NotBlank(message = "Title is required")
	private String title;
	
	@NotBlank(message = "Author is required")
	private String author;
	
	@NotBlank(message = "Category is required")
	private String category;
	
	@Min(value = 0, message = "Rating must be at least 0")
	@Max(value = 5, message = "Rating cannot exceed 5")
	private double rating;
	
	private String imageUrl;
	private String description;
	private int publishedYear;
	
	@Positive(message = "Total pages must be greater than 0")
	private int totalPages;
	
	private int pagesRead;
	private String status;
	private boolean isFavourite;
	private String lastReadDate;
	private String notes;
	
	@Positive(message = "Price must be greater than 0")
	private double price;
	
	private String readingMode;  // "physical" / "pdf" / "ebook"
	private String pdfUrl;       // PDF ka URL ya path (optional)
	
	
	//getter  and setters
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPublishedYear() {
		return publishedYear;
	}
	public void setPublishedYear(int publishedYear) {
		this.publishedYear = publishedYear;
	}
	public int getTotalPages() {
		return totalPages;
	}
	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}
	public int getPagesRead() {
		return pagesRead;
	}
	public void setPagesRead(int pagesRead) {
		this.pagesRead = pagesRead;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public boolean isFavourite() {
		return isFavourite;
	}
	public void setFavourite(boolean isFavourite) {
		this.isFavourite = isFavourite;
	}
	public String getLastReadDate() {
		return lastReadDate;
	}
	public void setLastReadDate(String lastReadDate) {
		this.lastReadDate = lastReadDate;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getReadingMode() {
		return readingMode;
	}
	public void setReadingMode(String readingMode) {
		this.readingMode=readingMode;
	}
	public String getPdfUrl() {
		return pdfUrl;
	}
	public void setPdfUrl(String pdfUrl) {
		this.pdfUrl=pdfUrl;
	}
	
}
