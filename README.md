# Expense Management System

A full-stack web application designed to help users track and manage their expenses efficiently. Built with Node.js, Express, and MongoDB on the backend, and a client-side interface for user interactions.

## 🚀 Features

- **User Authentication**: Secure login and registration system.
- **Expense Tracking**: Add, edit, and delete expenses.
- **Categorization**: Organize expenses by categories.
- **Dashboard**: Visual representation of expenses over time.
- **Responsive Design**: Accessible on both desktop and mobile devices.

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Environment Variables**: Managed using `.env` file

## 📁 Project Structure

<pre> Expense_Management_System/ 
      ├── client/ # Frontend files 
      ├── config/ # Configuration files (e.g., database connection)
      ├── controllers/ # Route handlers 
      ├── models/ # Mongoose models 
      ├── routes/ # API routes 
      ├── .env # Environment variables 
      ├── package.json # Project metadata and dependencies 
      └── server.js # Entry point of the application </pre>


## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Siddhant-78/Expense_Management_System.git
   cd Expense_Management_System

2. **Install backend dependencies**:
   npm install
   
3. Set up environment variables:

Create a .env file in the root directory and add the following:
PORT=5000
MONGODB_URI=your_mongodb_connection_string

Start the server:
npm start

Access the application:

Open your browser and navigate to http://localhost:5000.

🧪 API Endpoints
POST /api/auth/register - Register a new user

POST /api/auth/login - Login user

GET /api/expenses - Retrieve all expenses

POST /api/expenses - Add a new expense

PUT /api/expenses/:id - Update an existing expense

DELETE /api/expenses/:id - Delete an expense

📌 Future Enhancements
Budget Planning: Set monthly budgets and track adherence.

Expense Reports: Generate downloadable reports in PDF/CSV formats.

Notifications: Alert users for upcoming bills or budget limits.

Multi-Currency Support: Handle expenses in different currencies.

🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📄 License
This project is licensed under the MIT License.

Developed by Siddhant-78
