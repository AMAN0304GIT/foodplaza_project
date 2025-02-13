package com.foodplaza.service;

import java.util.List;

import com.foodplaza.Exception.CartException;
import com.foodplaza.Exception.OrderException;
import com.foodplaza.Exception.RestaurantException;
import com.foodplaza.Exception.UserException;
import com.foodplaza.model.Order;
import com.foodplaza.model.PaymentResponse;
import com.foodplaza.model.User;
import com.foodplaza.request.CreateOrderRequest;
import com.stripe.exception.StripeException;

public interface OrderService {
	
	 public PaymentResponse createOrder(CreateOrderRequest order, User user) throws UserException, RestaurantException, CartException, StripeException;
	 
	 public Order updateOrder(Long orderId, String orderStatus) throws OrderException;
	 
	 public void cancelOrder(Long orderId) throws OrderException;
	 
	 public List<Order> getUserOrders(Long userId) throws OrderException;
	 
	 public List<Order> getOrdersOfRestaurant(Long restaurantId,String orderStatus) throws OrderException, RestaurantException;
	 

}
