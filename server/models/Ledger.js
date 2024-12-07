const mongoose = require("mongoose");

// Define the Ledger schema
const ledgerSchema = new mongoose.Schema({
  farmerName: {
    type: String,
    required: true
    },
    pincode: {
    type: String,
    required: true
    },
    aadharNumber: {
    type: String,
    required: true,
    },
    contactNumber: {
    type: String,
    required: true
    },
    areaPloughed: {
    type: Number,
    required: true
    },
    season: {
    type: String,
    required: true
    },
    cropGrown: {
    type: String,
    required: true
    },
    seedsUsed: {
    type: String,
    required: true
    },
    seedSownDate: {
    type: Date,
    required: true
    },
    transplanting: {
    type: String,
    required: true,
    },
    irrigationMethod: {
    type: String,
    required: true,
    },
    fertilizersUsed: {
    type: String,
    required: true,
    },
    harvestingDate: {
    type: Date,
    required: true
    },
    yield: {
    type: String,
    required: true
    }
});

// Export the Ledger model
module.exports = mongoose.model("Ledger", ledgerSchema);