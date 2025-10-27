package com.example.demo.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.TestEntityRepository;

@RestController
public class TestController {

    private final TestEntityRepository repo;

    public TestController(TestEntityRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/test-db")
    public Object testDB() {
        return repo.findAll(); // ✅ If DB is connected, this will return JSON
    }
}
