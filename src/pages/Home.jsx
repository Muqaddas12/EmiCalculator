import React, { useState } from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [currency, setCurrency] = useState("USD");
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);

  const calculateEMI = () => {
   if(loanAmount&&interestRate&&term){
    const monthlyRate = interestRate / 12 / 100;
    const months = term * 12;
    const emiCalc =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    setEmi(emiCalc.toFixed(2));

    let balance = loanAmount;
    const tempSchedule = [];
    for (let i = 0; i < months; i++) {
      const interest = balance * monthlyRate;
      const principal = emiCalc - interest;
      balance -= principal;
      tempSchedule.push({
        month: i + 1,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance.toFixed(2),
      });
    }
    setSchedule(tempSchedule);
   }
  };

  const reset = () => {
    setLoanAmount('');
    setInterestRate('');
    setTerm('');
    setCurrency("USD");
    setEmi(null);
    setSchedule([]);
  };

  return (
  
  <>
  <Navbar/>
    <div className="min-h-screen p-6 bg-gray-100">

<div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
  <h1 className="text-3xl font-bold mb-6 text-center">Loan Calculator Dashboard</h1>
  <form onSubmit={(e) => { e.preventDefault();  }}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <input
      type="number"
      className="border border-gray-300 rounded-md p-2"
      placeholder="Loan Amount"
      value={loanAmount}
      onChange={(e) => setLoanAmount(+e.target.value)}
      required={true}
    />
    <input
      type="number"
      className="border border-gray-300 rounded-md p-2"
      placeholder="Interest Rate (%)"
      value={interestRate}
      onChange={(e) => setInterestRate(+e.target.value)}
      required={true}
    />
    <input
      type="number"
      className="border border-gray-300 rounded-md p-2"
      placeholder="Term (Years)"
      value={term}
      onChange={(e) => setTerm(+e.target.value)}
      required={true}
    />
  </div>
  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
  <button
      onClick={calculateEMI}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
    >
      Calculate EMI
    </button>
  </div>
</form>
  {emi && (
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
{/* EMI Display */}
<h2 className="text-lg font-medium">
Monthly EMI: {emi} {currency}
</h2>

{/* Currency Select + Reset */}
<div className="flex flex-col md:flex-row items-center gap-4">
<select
  className="border border-gray-300 rounded-md p-2"
  value={currency}
  onChange={(e) => setCurrency(e.target.value)}
>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
  <option value="INR">INR</option>
</select>
<button
  onClick={reset}
  className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
>
  Reset
</button>
</div>
</div>
)}

  {schedule.length > 0 && (
    <div className="overflow-y-scroll max-h-[400px] bg-white shadow rounded-md">
      <table className="w-full table-auto text-sm">
        <thead className="bg-gray-200 text-left sticky top-0">
          <tr>
            <th className="p-3">Month</th>
            <th className="p-3">Principal</th>
            <th className="p-3">Interest</th>
            <th className="p-3">Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row) => (
            <tr key={row.month} className="border-t">
              <td className="p-3">{row.month}</td>
              <td className="p-3">{row.principal} {currency}</td>
              <td className="p-3">{row.interest} {currency}</td>
              <td className="p-3">{row.balance} {currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
</div>
</>
  );
};

export default Home;
