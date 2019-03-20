package com.ceg.service;

import com.ceg.dto.GameVersionQuery;
import com.ceg.pojo.GameVersionEntity;

/**
 * 游戏版本类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/9.
 */
public interface GameVersionService {
    GameVersionEntity queryNewGameVersion();
    boolean queryGameVersionByVersion(GameVersionQuery gameVersionQuery);
}
