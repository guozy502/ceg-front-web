package com.ceg.service.impl;

import com.ceg.mapper.CooperationPartnerEntityMapper;
import com.ceg.pojo.CooperationPartnerEntity;
import com.ceg.service.CooperationPartnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/25.
 */
@Service
public class CooperationPartnerServiceImpl implements CooperationPartnerService {

    @Autowired
    private CooperationPartnerEntityMapper cooperationPartnerEntityMapper;
    @Override
    public boolean addCooperationPartner(CooperationPartnerEntity cooperationPartnerEntity) {
        int number = cooperationPartnerEntityMapper.insert(cooperationPartnerEntity);
        boolean isTrue = false;
        if (number == 1){
            isTrue = true;
        }
        return isTrue;
    }
}
