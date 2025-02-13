package com.foodplaza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodplaza.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


//    CartItem findByFoodIsContaining

}
