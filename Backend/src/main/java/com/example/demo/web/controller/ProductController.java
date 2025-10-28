package com.example.demo.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Nếu bạn đã có Product entity/repository thì dùng chúng;
// còn chưa có, cứ để demo list như dưới để chạy ngay.
@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173") // cho phép frontend gọi
public class ProductController {

    @GetMapping
    public List<Map<String, Object>> list() {
        // MOCK dữ liệu để chạy demo ngay
        return List.of(
            Map.of("id", 1, "name", "Laptop Pro 14", "price", 29990000, "imageUrl", "https://picsum.photos/seed/p1/600/400"),
            Map.of("id", 2, "name", "Smartphone X", "price", 15990000, "imageUrl", "https://picsum.photos/seed/p2/600/400"),
            Map.of("id", 3, "name", "Headphone Z", "price", 2590000, "imageUrl", "https://picsum.photos/seed/p3/600/400")
        );
    }

    @GetMapping("/{id}")
    public Map<String, Object> detail(@PathVariable Integer id) {
        return Map.of("id", id, "name", "Product #" + id, "price", 12345678, "imageUrl", "https://picsum.photos/seed/p" + id + "/600/400");
    }
}
