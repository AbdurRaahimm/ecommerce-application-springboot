package com.bubt.brainstorming.eCommerce.service;

import com.bubt.brainstorming.eCommerce.entity.Product;

import java.util.List;

public interface ProductService {
    Product addProduct(Product product);
    List<Product> getAllProducts();

    List<Product> getProductsByCompanyId(Long id);
}
