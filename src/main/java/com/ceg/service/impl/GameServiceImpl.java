package com.ceg.service.impl;

import com.ceg.mapper.GameEntityMapper;
import com.ceg.pojo.GameEntity;
import com.ceg.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/9.
 */
@Service("gameService")
public class GameServiceImpl implements GameService {

    @Autowired
    private GameEntityMapper gameEntityMapper;
    @Transactional(readOnly = true)
    @Override
    public List<GameEntity> findGameList() {
        List<GameEntity> gameEntityList = gameEntityMapper.queryGameList(false);
        return gameEntityList;
    }
}
