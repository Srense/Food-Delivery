function openPopup(recipe) {
    const popup = document.getElementById('recipe-popup');
    const title = document.getElementById('popup-title');
    const recipeText = document.getElementById('popup-recipe');
  
    if (recipe === 'burger') {
      title.textContent = 'Burger Recipe';
      recipeText.textContent = 'To make a delicious burger, you will need ground beef, buns, lettuce, tomatoes, and your favorite sauce. Grill the beef patties and assemble the ingredients into a sandwich.';
    } else if (recipe === 'cookies') {
      title.textContent = 'Cookies Recipe';
      recipeText.textContent = 'Mix flour, sugar, butter, eggs, and baking soda. Roll into balls and bake at 350°F for 12 minutes.';
    } else if (recipe === 'meat-lababdar') {
      title.textContent = 'Meat-Lababdar Recipe';
      recipeText.textContent = 'Marinate meat in yogurt and spices. Cook in a pan and add a rich tomato gravy with spices. Serve with naan or rice.';
    } else if (recipe === 'haka-noodles') {
      title.textContent = 'Haka-Noodles Recipe';
      recipeText.textContent = 'Stir-fry vegetables and cooked noodles with soy sauce, garlic, and chili. Add seasoning to taste for a flavorful dish.';
    }
  
    popup.style.display = 'flex';
  }
  
  // Close popup when clicking outside of the popup content area
  window.onclick = function(event) {
    const popup = document.getElementById('recipe-popup');
    const popupContent = document.querySelector('.popup-content');
  
    // Check if the click was outside the popup content
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  }
  
  function closePopup() {
    const popup = document.getElementById('recipe-popup');
    popup.style.display = 'none';
  }
  