import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
   <>
   <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-4">About This Loan Calculator App</h1>
        <p className="text-lg mb-4">
          This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. 
          It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, 
          and see real-time currency conversions of their EMI using live exchange rates.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Instructions for Candidates</h2>
        <ul className="list-inside list-disc mb-4 text-lg">
          <li>Push the entire project to a public GitHub repository.</li>
          <li>Make sure to commit regularly with clear messages after completing each feature.</li>
          <li>Use the provided EMI formula to perform calculations.</li>
          <li>Use Context API for global state management (e.g. theme, currency).</li>
          <li>Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates).</li>
          <li>Integrate the ExchangeRate API for live currency conversion.</li>
          <li>Ensure the app is fully responsive on all screen sizes.</li>
          <li>Implement both light and dark modes using Material UI's theming system.</li>
          <li>Add a 404 Not Found page for unmatched routes.</li>
          <li>Handle runtime errors gracefully by showing an Error Page.</li>
          <li>Once deployed, add the live deployment link in the About section of your GitHub repo.</li>
          <li>Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages).</li>
          <li>Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-inside list-disc mb-4 text-lg">
          <li>Loan EMI calculation using standard financial formulas.</li>
          <li>Dynamic amortization schedule table with monthly breakdown.</li>
          <li>Real-time currency conversion of EMI using a live exchange rate API.</li>
          <li>Paginated exchange rate table for 160+ currencies.</li>
          <li>Dark/Light mode toggle for a customizable experience.</li>
          <li>Collapsible header navigation on mobile screens.</li>
          <li>Fully responsive UI built with Material UI.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <p className="text-lg mb-4">
          <strong>React</strong> (Hooks, Routing, Context API)<br />
          <strong>Material UI</strong> for styling and responsive components<br />
          <strong>Axios</strong> for API calls<br />
          <strong>Exchange Rate API</strong> for real-time currency conversion
        </p>

        <h2 className="text-2xl font-semibold mb-4">EMI Formula Used</h2>
        <p className="text-lg mb-4">
          The EMI (Equated Monthly Installment) is calculated using the standard formula:<br />
          <code className="block p-2 bg-gray-100 rounded-lg">
            EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> – 1]
          </code>
          Where:<br />
          P = Principal loan amount<br />
          R = Monthly interest rate (annual rate / 12 / 100)<br />
          N = Loan duration in months
        </p>

        <h2 className="text-2xl font-semibold mb-4">Currency Conversion API</h2>
        <p className="text-lg mb-4">
          This app integrates with the free tier of the ExchangeRate-API to fetch live exchange rates.<br />
          API Endpoint Example: <code className="text-blue-600">https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD</code>
        </p>

        <h2 className="text-2xl font-semibold mb-4">Purpose of This App</h2>
        <p className="text-lg mb-4">
          This project is designed to assess a candidate's React development skills, including:
        </p>
        <ul className="list-inside list-disc mb-4 text-lg">
          <li>React fundamentals (state, props, hooks).</li>
          <li>Component structure and code reusability.</li>
          <li>Third-party API integration and live data rendering.</li>
          <li>Working with tables, lists, and pagination.</li>
          <li>Theme customization (dark/light mode toggle).</li>
          <li>Error handling and graceful UI fallbacks.</li>
          <li>Responsive design and collapsible mobile header navigation.</li>
        </ul>

        <p className="text-lg">
          For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
