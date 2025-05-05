import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const ERLive = () => {
  const [ratesData, setRatesData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const ratesPerPage = 10;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch("https://v6.exchangerate-api.com/v6/b41a52a4d20161b5087c5aca/latest/USD");
        const data = await res.json();
        if (data.result === "success") {
          setRatesData(data);
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg text-blue-600">Loading exchange rates...</div>;
  }

  if (!ratesData) {
    return <div className="text-center mt-10 text-red-600">Failed to load exchange rates.</div>;
  }

  const conversionRates = Object.entries(ratesData.conversion_rates);

  const filteredRates = conversionRates.filter(([currency]) =>
    currency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRates.length / ratesPerPage);
  const currentRates = filteredRates.slice(
    (currentPage - 1) * ratesPerPage,
    currentPage * ratesPerPage
  );

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next" && prev < totalPages) return prev + 1;
      if (direction === "prev" && prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
  <>
  <Navbar/>
    <div className="max-w-4xl mx-auto p-4 bg-white  rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
        Live Exchange Rates (Base: {ratesData.base_code})
      </h2>

      <input
        type="text"
        placeholder="Search currency code..."
        className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3">Currency</th>
            <th className="p-3">Rate</th>
          </tr>
        </thead>
        <tbody>
          {currentRates.map(([currency, rate]) => (
            <tr key={currency} className="border-b hover:bg-white-100 dark:hover:bg-gray-100">
              <td className="p-3 font-medium">{currency}</td>
              <td className="p-3">{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div></>
  );
};

export default ERLive;
