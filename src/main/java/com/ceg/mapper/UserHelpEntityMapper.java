package com.ceg.mapper;

import com.ceg.pojo.UserHelpEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserHelpEntityMapper {
    Integer deleteByPrimaryKey(Long id);

    Integer insert(UserHelpEntity record);

    Integer insertSelective(UserHelpEntity record);

    UserHelpEntity selectByPrimaryKey(Long id);

    Integer updateByPrimaryKeySelective(UserHelpEntity record);

    Integer updateByPrimaryKey(UserHelpEntity record);

    /**
     * 分页查询
     * @return
     */
    List<UserHelpEntity> queryUserHelpListByPage();
}