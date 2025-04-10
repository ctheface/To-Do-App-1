# Todo App (Fun Test!) 🎉

A simple Todo app I built for fun to learn React, Express, and PostgreSQL! 🚀

## What It Does
- Add tasks
- Check tasks off
- Edit tasks
- Delete tasks

## Tech Stack
- **React** (with Vite) - Frontend
- **Express.js** - Backend
- **PostgreSQL** - Database
- **Material UI** - Components

## How to Run
1. Clone the repo:
   ```bash
   git clone https://github.com/ctheface/To-Do-App-1.git
   ```

2. Set up the database:
   - Install PostgreSQL (e.g., via [postgres.org](https://www.postgresql.org/download/)).
   - Create a database named `todo_db`:
     ```sql
     CREATE DATABASE todo_db;
     ```
   - Connect to `todo_db` and create the `todos` table:
     ```sql
     CREATE TABLE todos (
         id SERIAL PRIMARY KEY,
         task VARCHAR(255) NOT NULL,
         completed BOOLEAN DEFAULT FALSE
     );
     ```
   - Create a `.env` file in the `backend` folder with your PostgreSQL credentials:
     ```env
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_HOST=localhost
     DB_PORT=5432
     DB_DATABASE=todo_db
     ```
     *(Replace `your_username` and `your_password` with your PostgreSQL details.)*

3. Set up the backend:
   ```bash
   cd backend
   npm install
   node server.js
   ```

4. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Why I Made It

Just a playful learning project! 😄

## License

[MIT License](https://choosealicense.com/licenses/mit/) - Use it however you like!