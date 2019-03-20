package com.ceg.service.impl;

import com.ceg.dto.AreaDto;
import com.ceg.mapper.AreaEntityMapper;
import com.ceg.pojo.AreaEntity;
import com.ceg.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/22.
 */
@Service
public class AreaServiceImpl implements AreaService {
    @Autowired
    private AreaEntityMapper areaEntityMapper;
    @Override
    public List<AreaEntity> queryAreaList(AreaDto areaDto) {
        return areaEntityMapper.selectAreaList(areaDto);
    }
}
