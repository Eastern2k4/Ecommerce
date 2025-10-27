package com.example.demo.service.impl;

import java.nio.charset.StandardCharsets;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.domain.model.Role;
import com.example.demo.domain.model.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.AuthService;
import com.example.demo.web.dto.LoginRequest;
import com.example.demo.web.dto.SignupRequest;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository users;
    private final RoleRepository roles;
    private final PasswordEncoder encoder;

    public AuthServiceImpl(UserRepository users, RoleRepository roles, PasswordEncoder encoder) {
        this.users = users;
        this.roles = roles;
        this.encoder = encoder;
    }

    @Override
    @Transactional
    public String signup(SignupRequest req) {
        if (users.existsByUsername(req.getUsername()))
            return "Username already taken";
        if (req.getEmail() != null && !req.getEmail().isBlank() && users.existsByEmail(req.getEmail()))
            return "Email already used";
        if (users.existsByPhone(req.getPhone()))
            return "Phone already used";

        String roleName = (req.getRoleName() == null || req.getRoleName().isBlank())
                ? "customer"
                : req.getRoleName().toLowerCase();

        Role role = roles.findByName(roleName)
                .orElseThrow(() -> new IllegalArgumentException("Role not found: " + roleName));

        String hashStr = encoder.encode(req.getPassword()); // BCrypt string
        byte[] hashBytes = hashStr.getBytes(StandardCharsets.UTF_8); // store as VARBINARY

        User u = new User();
        u.setRole(role);
        u.setUsername(req.getUsername());
        u.setPasswordHash(hashBytes);
        u.setFullName(req.getFullName());
        u.setPhone(req.getPhone());
        u.setEmail(req.getEmail());
        u.setAddressText(req.getAddressText());
        u.setActive(true);

        users.save(u);
        return "Signup ok";
    }

    @Override
    @Transactional(readOnly = true)
    public boolean login(LoginRequest req) {
        return users.findByUsername(req.getUsername())
                .map(u -> {
                    String stored = new String(u.getPasswordHash(), StandardCharsets.UTF_8);
                    return encoder.matches(req.getPassword(), stored);
                })
                .orElse(false);
    }
}
