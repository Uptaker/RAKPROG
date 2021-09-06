package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

    @GetMapping("items")
    public String getItems() {
        return "works";
    }

    @PostMapping("items")
    public String postItem(@RequestBody String string) {
        return "posted: " + string;
    }
}