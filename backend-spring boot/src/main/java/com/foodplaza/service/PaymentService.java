package com.foodplaza.service;

import com.foodplaza.model.Order;
import com.foodplaza.model.PaymentResponse;
import com.stripe.exception.StripeException;

public interface PaymentService {
	
	public PaymentResponse generatePaymentLink(Order order) throws StripeException;

}
