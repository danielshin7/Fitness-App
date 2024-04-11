import React, { useState, useEffect } from 'react';

function MealDetails({ mealId }) {
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        // Fetch meal details from Spoonacular API
        const apiKey = 'e3250c5e65bb42d9abf2e7c59d07cf83';
        const apiUrl = `https://api.spoonacular.com/recipes/${mealId}/information?apiKey=${apiKey}`;

        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setMealDetails(data);
        } else {
          console.error('Failed to fetch meal details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching meal details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [mealId]); // Fetch details when mealId changes

  if (loading) {
    return <p>Loading meal details...</p>;
  }

  if (!mealDetails) {
    return <p>Failed to load meal details.</p>;
  }

  return (
    <div>
      <h2>{mealDetails.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {mealDetails.extendedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Nutrient Information:</h3>
      <ul>
        {Object.entries(mealDetails.nutrition.nutrients).map(([key, nutrient]) => (
          <li key={key}>{`${nutrient.title}: ${nutrient.amount} ${nutrient.unit}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealDetails;