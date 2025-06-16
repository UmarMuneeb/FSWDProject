import express from 'express';
import Listing from '../models/Listing.js';

const router = express.Router();
                    
router.post('/post', async (req, res) => {
  try {
    let listings = req.body;
    if (!Array.isArray(listings)) {
      listings = [listings];
    }

    const savedListings = await Listing.insertMany(listings);
    res.status(201).json(savedListings);
  } catch (err) {
    console.error('Error inserting listing(s):', err);
    res.status(500).json({ error: 'Server error' });
  }
});


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
// ✅ Correct route definition
router.get('/getbyId/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    console.error('Error fetching listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


// ✅ UPDATE a listing
router.put('/update', async (req, res) => {
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
router.delete('/del', async (req, res) => {
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
