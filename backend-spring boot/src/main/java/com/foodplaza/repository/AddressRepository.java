package com.foodplaza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodplaza.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
