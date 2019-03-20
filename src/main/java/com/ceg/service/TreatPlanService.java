package com.ceg.service;

import com.ceg.dto.TreatPlanQuery;
import com.ceg.pojo.TreatPlanEntity;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/22.
 */
public interface TreatPlanService {
    TreatPlanEntity findTreatPlanByUserId(TreatPlanQuery treatPlanQuery);
}
