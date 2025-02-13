package com.foodplaza.service;

import java.util.List;

import com.foodplaza.Exception.FoodException;
import com.foodplaza.Exception.RestaurantException;
import com.foodplaza.model.Category;
import com.foodplaza.model.Food;
import com.foodplaza.model.Restaurant;
import com.foodplaza.request.CreateFoodRequest;

public interface FoodService {

	public Food createFood(CreateFoodRequest req,Category category,
						   Restaurant restaurant) throws FoodException, RestaurantException;

	void deleteFood(Long foodId) throws FoodException;
	
	public List<Food> getRestaurantsFood(Long restaurantId,
			boolean isVegetarian, boolean isNonveg, boolean isSeasonal,String foodCategory) throws FoodException;
	
	public List<Food> searchFood(String keyword);
	
	public Food findFoodById(Long foodId) throws FoodException;

	public Food updateAvailibilityStatus(Long foodId) throws FoodException;
}
