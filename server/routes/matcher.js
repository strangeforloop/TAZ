// API route handlers for the Give & Take board.
// Reads and writes to server/data/skills.json and server/data/needs.json.
//
// GET  /api/skills  — return all offer entries
// POST /api/skills  — append a new offer entry
// GET  /api/needs   — return all need/request entries
// POST /api/needs   — append a new need/request entry

const express = require('express');
const router = express.Router();

module.exports = router;
