import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/SuggestionForm.css";

const SuggestionForm = () => {
  const { id } = useParams();
  const [ledger, setLedger] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    const fetchLedger = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/ledgers/${id}`);
        const data = await response.json();
        setLedger(data);
      } catch (error) {
        console.error("Error fetching ledger data:", error);
      }
    };

    fetchLedger();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/api/send-suggestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactNumber: ledger.contactNumber,
            message: suggestion,
          }),
        }
      );
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error sending suggestion:", error);
    }
  };

  if (!ledger) {
    return <div>Loading...</div>;
  }

  return (
    <div className="suggestion-form-main">
      <div className="suggestion-form-p1">
        <h1>Ledger Details</h1>
        <table className="suggestion-details-table">
          <tbody>
            <tr>
              <th>Farmer Name</th>
              <td>{ledger.farmerName}</td>
            </tr>
            <tr>
              <th>Pincode</th>
              <td>{ledger.pincode}</td>
            </tr>
            <tr>
              <th>Aadhar Number</th>
              <td>{ledger.aadharNumber}</td>
            </tr>
            <tr>
              <th>Contact Number</th>
              <td>{ledger.contactNumber}</td>
            </tr>
            <tr>
              <th>Area Ploughed</th>
              <td>{ledger.areaPloughed}</td>
            </tr>
            <tr>
              <th>Season</th>
              <td>{ledger.season}</td>
            </tr>
            <tr>
              <th>Crop Grown</th>
              <td>{ledger.cropGrown}</td>
            </tr>
            <tr>
              <th>Seeds Used</th>
              <td>{ledger.seedsUsed}</td>
            </tr>
            <tr>
              <th>Seed Sown Date</th>
              <td>{new Date(ledger.seedSownDate).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>Transplanting</th>
              <td>{ledger.transplanting}</td>
            </tr>
            <tr>
              <th>Irrigation Method</th>
              <td>{ledger.irrigationMethod}</td>
            </tr>
            <tr>
              <th>Fertilizers Used</th>
              <td>{ledger.fertilizersUsed}</td>
            </tr>
            <tr>
              <th>Harvesting Date</th>
              <td>{new Date(ledger.harvestingDate).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>Yield</th>
              <td>{ledger.yield}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="suggestion-form-p2">
        <h1>Suggestion Form</h1>
        <form onSubmit={handleSubmit} id="suggestion-form">
          <div className="suggestion-form-group">
            <label htmlFor="suggestion">Message:</label>
            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SuggestionForm;
