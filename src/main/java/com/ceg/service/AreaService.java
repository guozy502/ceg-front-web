package com.ceg.service;

import com.ceg.dto.AreaDto;
import com.ceg.pojo.AreaEntity;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/22.
 */
public interface AreaService {
    List<AreaEntity> queryAreaList(AreaDto areaDto);
}
