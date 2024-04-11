import React from 'react';
import MealPlanRecommendations from './MealPlanRecommendations';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      <MealPlanRecommendations />
    </div>
    </BrowserRouter>

  );
}

export default App;