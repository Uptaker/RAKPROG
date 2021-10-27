package com.example.backend.controller;

import com.example.backend.model.Item;
import com.example.backend.service.ItemService;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @GetMapping("items/{id}")
    public Item getItemById(@PathVariable Long id) throws Exception {
        return itemService.getItemById(id);
    }

    @PostMapping("items")
    public void postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        /*
        In Postman:
        {
            "id": 1,
            "name": "aaa",
            "price": 10,
            "category": "ECONOMY"
        }
         */
    }

    @ApiOperation("API endpoint for editing an item. Always specify an ID")
    @PostMapping("items/edit/")
    public void editItem(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    @DeleteMapping("items/delete/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItemById(id);
        return itemService.getItems();
    }

}