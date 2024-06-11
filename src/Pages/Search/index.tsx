import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const MealSearch: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [meals, setMeals] = useState<any[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<any | null>(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [areas, setAreas] = useState<any[]>([]);
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');

  useEffect(() => {
    fetchCategories();
    fetchAreas();
    fetchIngredients();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchAreas = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const data = await response.json();
      setAreas(data.meals);
    } catch (error) {
      console.error('Error fetching areas:', error);
    }
  };

  const fetchIngredients = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const data = await response.json();
      setIngredients(data.meals);
    } catch (error) {
      console.error('Error fetching ingredients:', error);
    }
  };

  const getMealList = async (input: string) => {
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?`;
    if (selectedIngredient) {
      url += `i=${selectedIngredient}`;
    } else if (selectedCategory) {
      url += `c=${selectedCategory}`;
    } else if (selectedArea) {
      url += `a=${selectedArea}`;
    } else {
      url += `i=${input}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('Error fetching meal list:', error);
    }
  };

  const getMealRecipe = async (mealId: string) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      setSelectedMeal(data.meals[0]);
      setShowRecipe(true);
    } catch (error) {
      console.error('Error fetching meal recipe:', error);
    }
  };

  const handleSearchClick = () => {
    getMealList(searchInput);
  };

  const handleRecipeClick = (mealId: string) => {
    getMealRecipe(mealId);
  };

  const handleCloseRecipe = () => {
    setShowRecipe(false);
  };

  const addToCart = async (mealName: string) => {
    try {
      const userId = localStorage.getItem('usid');
      const data = {
        userId: userId,
        items: [
          { name: mealName, count: 1 }
        ],
        totalCost: "1000"
      };
  
      const response = await axios.post('http://localhost:8082/api/orders/placeOrder', data);
  
      if (response.status === 201) {
        alert('Item successfully added to cart!');
      } else {
        alert('Failed to add item to cart.');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Failed to add item to cart.');
    }
  };
  

  return (
    <div className="container">
      <div className="meal-wrapper">
        <div className="meal-search" style={{color:'white'}}>
          <h2 className="title" style={{color:'white',fontSize:50,fontFamily:'Times new roman'}}><b>Order now and let us bring the flavors to your doorstep!</b></h2>
          <blockquote style={{color:'white',fontSize:40,fontFamily:'Papyrus'}} className='title1'>
          
          </blockquote>

          <div className="meal-search-box">
            <input
              type="text"
              className="search-control"
              placeholder="Enter an ingredient"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="search-btn btn"
              onClick={handleSearchClick}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="filters">
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value=""><h1>Select Category</h1></option>
              {categories.map(category => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </select>

            <select onChange={(e) => setSelectedArea(e.target.value)}>
              <option value="">Select Area</option>
              {areas.map(area => (
                <option key={area.strArea} value={area.strArea}>
                  {area.strArea}
                </option>
              ))}
            </select>

            <select onChange={(e) => setSelectedIngredient(e.target.value)}>
              <option value="">Select Ingredient</option>
              {ingredients.map(ingredient => (
                <option key={ingredient.strIngredient} value={ingredient.strIngredient}>
                  {ingredient.strIngredient}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="meal-result">
          <h2 className="title2" style={{color:'white',fontSize:30}}>Your Search Results:</h2>
          <div id="meal">
            {meals.length > 0 ? (
              meals.map((meal) => (
                <div className="meal-item" key={meal.idMeal} data-id={meal.idMeal}>
                  <div className="meal-img">
                    <img src={meal.strMealThumb} alt="food" />
                  </div>
                  <div className="meal-name" style={{backgroundColor:'whitesmoke'}}>
                    <h3 style={{color:'black'}}>{meal.strMeal}</h3>
                    <button
                      className="recipe-btn"
                      onClick={() => handleRecipeClick(meal.idMeal)}
                    >
                      Get Recipe
                    </button>
                    <button
                      className="recipe-btn"
                      onClick={() => addToCart(meal.strMeal)}
                    >
                      Order
                    </button>
                  </div>
                  
                </div>
              ))
            ) : (
              <p style={{color:'white',fontSize:20}}>Sorry, we didn't find any meal!</p>
            )}
          </div>
        </div>

        {showRecipe && selectedMeal && (
          <div className="meal-details showRecipe">
            <button
              type="button"
              className="btn recipe-close-btn"
              onClick={handleCloseRecipe}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="meal-details-content">
              <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
              <p className="recipe-category">{selectedMeal.strCategory}</p>
              <div className="recipe-instruct">
                <h3>Instructions:</h3>
                <p>{selectedMeal.strInstructions}</p>
              </div>
              <div className="recipe-meal-img">
                <img src={selectedMeal.strMealThumb} alt="" />
              </div>
              <div className="recipe-link">
                <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      );
    };
    
    export default MealSearch;
    
