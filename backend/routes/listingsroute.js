import express from 'express';
import Listing from '../models/Listing.js';

const router = express.Router();

// ✅ CREATE a new listing
router.post('/', async (req, res) => {
  try {
    const listing = new Listing(req.body);
    const saved = await listing.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error creating listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ READ all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    console.error('Error fetching listings:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ READ a single listing by ID
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.json(listing);
  } catch (err) {
    console.error('Error fetching listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ UPDATE a listing
router.put('/:id', async (req, res) => {
  try {
    const updated = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Error updating listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ DELETE a listing
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Listing.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.json({ message: 'Listing deleted' });
  } catch (err) {
    console.error('Error deleting listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
