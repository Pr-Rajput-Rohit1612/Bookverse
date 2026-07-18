import api from "./axios";

// Book APIs
export const getBooks = () => api.get("/books");

export const getBookById = (id) => api.get(`/books/${id}`);

export const createBook = (data) => api.post("/books", data);

export const updateBook = (id, data) =>
  api.put(`/books/${id}`, data);

export const deleteBook = (id) =>
  api.delete(`/books/${id}`);

export const searchBooks = (query) =>
  api.get("/books/search", {
    params: { query },
  });

export const getBooksByCategory = (category) =>
  api.get("/books/category", {
    params: { category },
  });

export const getBooksByStatus = (status) =>
  api.get("/books/status", {
    params: { status },
  });

export const getFavouriteBooks = () =>
  api.get("/books/favourite");

export const getBookStats = () =>
  api.get("/books/stats");

export const getSortedBooks = (sortBy) =>
  api.get("/books/sort", {
    params: { sortBy },
  });

export const getPagedBooks = (page, size) =>
  api.get("/books/page", {
    params: { page, size },
  });

export const getBookProgress = (id) =>
  api.get(`/books/${id}/progress`);

// User APIs
export const createUser = (data) =>
  api.post("/users", data);

export const getUserProfile = () =>
  api.get("/users/profile");

export const updateUserProfile = (data) =>
  api.put("/users/profile", data);

// Dashboard API
export const getDashboardData = () =>
  api.get("/dashboard");