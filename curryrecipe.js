// Curry Recipe
var recipe = [
    "1 tablespoon oil",
    "1 onion, chopped",
    "2 cloves garlic, minced",
    "1 tablespoon curry powder",
    "1 teaspoon turmeric",
    "1 teaspoon cumin",
    "1 teaspoon coriander",
    "1 cup coconut milk",
    "1 cup vegetable broth",
    "2 carrots, sliced",
    "1 potato, diced",
    "1 cup cauliflower florets",
    "1 cup peas",
    "Salt to taste",
    "Fresh cilantro, chopped for garnish"
  ];
  
  // Function to display the curry recipe
  function displayRecipe(servings) {
    console.log(`Curry Recipe for ${servings} serving(s):`);
    console.log("---------------------");
    for (var i = 0; i < recipe.length; i++) {
      // Adjust quantity based on servings
      var ingredient = recipe[i];
      if (ingredient.match(/^\d/)) {
        var quantity = parseInt(ingredient.match(/^\d+/)[0]);
        ingredient = ingredient.replace(/^\d+/, Math.round(quantity * servings));
      }
      console.log(ingredient);
    }
    console.log("---------------------");
  }
  
  // Display the curry recipe for 4 servings
  displayRecipe(4);
  