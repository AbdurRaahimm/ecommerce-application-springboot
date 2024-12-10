package com.bubt.brainstorming.eCommerce.service;

import com.bubt.brainstorming.eCommerce.entity.Company;
import com.bubt.brainstorming.eCommerce.entity.Product;

import java.util.List;

public interface CompanyService {
    Company addCompany(Company company);
    List<Company> getAllCompanies();
    Company getCompanyById(Long id);
}
