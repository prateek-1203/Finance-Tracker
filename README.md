# Finance Tracker

## Overview
Finance Tracker is a full-stack **MERN** application that allows users to manage their income and expenses.  
Users can add, edit, delete, and view transactions, and track their balance, total income, and total expenses.  
The app is **fully responsive** and works seamlessly on both desktop and mobile devices.

## Features
- [x] Add Transaction
- [x] Edit Transaction
- [x] Delete Transaction
- [x] Transaction List
- [x] Summary (Balance, Income, Expense) 
- [x] Responsive UI
- [x] Scrollable Table

## Tech Stack
- **Frontend:** React, React Router DOM, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas, Mongoose  


## API Endpoints

- **POST** `/api/transactions` → Create a new transaction  
- **GET** `/api/transactions` → Get all transactions  
- **GET** `/api/transactions/:id` → Get a transaction by ID  
- **PUT** `/api/transactions/:id` → Update a transaction by ID  
- **DELETE** `/api/transactions/:id` → Delete a transaction by ID  

## Setup Instructions

### Backend

1. Navigate to the backend folder:


```bash
cd backend
```
2. Install dependencies:


```bash
npm install
```
3. Create .env file:


```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
4. Run the server:
```bash
npm run dev
```

### Frontend

1. Navigate to the frontend folder:


```bash
cd frontend
```
2. Install dependencies:


```bash
npm install
```
2. Run development server:


```bash
npm run dev
```

## Project Structure

```bash
backend/
├─ controllers/transactionController.js
├─ models/Transaction.js
├─ routes/transactionRoutes.js
├─ server.js

frontend/
├─ src/components/TransactionForm.jsx
├─ src/components/TransactionList.jsx
├─ src/pages/Home.jsx
├─ src/pages/AddTransaction.jsx
├─ src/pages/EditTransaction.jsx
├─ src/pages/DeleteTransaction.jsx
├─ App.jsx
├─ main.jsx
```
## Notes

- Income amounts are positive; expenses are negative.  
- Frontend uses controlled forms for Add/Edit to ensure data integrity.  
- Fully responsive using Tailwind CSS.  

---

## Future Enhancements

- Add user authentication (multi-user support).  
- Add charts for monthly income/expense trends.  
- Filter transactions by category or date range.  
- Export transactions to CSV/PDF.  

---

## Author

**Prateek Pandey**  
MERN Stack Developer  