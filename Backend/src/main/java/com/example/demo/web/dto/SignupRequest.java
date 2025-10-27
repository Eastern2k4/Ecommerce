package com.example.demo.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class SignupRequest {
    @NotBlank
    @Size(max = 64)
    private String username;
    @NotBlank
    @Size(min = 6)
    private String password;
    @NotBlank
    @Size(max = 120)
    private String fullName;
    @NotBlank
    @Size(max = 32)
    private String phone;
    @Email
    @Size(max = 191)
    private String email;
    @NotBlank
    @Size(max = 255)
    private String addressText;
    private String roleName; // optional

    public SignupRequest() {
    }

    // getters
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getFullName() {
        return fullName;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getAddressText() {
        return addressText;
    }

    public String getRoleName() {
        return roleName;
    }

    // setters (needed by Jackson)
    public void setUsername(String v) {
        this.username = v;
    }

    public void setPassword(String v) {
        this.password = v;
    }

    public void setFullName(String v) {
        this.fullName = v;
    }

    public void setPhone(String v) {
        this.phone = v;
    }

    public void setEmail(String v) {
        this.email = v;
    }

    public void setAddressText(String v) {
        this.addressText = v;
    }

    public void setRoleName(String v) {
        this.roleName = v;
    }
}
