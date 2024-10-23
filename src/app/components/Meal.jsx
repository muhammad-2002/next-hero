"use client";

import Image from "next/image";
import { useState } from "react";

const Meal = () => {
  const [search, setSearch] = useState("a");
  const [meal, setMeal] = useState([]);
  const [error, setError] = useState("");
  console.log(error);
  console.log(meal);
  const getMeal = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeal(data.meals);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Not Found Meal !");
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mb-10">
      <input
        className="px-4 py-3 outline-none border-2 border-solid border-purple-600"
        onChange={handleSearch}
        type="text"
      ></input>
      <button
        className="px-4 py-3 outline-none  border-2 border-solid bg-yellow-600 text-white"
        onClick={() => getMeal()}
      >
        Get Meal
      </button>
      <div>
        <div className="grid grid-cols-4 gap-5">
          {meal?.length > 0 &&
            !error &&
            meal?.map((m) => (
              <div
                key={m.idMeal}
                className="border-2 border-solid border-red-500"
              >
                <h1>{m.strMeal}</h1>
                <Image
                  src={m.strMealThumb}
                  alt="ddd"
                  width={300}
                  height={300}
                ></Image>
              </div>
            ))}
          {!meal && <div>data Not Found</div>}
        </div>
      </div>
    </div>
  );
};

export default Meal;
