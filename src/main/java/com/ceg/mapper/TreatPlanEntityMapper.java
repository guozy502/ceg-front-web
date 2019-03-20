package com.ceg.mapper;

import com.ceg.dto.TreatPlanQuery;
import com.ceg.pojo.TreatPlanEntity;
import org.springframework.stereotype.Component;

@Component
public interface TreatPlanEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TreatPlanEntity record);

    int insertSelective(TreatPlanEntity record);

    TreatPlanEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(TreatPlanEntity record);

    int updateByPrimaryKey(TreatPlanEntity record);

    TreatPlanEntity selectTreatPlane(TreatPlanQuery treatPlanQuery);
}