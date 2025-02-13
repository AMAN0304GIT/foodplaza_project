package com.foodplaza.service;

import java.util.List;

import com.foodplaza.Exception.ReviewException;
import com.foodplaza.model.Review;
import com.foodplaza.model.User;
import com.foodplaza.request.ReviewRequest;

public interface ReviewSerive {
	
    public Review submitReview(ReviewRequest review,User user);
    public void deleteReview(Long reviewId) throws ReviewException;
    public double calculateAverageRating(List<Review> reviews);
}
