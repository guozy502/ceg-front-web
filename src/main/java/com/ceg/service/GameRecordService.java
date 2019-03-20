package com.ceg.service;

import com.ceg.pojo.GameRecordEntity;
import com.ceg.pojo.GameVersionEntity;

import java.util.List;

/**
 * 游戏类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/9.
 */
public interface GameRecordService {
    List<GameRecordEntity> queryGameRecordByUserId(GameRecordEntity record);

}
