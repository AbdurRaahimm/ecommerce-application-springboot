package com.bubt.brainstorming.eCommerce.Controller;

import com.bubt.brainstorming.eCommerce.adaptor.CompanyAdapter;
import com.bubt.brainstorming.eCommerce.adaptor.ProductAdapter;
import com.bubt.brainstorming.eCommerce.entity.Company;
import com.bubt.brainstorming.eCommerce.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CompanyProductController {
    @Autowired
    private CompanyAdapter companyAdapter;

    @Autowired
    private ProductAdapter productAdapter;

    @PostMapping("/companies")
    public Company addCompany(@RequestBody Company company) {
        return companyAdapter.addCompany(company);
    }

    @PostMapping("/companies/{companyId}/products")
    public Product addProduct(@PathVariable Long companyId, @RequestBody Product product) {
        Company company = companyAdapter.getCompanyById(companyId);
        product.setCompany(company);
        return productAdapter.addProduct(product);
    }
    @GetMapping("/companies")
    public List<Company> getAllCompanies() {
        return companyAdapter.getAllCompanies();
    }

    @GetMapping("/companies/{companyId}/products")
    public List<Product> getProductsByCompany(@PathVariable Long companyId) {
        return productAdapter.getProductsByCompanyId(companyId);
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {return productAdapter.getAllProducts();}

}
