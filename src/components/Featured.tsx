"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
};

export default function Featured() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        const requests = Array.from({ length: 3 }, () =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
            (res) => res.json()
          )
        );

        const responses = await Promise.all(requests);
        const mealData = responses.map((res) => res.meals[0]);
        setMeals(mealData);
      } catch (err) {
        console.error("Error fetching random meals", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeals();
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Recipes
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our most popular and highly-rated recipes, handpicked by
            our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading
            ? [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-64 bg-orange-100 animate-pulse rounded-lg"
                />
              ))
            : meals.map((meal) => (
                <Link href={`/meal/${meal.idMeal}`} key={meal.idMeal}>
                  <div className="bg-white dark:bg-[#1c1c1c] shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {meal.strMeal}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Category: {meal.strCategory}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        <div className="text-center">
          <Link href="/recipes">
            <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
              View All Recipes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
