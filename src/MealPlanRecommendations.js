import React, { useState, useEffect } from 'react';
import './MealPlanRecommendations.css';

function MealPlanRecommendations() {
  const [mealPlans, setMealPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealPlanRecommendations = async () => {
      try {
        // Fetch meal plans from Spoonacular API
        const apiKey = 'e3250c5e65bb42d9abf2e7c59d07cf83';
        const apiUrl = 'https://api.spoonacular.com/mealplanner/generate';

        const preferences = {
          targetCalories: 2000, // Example target daily calorie intake
          diet: 'vegetarian', // Example dietary restriction
          exclude: 'dairy', // Example ingredient to exclude
          timeFrame: 'day', // Example time frame for the meal plan
          // Additional parameters as needed
        };

        const spoonacularUrl = new URL(apiUrl);
        spoonacularUrl.searchParams.append('apiKey', apiKey);
        Object.entries(preferences).forEach(([key, value]) => {
          spoonacularUrl.searchParams.append(key, value);
        });

        const spoonacularResponse = await fetch(spoonacularUrl);
        const spoonacularData = await spoonacularResponse.json();
        const recommendedMeals = spoonacularData.meals;

        // Fetch additional information for each meal
        const mealPlansWithInfo = await Promise.all(recommendedMeals.map(async (meal) => {
          try {
            // Call Google Custom Search API to get meal image
            const googleApiKey = 'YOUR_GOOGLE_API_KEY';
            const googleCseId = 'YOUR_GOOGLE_CUSTOM_SEARCH_ENGINE_ID';
            const googleApiUrl = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${googleCseId}&searchType=image&num=1&q=${encodeURIComponent(meal.title)}`;
            const response = await fetch(googleApiUrl);
            const data = await response.json();
            const imageUrl = data.items[0].link;

            // Call ChatGPT API to get recipe, ingredient, and macro information
            const chatGptResponse = await fetchChatGpt(meal.title); // Function to fetch data from ChatGPT API
            const info = chatGptResponse ? chatGptResponse : 'Information not available';

            return { ...meal, imageUrl, info };
          } catch (error) {
            console.error('Error fetching data:', error);
            return { ...meal, imageUrl: '', info: 'Information not available' };
          }
        }));

        setMealPlans(mealPlansWithInfo);
      } catch (error) {
        console.error('Error fetching meal plan recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMealPlanRecommendations();
  }, []); // Empty dependency array ensures the effect runs only once

  // Function to fetch data from ChatGPT API
  const fetchChatGpt = async (mealName) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization headers if required
      },
      body: JSON.stringify({ mealName }),
    });
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <h2>Meal Plan Recommendations</h2>
      {loading ? (
        <p>Loading meal plan recommendations...</p>
      ) : (
        <div className="meal-container">
          {mealPlans.map((meal, index) => (
            <div key={index} className="meal-item">
              <h3>{meal.title}</h3>
              <img src={meal.imageUrl} alt={meal.title} />
              <p>{meal.info}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MealPlanRecommendations;