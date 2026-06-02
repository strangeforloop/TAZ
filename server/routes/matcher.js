// API route handlers for the Give & Take board.
// Reads and writes to server/data/skills.json and server/data/needs.json.
//
// GET  /api/skills  — return all offer entries
// POST /api/skills  — append a new offer entry
// GET  /api/needs   — return all need/request entries
// POST /api/needs   — append a new need/request entry
//
// Expected shape for both skills and needs:
// {
//   id:          string (uuid)
//   type:        "labor" | "supplies"
//   category:    string — one of the options in client/src/categories.js
//   title:       string
//   description: string (optional)
//   postedBy:    string
//   urgent:      boolean (needs only)
//   postedAt:    ISO timestamp
// }

const express = require('express');
const router = express.Router();

module.exports = router;
