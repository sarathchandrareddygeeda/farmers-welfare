import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LedgerTable.css";

const LedgerTable = () => {
  const [ledgerData, setLedgerData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/ledgers");
        console.log(response);
        const data = await response.json();
        console.log(data);
        setLedgerData(data);
      } catch (error) {
        console.error("Error fetching ledger data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSuggestionClick = (id) => {
    navigate(`/suggestion-form/${id}`);
  };

  return (
    <main className="ledger-main">
      <h1 id="ledger-table-heading">Farmer Soil Reports</h1>
      <div className="ledger-table-container">
        <table className="ledger-table">
          <thead>
            <tr>
              <th>Farmer Name</th>
              <th>Pincode</th>
              <th>Aadhar Number</th>
              <th>Contact Number</th>
              <th>Area Ploughed</th>
              <th>Season</th>
              <th>Crop Grown</th>
              <th>Seeds Used</th>
              <th>Seed Sown Date</th>
              <th>Transplanting</th>
              <th>Irrigation Method</th>
              <th>Fertilizers Used</th>
              <th>Harvesting Date</th>
              <th>Yield</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ledgerData.map((ledger) => (
              <tr key={ledger._id}>
                <td>{ledger.farmerName}</td>
                <td>{ledger.pincode}</td>
                <td>{ledger.aadharNumber}</td>
                <td>{ledger.contactNumber}</td>
                <td>{ledger.areaPloughed}</td>
                <td>{ledger.season}</td>
                <td>{ledger.cropGrown}</td>
                <td>{ledger.seedsUsed}</td>
                <td>{new Date(ledger.seedSownDate).toLocaleDateString()}</td>
                <td>{ledger.transplanting}</td>
                <td>{ledger.irrigationMethod}</td>
                <td>{ledger.fertilizersUsed}</td>
                <td>{new Date(ledger.harvestingDate).toLocaleDateString()}</td>
                <td>{ledger.yield}</td>
                <td>
                  <button onClick={() => handleSuggestionClick(ledger._id)} className="give-sug-btn">
                    Give Suggestions
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LedgerTable;
