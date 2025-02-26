import { useState } from "react";
import "./DepositMoney.css";

export default function DepositMoney() {
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    let principal = parseFloat(amount);
    let rate = parseFloat(interestRate) / 100;
    let target = parseFloat(targetAmount);

    if (isNaN(principal) || isNaN(rate) || isNaN(target) || principal <= 0 || rate <= 0 || target <= principal) {
      alert("Vui lòng nhập đúng thông tin!");
      return;
    }

    let year = 0;
    let data = [];

    while (principal < target) {
      let interest = principal * rate;
      principal += interest;
      year++;
      data.push({ year, amount: principal.toFixed(2), rate: (rate * 100) + "%", total: principal.toFixed(2) });
    }

    setRows(data);
  };

  return (
    <div className="container">
      <h1 className="title">Bài tập 2 - Lãi Kép</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nhập số tiền"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Nhập Lãi suất (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Nhập số tiền mong đợi"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          className="input-field"
        />
        <button onClick={handleAddRow} className="btn">Tính toán</button>
      </div>
      <table className="result-table">
        <thead>
          <tr>
            <th>Năm</th>
            <th>Số tiền</th>
            <th>Lãi suất</th>
            <th>Tổng tiền 1 năm</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.amount}</td>
              <td>{row.rate}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
