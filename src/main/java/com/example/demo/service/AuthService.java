package com.example.demo.service;

import com.example.demo.web.dto.LoginRequest;
import com.example.demo.web.dto.SignupRequest;

public interface AuthService {
    String signup(SignupRequest req);

    boolean login(LoginRequest req);
}
