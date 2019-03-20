package com.ceg.mapper;

import com.ceg.dto.AreaDto;
import com.ceg.pojo.AreaEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface AreaEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(AreaEntity record);

    int insertSelective(AreaEntity record);

    AreaEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(AreaEntity record);

    int updateByPrimaryKey(AreaEntity record);

    List<AreaEntity> selectAreaList(AreaDto areaDto);
}