package com.ceg.service.impl;

import com.ceg.dto.TreatPlanQuery;
import com.ceg.mapper.TreatPlanEntityMapper;
import com.ceg.pojo.TreatPlanEntity;
import com.ceg.service.TreatPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/22.
 */
@Service
public class TreatPlanServiceImpl implements TreatPlanService {
    @Autowired
    private TreatPlanEntityMapper treatPlanEntityMapper;
    @Override
    public TreatPlanEntity findTreatPlanByUserId(TreatPlanQuery treatPlanQuery) {

        return treatPlanEntityMapper.selectTreatPlane(treatPlanQuery);
    }
}
