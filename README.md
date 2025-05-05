# 💰 Loan Calculator App

A responsive,  **Loan Calculator** built with **React.js**, **Tailwind CSS**, and **Material UI**, featuring real-time currency conversion, amortization schedule, and intuitive UI.

## 🚀 Demo

Live Site: [https://videodownloader-4cd47.web.app/]



## 🧰 Tech Stack

- ⚛️ **React.js** – UI development
- 🎨 **Tailwind CSS** – Styling and components
- 🌐 **ExchangeRate API** – Real-time currency conversion
- 📱 **Responsive Design** – Mobile-first layout

## 📦 Features

- ✅ EMI (Equated Monthly Installment) Calculator
- 📊 Amortization schedule with monthly breakdown
- 🌍 Live currency exchange for converted results
- 🔍 Searchable and paginated currency list
- 📱 Hamburger menu on mobile view


## 🧮 EMI Formula

EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]


Where:
- `P` = Loan amount
- `R` = Monthly interest rate
- `N` = Tenure in months

## 🔄 Currency API

- **Provider**: [ExchangeRate API](https://www.exchangerate-api.com/)
- **Endpoint**: `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD`

## 📂 Project Structure

src/
├── components/
│ └── Navbar.jsx
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── ERLive.jsx
│ └── NotFound.jsx
├── App.js
└── index.js


## 🧪 Run Locally

### 1. Clone the project

```bash
git clone https://github.com/yourusername/loan-calculator.git
```
```bash
cd loan-calculator
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```


🌍 Deployment
This app can be deployed to:
Firebase

📄 License
This project is licensed under the MIT License.

🙋‍♀️ Author
Muqaddas Malik
📧 Muqaddasmalik781@gmail.com


