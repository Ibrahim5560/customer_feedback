package com.isoft.feedback.repository;

import com.isoft.feedback.domain.System;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the System entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SystemRepository extends JpaRepository<System, Long>, JpaSpecificationExecutor<System> {
}
