package com.ceg.mapper;

import com.ceg.pojo.PotentialUserEntity;
import org.springframework.stereotype.Component;

@Component
public interface PotentialUserEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PotentialUserEntity record);

    int insertSelective(PotentialUserEntity record);

    PotentialUserEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PotentialUserEntity record);

    int updateByPrimaryKey(PotentialUserEntity record);
}