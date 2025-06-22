import { Calendar, ChefHat } from "lucide-react";
import React from "react";


export default function Banner() {
  return (
    <div className="bg-[#fff5ef] p-10">
      <h1 className="text-center text-5xl py-8 font-bold">
        Plan Your Meals, Share Your Recipes
      </h1>
      <p className="opacity-65 text-lg text-center my-4">
        Discover thousands of recipes, plan your weekly meals, and share <br />
        your culinary creations with our community of food lovers.
      </p>
      <div className="w-fit mx-auto my-10 flex gap-2">
        <button className="flex gap-2 items-center text-white p-2 px-4 rounded-lg bg-[#ea580c] font-semibold">
          <ChefHat />
          <span>Browse Recipes</span>
        </button>
        <button className="flex gap-2 items-center p-2 px-4 rounded-lg bg-white border border-[#ea580c] text-[#ea580c] ">
          <Calendar />
          <span>Start Meal Planning</span>
        </button>
      </div>
    </div>
  );
}
