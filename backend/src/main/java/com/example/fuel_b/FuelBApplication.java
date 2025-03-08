// src/main/java/com/example/fuel_b/FuelBApplication.java
package com.example.fuel_b;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class FuelBApplication {
    public static void main(String[] args) {
        SpringApplication.run(FuelBApplication.class, args);
    }
}