import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  tobaccoType: {
    type: String,
    enum: ["Naswar", "Cigarette"],
    required: true,
  },
  photoUrls: {
    type: [String],
    required: true,
  },
  quantityAvailable: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Listing = mongoose.model("Listing", ListingSchema);

export default Listing;
