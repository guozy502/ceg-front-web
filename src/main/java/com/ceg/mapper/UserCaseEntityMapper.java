package com.ceg.mapper;

import com.ceg.pojo.UserCaseEntity;

public interface UserCaseEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserCaseEntity record);

    int insertSelective(UserCaseEntity record);

    UserCaseEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserCaseEntity record);

    int updateByPrimaryKey(UserCaseEntity record);
}