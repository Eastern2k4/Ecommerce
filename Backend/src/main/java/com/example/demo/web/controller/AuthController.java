package com.example.demo.web.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.AuthService;
import com.example.demo.web.dto.AuthResponse;
import com.example.demo.web.dto.LoginRequest;
import com.example.demo.web.dto.SignupRequest;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(@Valid @RequestBody SignupRequest req) {
        String result = authService.signup(req);
        boolean ok = "Signup ok".equals(result);
        return ResponseEntity.status(ok ? 201 : 400).body(new AuthResponse(ok, result));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest req) {
        boolean ok = authService.login(req);
        return ResponseEntity.status(ok ? 200 : 401)
                .body(new AuthResponse(ok, ok ? "Login ok" : "Invalid credentials"));
    }
}
