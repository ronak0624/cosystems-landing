const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const express = require("express");

// API Routes
router.use("/api", apiRoutes);

// Thumbnail routes
router.use('/preview', express.static(path.join(__dirname, '../data/previews')))

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
