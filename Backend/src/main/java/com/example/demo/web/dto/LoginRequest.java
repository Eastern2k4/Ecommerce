package com.example.demo.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class LoginRequest {
    @NotBlank
    @Size(max = 64)
    private String username;
    @NotBlank
    @Size(min = 6)
    private String password;

    public LoginRequest() {
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setUsername(String v) {
        this.username = v;
    }

    public void setPassword(String v) {
        this.password = v;
    }
}
