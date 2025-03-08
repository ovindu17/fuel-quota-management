package com.example.fuel_b.service;

import com.example.fuel_b.entity.Employee;
import com.example.fuel_b.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmployeeRepository employeeRepository;



    public Employee registerEmployee(Employee employee) {
        employee.setPassword(passwordEncoder.encode(employee.getPassword()));
        return employeeRepository.save(employee);
    }

    public Employee validateEmployee(String username, String password) {
        Employee employee = employeeRepository.findByUsername(username);
        if (employee != null && passwordEncoder.matches(password, employee.getPassword())) {
            return employee;
        }
        return null;
    }
}