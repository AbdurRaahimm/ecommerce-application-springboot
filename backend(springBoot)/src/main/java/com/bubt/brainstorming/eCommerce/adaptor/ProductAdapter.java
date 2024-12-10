package com.bubt.brainstorming.eCommerce.adaptor;

import com.bubt.brainstorming.eCommerce.entity.Product;
import com.bubt.brainstorming.eCommerce.repository.ProductRepository;
import com.bubt.brainstorming.eCommerce.service.ProductService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductAdapter implements ProductService {
    private final ProductRepository productRepository;

    public ProductAdapter(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getProductsByCompanyId(Long id) {
        return productRepository.findByCompanyId(id);
    }

}
