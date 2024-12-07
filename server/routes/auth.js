const express = require("express");
const jwt = require("jsonwebtoken");
const Farmer = require("../models/Farmer.js"); // Import the Farmer model
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route for registering the Farmer
router.post("/farmers", async (req, res) => {
  try {
    const farmer = new Farmer(req.body);
    await farmer.save();

    // Read the HTML template
    fs.readFile('./templates/register_success.html', 'utf8', (err, html) => {
      if (err) {
        return console.log(err);
      }

      // Replace placeholders with actual data
      const htmlContent = html.replace('{{username}}', farmer.firstname);

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: farmer.email,
        subject: 'IFTR Registration Successful',
        html: htmlContent
      };

      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Email sent: ' + info.response);
      });
    });

    res.status(201).send(farmer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const farmer = await Farmer.findOne({ email, password });
    if (!farmer) {
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign({ id: farmer._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set token in cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.status(200).json({ user: farmer, success: "Login successful" });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

// Logout route
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.status(200).send("Logout successful");
});

// Route to check login status
router.get("/check-login", async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "No user logged in" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const farmer = await Farmer.findById(verified.id);
    if (!farmer) {
      return res.status(401).json({ msg: "User not found" });
    }
    res.status(200).json({ user: farmer, msg: "User Logged in" });
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
  }
});

module.exports = router;
