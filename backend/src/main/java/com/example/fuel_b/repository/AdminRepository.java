// src/main/java/com/example/fuel_b/repository/AdminRepository.java
package com.example.fuel_b.repository;

import com.example.fuel_b.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findByUsername(String username);
}