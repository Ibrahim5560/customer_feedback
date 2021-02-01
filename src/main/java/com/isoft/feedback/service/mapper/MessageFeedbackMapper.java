package com.isoft.feedback.service.mapper;


import com.isoft.feedback.domain.*;
import com.isoft.feedback.service.dto.MessageFeedbackDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link MessageFeedback} and its DTO {@link MessageFeedbackDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface MessageFeedbackMapper extends EntityMapper<MessageFeedbackDTO, MessageFeedback> {



    default MessageFeedback fromId(Long id) {
        if (id == null) {
            return null;
        }
        MessageFeedback messageFeedback = new MessageFeedback();
        messageFeedback.setId(id);
        return messageFeedback;
    }
}
