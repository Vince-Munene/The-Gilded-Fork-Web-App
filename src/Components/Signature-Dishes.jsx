import { useState } from "react";
import { dishesData } from "../dishes-data.js";

export default function SigDishes() {
  const [visibleDishes, setVisibleDishes] = useState(3);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredDish, setHoveredDish] = useState(null);

  const filteredDishes = dishesData.filter(dish => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Veg") return dish.category === "Veg";
    if (activeFilter === "Non-Veg") return dish.category === "Non-Veg";
    if (activeFilter === "Chef Specials") return dish.isChefSpecial;
    return true;
  });

  const displayedDishes = filteredDishes.slice(0, visibleDishes);

  const handleLoadMore = () => {
    setVisibleDishes(prev => Math.min(prev + 3, filteredDishes.length));
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleDishes(3); 
  };

  return (
    <div id="signature-dishes">
      <div className="text-center p-6 bg-paleyellow">
        <h4 className="font-jaro text-4xl dark:text-white">Signature Dishes</h4>
      </div>

      <div className="flex justify-center gap-4 p-4 bg-paleyellow">
        {["All", "Veg", "Non-Veg", "Chef Specials"].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-6 py-2 rounded-lg font-jaro text-lg transition-all duration-300 ${
              activeFilter === filter
                ? "bg-white text-black shadow-lg"
                : "bg-transparent text-black hover:bg-white/80"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap flex-row justify-center px-14 py-8 gap-8 bg-paleyellow">
        {displayedDishes.map((dish) => (
          <div
            key={dish.id}
            className="text-center max-w-72 bg-white p-6 rounded-2xl relative group cursor-pointer"
            onMouseEnter={() => setHoveredDish(dish.id)}
            onMouseLeave={() => setHoveredDish(null)}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="rounded-2xl w-60 h-44 object-cover"
            />
            <h4 className="font-jaro text-2xl mt-4">{dish.name}</h4>
            <p className="font-inder text-sm text-gray-600 mt-2">{dish.price}</p>
            
            {hoveredDish === dish.id && (
              <div className="absolute inset-0 bg-black/80 rounded-2xl flex flex-col justify-center items-center p-4 text-white z-10">
                <h5 className="font-jaro text-xl mb-2">{dish.name}</h5>
                <p className="font-inder text-sm text-center mb-3">{dish.description}</p>
                <p className="font-jaro text-2xl text-yellow-300">{dish.price}</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded">
                    {dish.category}
                  </span>
                  {dish.isChefSpecial && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                      Chef Special
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {visibleDishes < filteredDishes.length && (
        <div className="text-center pb-8 bg-paleyellow">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-white text-black font-jaro text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Load More Dishes
          </button>
        </div>
      )}

      {filteredDishes.length === 0 && (
        <div className="text-center py-8 bg-paleyellow">
          <p className="font-jaro text-xl text-gray-600">
            No dishes found for the selected filter.
          </p>
        </div>
      )}
    </div>
  );
}