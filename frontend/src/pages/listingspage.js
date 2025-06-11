import Navbar from "../Sections/Navbar"
import { tobaccoListings } from "../Data/agriItems"
import React from "react"
const listingspage = () => {
  return (
    <>
        <Navbar/>
        <div class="flex">
            <aside class="w-64 bg-white p-4 border-r">
            <h2 class="text-lg font-semibold mb-4">Filters</h2>

            <div class="mb-4">
                <h3 class="font-medium">Category</h3>
                <label class="block"><input type="radio" name="category" /> Seeds</label>
                <label class="block"><input type="radio" name="category" /> Fertilizers</label>
                <label class="block"><input type="radio" name="category" /> Tools</label>
            </div>

            <div class="mb-4">
                <h3 class="font-medium">Price Range</h3>
                <input type="range" class="w-full" />
            </div>

            <div class="mb-4">
                <h3 class="font-medium">Brand</h3>
                <label class="block"><input type="radio" name="brand" /> GreenGrow</label>
                <label class="block"><input type="radio" name="brand" /> FarmCo</label>
                <label class="block"><input type="radio" name="brand" /> EcoFert</label>
            </div>

            <div class="mb-4">
                <h3 class="font-medium">Organic</h3>
                <label class="block"><input type="radio" name="organic" /> Organic</label>
                <label class="block"><input type="radio" name="organic" /> Non-organic</label>
            </div>

            <div>
                <h3 class="font-medium">Rating</h3>
                <p>⭐️⭐️⭐️⭐️⭐️</p>
            </div>
            </aside>
            <section className="flex flex-row flex-wrap justify-center items-start gap-6 p-6 bg-green-500 flex-1">
                 {tobaccoListings.map((item) => (
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
                    <p className="text-sm text-gray-500">📍 {item.location}</p>
                    <p className="text-green-700 font-bold">Qty: {item.quantityAvailable}</p>
                    <p className="text-sm text-gray-700">📞 {item.phoneNumber}</p>
                    <p className="text-xs text-gray-400 mt-1">
                        Listed: {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                    </div>
            ))}
            </section>
            
        </div>
    </>
  )
}

export default listingspage