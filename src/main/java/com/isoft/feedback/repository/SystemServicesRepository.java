package com.isoft.feedback.repository;

import com.isoft.feedback.domain.SystemServices;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the SystemServices entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SystemServicesRepository extends JpaRepository<SystemServices, Long>, JpaSpecificationExecutor<SystemServices> {
}
