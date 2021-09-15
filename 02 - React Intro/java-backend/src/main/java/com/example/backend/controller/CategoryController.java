package com.example.backend.controller;

import com.example.backend.model.Category;
import com.example.backend.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("categories")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String saveCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);

        /*
        Postman:
        {
            "id": 2,
            "name": "Test",
            "categoryType": "BASIC"
        }
         */

        return "saved: " + category.getName();
    }

    @GetMapping("categories/delete/{id}")
    public String deleteCategory(@PathVariable Long id) {
        String name = categoryService.getCategoryById(id).getName();
        categoryService.deleteCategory(categoryService.getCategoryById(id));
        return "deleted: " + name;
    }
}
