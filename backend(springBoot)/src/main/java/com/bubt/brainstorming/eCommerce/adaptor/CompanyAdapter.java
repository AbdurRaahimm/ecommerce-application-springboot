package com.bubt.brainstorming.eCommerce.adaptor;

import org.springframework.stereotype.Component;
import com.bubt.brainstorming.eCommerce.entity.Company;
import com.bubt.brainstorming.eCommerce.repository.CompanyRepository;
import com.bubt.brainstorming.eCommerce.service.CompanyService;

import java.util.List;
import java.util.Optional;

@Component
public class CompanyAdapter implements CompanyService {
    private final CompanyRepository companyRepository;

    public CompanyAdapter(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public Company addCompany(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company getCompanyById(Long id) {
        Optional<Company> companyOptional = companyRepository.findById(id);
        return companyOptional.orElse(null);
    }
}
