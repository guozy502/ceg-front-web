package com.ceg.service.impl;

import com.ceg.dto.PotentialUserQuery;
import com.ceg.mapper.PotentialUserEntityMapper;
import com.ceg.pojo.PotentialUserEntity;
import com.ceg.service.PotentialUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/25.
 */
@Service
@Slf4j
public class PotentialUserServiceImpl implements PotentialUserService {

    @Autowired
    private PotentialUserEntityMapper potentialUserEntityMapper;
    @Override
    public boolean addPotentialUser(PotentialUserQuery potentialUserQuery) {
        PotentialUserEntity potentialUserEntity = new PotentialUserEntity();
        BeanUtils.copyProperties(potentialUserQuery,potentialUserEntity);
        potentialUserEntity.setCreateTime(new Date());
        potentialUserEntity.setUpdateTime(new Date());
        int num = potentialUserEntityMapper.insert(potentialUserEntity);
        boolean isTrue = false;
        if (num == 1){
            isTrue = true;
        }
        return isTrue;
    }
}
