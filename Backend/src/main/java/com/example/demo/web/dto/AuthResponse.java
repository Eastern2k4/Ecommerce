package com.example.demo.web.dto;

public class AuthResponse {
    private boolean success;
    private String message;

    public AuthResponse() {
    }

    public AuthResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public void setSuccess(boolean v) {
        this.success = v;
    }

    public void setMessage(String v) {
        this.message = v;
    }
}
