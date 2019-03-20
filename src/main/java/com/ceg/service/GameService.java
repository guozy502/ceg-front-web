package com.ceg.service;

import com.ceg.pojo.GameEntity;

import java.util.List;

/**
 * 游戏类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/9.
 */
public interface GameService {

    List<GameEntity> findGameList();
}
