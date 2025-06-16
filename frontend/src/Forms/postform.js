import axios, { Axios } from "axios";
import React, { useState } from "react";
const Postform=({FetchListings,SetShowForm})=>{
    // Form state
    const [tobaccoType, setTobaccoType] = useState("Naswar");
    const [photoUrls, setPhotoUrls] = useState("");
    const [quantityAvailable, setQuantityAvailable] = useState("");
    const [location, setLocation] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");

    const resetForm = () => {
        setTobaccoType("Naswar");
        setPhotoUrls("");
        setQuantityAvailable("");
        setLocation("");
        setPhoneNumber("");
        setFormError("");
        setFormSuccess("");
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError("");
        setFormSuccess("");
    
        if (
          !tobaccoType ||
          !photoUrls.trim() ||
          !quantityAvailable ||
          !location.trim() ||
          !phoneNumber.trim()
        ) {
          setFormError("Please fill out all fields.");
          return;
        }
    
        const photosArray = photoUrls
          .split(/\n|,/)
          .map((url) => url.trim())
          .filter((url) => url);
    
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setFormError("User not logged in.");
          return;
        }
    
        try {
          await axios.post("http://localhost:5000/api/listing/add", {
            userId,
            tobaccoType,
            photoUrls: photosArray,
            quantityAvailable: Number(quantityAvailable),
            location,
            phoneNumber,
          });
    
          setFormSuccess("Listing posted successfully!");
          resetForm();
          SetShowForm(false);
          FetchListings();
        } catch (err) {
          setFormError(
            err.response?.data?.message || "Failed to post listing. Try again."
          );
        }
      };
    
    return(
        <div className="bg-black flex bg-opacity-70 fixed mt-5 inset-0 justify-center items-center w-full h-lvh">
          
          {formError && <p className="text-red-600 mb-2">{formError}</p>}
          {formSuccess && <p className="text-green-600 mb-2">{formSuccess}</p>}

          <form className="flex flex-col gap-2 bg-gray-200 p-2 rounded" onSubmit={handleSubmit}>
            <label>
              Tobacco Type:
              <select
                value={tobaccoType}
                onChange={(e) => setTobaccoType(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="Naswar">Naswar</option>
                <option value="Cigarette">Cigarette</option>
              </select>
            </label>

            <label>
              Photo URLs (one per line or comma-separated):
              <textarea
                value={photoUrls}
                onChange={(e) => setPhotoUrls(e.target.value)}
                placeholder={`https://example.com/img1.jpg\nhttps://example.com/img2.jpg`}
                className="w-full border p-2 rounded h-12"
              />
            </label>

            <label>
              Quantity Available:
              <input
                type="number"
                value={quantityAvailable}
                onChange={(e) => setQuantityAvailable(e.target.value)}
                min="1"
                className="w-full border p-2 rounded"
              />
            </label>

            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </label>

            <label>
              Phone Number:
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </label>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
            >
              Submit Listing
            </button>
            <button type="button" onClick={() => SetShowForm(false)} className="text-gray-600">Cancel</button>
          </form>
        </div>
    )
}
export default Postform