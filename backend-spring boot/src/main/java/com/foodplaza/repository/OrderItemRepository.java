package com.foodplaza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodplaza.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
