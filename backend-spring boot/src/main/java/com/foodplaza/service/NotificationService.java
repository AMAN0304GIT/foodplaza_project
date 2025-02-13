package com.foodplaza.service;

import java.util.List;

import com.foodplaza.model.Notification;
import com.foodplaza.model.Order;
import com.foodplaza.model.Restaurant;
import com.foodplaza.model.User;

public interface NotificationService {
	
	public Notification sendOrderStatusNotification(Order order);
	public void sendRestaurantNotification(Restaurant restaurant, String message);
	public void sendPromotionalNotification(User user, String message);
	
	public List<Notification> findUsersNotification(Long userId);

}
