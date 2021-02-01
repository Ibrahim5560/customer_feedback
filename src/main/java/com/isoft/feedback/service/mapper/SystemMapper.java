package com.isoft.feedback.service.mapper;


import com.isoft.feedback.domain.*;
import com.isoft.feedback.service.dto.SystemDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link System} and its DTO {@link SystemDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface SystemMapper extends EntityMapper<SystemDTO, System> {


    @Mapping(target = "systemMessages", ignore = true)
    @Mapping(target = "removeSystemMessages", ignore = true)
    @Mapping(target = "systemServices", ignore = true)
    @Mapping(target = "removeSystemServices", ignore = true)
    System toEntity(SystemDTO systemDTO);

    default System fromId(Long id) {
        if (id == null) {
            return null;
        }
        System system = new System();
        system.setId(id);
        return system;
    }
}
