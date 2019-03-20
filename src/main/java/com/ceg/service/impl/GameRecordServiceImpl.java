package com.ceg.service.impl;

import com.ceg.mapper.GameRecordEntityMapper;
import com.ceg.pojo.GameRecordEntity;
import com.ceg.service.GameRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 游戏类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/9.
 */
@Service
public class GameRecordServiceImpl implements GameRecordService {

    @Autowired
    private GameRecordEntityMapper gameRecordEntityMapper;

    @Transactional(readOnly = true,rollbackFor = Exception.class)
    @Override
    public List<GameRecordEntity> queryGameRecordByUserId(GameRecordEntity record) {
        List<GameRecordEntity> gameRecordEntity = gameRecordEntityMapper.selectGameRecordByUserId(record);
        return gameRecordEntity;
    }

}
