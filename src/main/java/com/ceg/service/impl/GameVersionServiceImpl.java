package com.ceg.service.impl;

import com.ceg.dto.GameVersionQuery;
import com.ceg.mapper.GameVersionEntityMapper;
import com.ceg.pojo.GameVersionEntity;
import com.ceg.service.GameVersionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * 游戏版本类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/9.
 */
@Service
public class GameVersionServiceImpl implements GameVersionService {

    @Autowired
    private GameVersionEntityMapper gameVersionEntityMapper;
    @Override
    public  GameVersionEntity queryNewGameVersion(){
        return gameVersionEntityMapper.selectNewGameVersionInfo();
    }

    @Override
    public boolean queryGameVersionByVersion(GameVersionQuery gameVersionQuery) {
        GameVersionEntity gameVersionEntity =
                gameVersionEntityMapper.selectGameVersionByVersion();
        boolean isForceUpdate = false;
        if (StringUtils.isEmpty(gameVersionEntity)){
            return isForceUpdate;
        }
        if (gameVersionEntity.getVersion().compareTo(gameVersionQuery.getVersion()) > 0){
            isForceUpdate = true;
        }
        return isForceUpdate;
    }

    ;
}
