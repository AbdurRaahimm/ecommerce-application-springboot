package com.bubt.brainstorming.eCommerce.repository;

import com.bubt.brainstorming.eCommerce.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
}
