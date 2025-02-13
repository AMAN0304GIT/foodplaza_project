package com.foodplaza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodplaza.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {
	PasswordResetToken findByToken(String token);
}
