package com.example.backend.service;

import com.example.backend.model.Item;
import com.example.backend.repository.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    // save
    public void saveItem(Item item) {
        itemRepository.save(item);
    }

    // delete
    public void deleteItem(Item item) {
        itemRepository.delete(item);
    }

    // get one by id
    public Item getItemById(Long id) {
        return itemRepository.getById(id);
    }


}
