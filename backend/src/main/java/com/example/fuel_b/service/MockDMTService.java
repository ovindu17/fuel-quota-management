// src/main/java/com/example/fuelmanagement/service/MockDMTService.java
package com.example.fuel_b.service;

import org.springframework.stereotype.Service;

@Service
public class MockDMTService {
    public boolean validateVehicle(String registrationNumber) {
        // Mock validation logic
        return true;
    }
}