package com.isoft.feedback.repository;

import com.isoft.feedback.domain.MessageFeedback;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the MessageFeedback entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MessageFeedbackRepository extends JpaRepository<MessageFeedback, Long>, JpaSpecificationExecutor<MessageFeedback> {
}
