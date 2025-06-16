import Navbar from "../Sections/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Postform from "../Forms/postform";
import ManageListingsForm from "../Forms/Managementform";


const Listingspage = () => {

  
  const [tobaccoListings, setTobaccoListings] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [showManagementForm, setShowManagementForm] = useState(false);
  const [selectedTobaccoType, setSelectedTobaccoType] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  
  
  const handleTobaccoTypeChange = (e) => {
    setSelectedTobaccoType(e.target.value);
  };
  
  const handleQuantityChange = (e) => {
    setSelectedQuantity(e.target.value);
  };
  
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  
  const filteredListings = tobaccoListings.filter((item) => {
    const matchTobaccoType =
      selectedTobaccoType === "" || item.tobaccoType === selectedTobaccoType;
    const matchQuantity =
      selectedQuantity === "" || item.quantityAvailable >= parseInt(selectedQuantity);
    const matchLocation =
      selectedLocation === "" || item.location.toLowerCase().includes(selectedLocation.toLowerCase());

      return matchTobaccoType && matchQuantity && matchLocation;
  });
  
  // Fetch listings on mount
  const fetchListings = () => {
    axios
      .get("http://localhost:5000/api/listing/get")
      .then((res) => setTobaccoListings(res.data))
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    fetchListings();
  }, []);

  

  return (
    <>
      <Navbar isListingsPage={true} />
      <div className="p-4 bg-gray-100 flex justify-center gap-11">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowPostForm(!showPostForm)}
        >
          Post Listing
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowManagementForm(!showManagementForm)}
        >
          {showManagementForm ? "Close Manage Listing" : "Manage Listing"}
        </button>
      </div>
      {showManagementForm && <ManageListingsForm/>}
      {showPostForm && (<Postform SetShowForm={setShowPostForm} FetchListings={fetchListings}/>)}

      <div className="flex">
        <aside className="w-64 bg-white p-4 border-r">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Tobacco Type Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Tobacco Type</h3>
            <label className="block">
              <input
                type="radio"
                name="tobaccoType"
                value=""
                checked={selectedTobaccoType === ""}
                onChange={handleTobaccoTypeChange}
              />
              All
            </label>
            <label className="block">
              <input
                type="radio"
                name="tobaccoType"
                value="Naswar"
                checked={selectedTobaccoType === "Naswar"}
                onChange={handleTobaccoTypeChange}
              />
              Naswar
            </label>
            <label className="block">
              <input
                type="radio"
                name="tobaccoType"
                value="Cigarette"
                checked={selectedTobaccoType === "Cigarette"}
                onChange={handleTobaccoTypeChange}
              />
              Cigarette
            </label>
          </div>

          {/* Quantity Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Minimum Quantity Available</h3>
            <input
              type="number"
              className="w-full border rounded px-2 py-1 mt-1"
              placeholder="Enter minimum quantity"
              value={selectedQuantity}
              onChange={handleQuantityChange}
            />
          </div>

          {/* Location Filter */}
          <div className="mb-4">
            <h3 className="font-medium">Location</h3>
            <input
              type="text"
              className="w-full border rounded px-2 py-1 mt-1"
              placeholder="Search location"
              value={selectedLocation}
              onChange={handleLocationChange}
            />
          </div>
        </aside>

        {/* Listings */}
        <section className="flex flex-row flex-wrap justify-center items-start gap-6 p-6 bg-green-500 flex-1">
          {filteredListings.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded shadow p-4 h-72 w-64 flex flex-col"
            >
              <img
                src={item.photoUrls[0]}
                alt={item.tobaccoType}
                className="h-32 w-full object-cover mb-2 rounded"
              />
              <h3 className="font-semibold text-lg">{item.tobaccoType}</h3>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-green-700 font-bold">
                Qty: {item.quantityAvailable}
              </p>
              <p className="text-sm text-gray-700">{item.phoneNumber}</p>
              <p className="text-xs text-gray-400 mt-1">
                Listed: {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Listingspage;
