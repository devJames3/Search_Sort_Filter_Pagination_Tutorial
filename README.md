# IMDB Search

This project is an **IMDB Search** that fetches movie data from a database and displays it in a structured table format. It includes essential features like **search, filtering, sorting, and pagination**, providing an interactive experience for users.

## 🚀 Features

- **Fetch movie data from the database**
- **Display movies in a table format**
- **Search functionality** to find movies quickly
- **Filter movies** based on different criteria
- **Sort movies** by title, rating, release date, etc.
- **Pagination** for navigating large datasets smoothly

## 🛠️ Technologies Used

- **Frontend:** Vite + React
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Styling:** css modules

## 🖥️ Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/user-name/Search_Sort_Filter_Pagination_Tutorial.git
cd Search_Sort_Filter_Pagination_Tutorial
```

### 2️⃣ Install Dependencies

#### Frontend

```sh
cd client
npm install
```

#### Backend

```sh
cd ../api
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file inside the `api/` folder with the following:

```env
PORT=5000
DB_URL=your_database_url
```

Create a `.env` file inside the `client/` folder with the following:

```env
VITE_API_URL=your_backend_url(copy after starting the api server)
```

### 4️⃣ Start the Development Servers

#### Run the Backend

```sh
cd api
npm start
```

#### Run the Frontend

```sh
cd client
npm run dev
```

## 📜 License

This project is licensed under the **MIT License**.

---

🔥 Happy Coding! 🚀
