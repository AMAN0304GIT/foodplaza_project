package com.foodplaza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodplaza.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
