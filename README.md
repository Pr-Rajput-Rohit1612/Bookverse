<div align="center">

# 📚 BookVerse - Backend

### A Modern Digital Library REST API built with Spring Boot

Manage books, track reading progress, organize favorites, and power a modern digital library application through secure and scalable REST APIs.

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate)
![JPA](https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven)
![Render](https://img.shields.io/badge/Render-Live-46E3B7?style=for-the-badge)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)

</div>

---

# 📖 Overview

BookVerse Backend is a RESTful API developed using **Spring Boot** that powers the BookVerse application.

It allows users to manage their personal digital library by providing APIs for creating, updating, deleting, searching, and organizing books while also tracking reading progress and statistics.

---

# ✨ Features

- 📚 Book Management (CRUD)
- 🔍 Search Books
- 📂 Category Filtering
- ⭐ Favorite Books
- 📖 Reading Status Management
- 📊 Reading Statistics
- 💰 Price Tracking
- ⭐ Ratings
- 📄 RESTful APIs
- 🗄 MySQL Database
- 🌐 Cloud Deployment (Render)

---

# 🛠 Tech Stack

| Technology | Used |
|------------|------|
| Java | 17 |
| Spring Boot | ✔ |
| Spring MVC | ✔ |
| Spring Data JPA | ✔ |
| Hibernate | ✔ |
| Maven | ✔ |
| MySQL (Aiven) | ✔ |
| REST API | ✔ |
| Render | ✔ |
| Git | ✔ |

---

# 📂 Project Structure

```text
BookVerse
│
├── src
│   ├── main
│   │   ├── java
│   │   ├── resources
│   │   └── ...
│   │
│   └── test
│
├── Dockerfile
├── pom.xml
└── README.md
```

---

# 🚀 Live API

### Backend URL

https://bookverse-k8pa.onrender.com

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /books | Get All Books |
| GET | /books/{id} | Get Book By Id |
| POST | /books | Add Book |
| PUT | /books/{id} | Update Book |
| DELETE | /books/{id} | Delete Book |
| GET | /books/search | Search Books |
| GET | /books/category/{category} | Books By Category |
| GET | /books/status/{status} | Books By Status |
| GET | /books/favourite | Favourite Books |
| GET | /books/stats | Dashboard Statistics |

---

# 🗄 Database

Current database contains information such as:

- Book Title
- Author
- Category
- Description
- Cover Image
- Reading Status
- Reading Mode
- Favourite
- Rating
- Price
- Total Pages
- Pages Read

---

# ⚙ Run Locally

Clone the repository

```bash
git clone https://github.com/Pr-Rajput-Rohit1612/Bookverse.git
```

Move into project

```bash
cd Bookverse
```

Run

```bash
./mvnw spring-boot:run
```

---

# 🔮 Future Improvements

- JWT Authentication
- User Login & Registration
- Reading Goals
- Reading History
- Book Reviews
- Recommendation System
- Admin Dashboard
- Cloud Image Upload

---

# 👨‍💻 Developer

**Rohit Rajput**

GitHub

https://github.com/Pr-Rajput-Rohit1612

---

<div align="center">

Made with ❤️ using Spring Boot

⭐ If you like this project, consider giving it a star.

</div>
