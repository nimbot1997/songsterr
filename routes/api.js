const express = require('express');
const router = express.Router();
const Song = require('../models/Song');
const path = require('path');

// GET /api/songs - List all songs
router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/songs/:id - Get specific song metadata
router.get('/songs/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ error: 'Song not found' });
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/songs/:id/tab - Serve Guitar Pro file
router.get('/songs/:id/tab', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ error: 'Song not found' });
    const filePath = path.join(__dirname, '..', song.tabFilePath);
    res.sendFile(filePath);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
