package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.model.Role; // ✅ OR replace Role with User if you want

@Repository
public interface TestEntityRepository extends JpaRepository<Role, Long> {
}
