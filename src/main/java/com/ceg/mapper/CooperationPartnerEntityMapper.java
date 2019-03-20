package com.ceg.mapper;

import com.ceg.pojo.CooperationPartnerEntity;
import org.springframework.stereotype.Component;

@Component
public interface CooperationPartnerEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(CooperationPartnerEntity record);

    int insertSelective(CooperationPartnerEntity record);

    CooperationPartnerEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CooperationPartnerEntity record);

    int updateByPrimaryKey(CooperationPartnerEntity record);
}