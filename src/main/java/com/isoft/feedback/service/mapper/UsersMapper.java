package com.isoft.feedback.service.mapper;


import com.isoft.feedback.domain.*;
import com.isoft.feedback.service.dto.UsersDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Users} and its DTO {@link UsersDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface UsersMapper extends EntityMapper<UsersDTO, Users> {


    @Mapping(target = "usersMessages", ignore = true)
    @Mapping(target = "removeUsersMessages", ignore = true)
    Users toEntity(UsersDTO usersDTO);

    default Users fromId(Long id) {
        if (id == null) {
            return null;
        }
        Users users = new Users();
        users.setId(id);
        return users;
    }
}
