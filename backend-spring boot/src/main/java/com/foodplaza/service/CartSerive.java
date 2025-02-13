package com.foodplaza.service;

import com.foodplaza.Exception.CartException;
import com.foodplaza.Exception.CartItemException;
import com.foodplaza.Exception.FoodException;
import com.foodplaza.Exception.UserException;
import com.foodplaza.model.Cart;
import com.foodplaza.model.CartItem;
import com.foodplaza.model.Food;
import com.foodplaza.model.User;
import com.foodplaza.request.AddCartItemRequest;
import com.foodplaza.request.UpdateCartItemRequest;

public interface CartSerive {

	public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws UserException, FoodException, CartException, CartItemException;

	public CartItem updateCartItemQuantity(Long cartItemId,int quantity) throws CartItemException;

	public Cart removeItemFromCart(Long cartItemId, String jwt) throws UserException, CartException, CartItemException;

	public Long calculateCartTotals(Cart cart) throws UserException;
	
	public Cart findCartById(Long id) throws CartException;
	
	public Cart findCartByUserId(Long userId) throws CartException, UserException;
	
	public Cart clearCart(Long userId) throws CartException, UserException;
	

	

}
