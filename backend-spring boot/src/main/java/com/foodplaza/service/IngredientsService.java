package com.foodplaza.service;

import java.util.List;

import com.foodplaza.Exception.FoodException;
import com.foodplaza.Exception.RestaurantException;
import com.foodplaza.model.Food;
import com.foodplaza.model.IngredientCategory;
import com.foodplaza.model.IngredientsItem;
import com.foodplaza.repository.IngredientsCategoryRepository;

public interface IngredientsService {
	
	public IngredientCategory createIngredientsCategory(
			String name,Long restaurantId) throws RestaurantException;

	public IngredientCategory findIngredientsCategoryById(Long id) throws Exception;

	public List<IngredientCategory> findIngredientsCategoryByRestaurantId(Long id) throws Exception;
	
	public List<IngredientsItem> findRestaurantsIngredients(
			Long restaurantId);

	
	public IngredientsItem createIngredientsItem(Long restaurantId, 
			String ingredientName,Long ingredientCategoryId) throws Exception;

	public IngredientsItem updateStoke(Long id) throws Exception;
	
}
