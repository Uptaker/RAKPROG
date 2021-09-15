package com.example.backend.controller;

import com.example.backend.model.Item;
import com.example.backend.service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {

    ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        /*
        In Postman:
        {
            "id": 1,
            "name": "aaa",
            "price": 10,
            "category": "wee"
        }
         */
        return "posted: " + item.getName();
    }

    @GetMapping("items/delete/{id}")
    public String deleteItem(@PathVariable Long id) {
        String name = itemService.getItemById(id).getName();
        itemService.deleteItem(itemService.getItemById(id));
        return "deleted: " + name;
    }

}