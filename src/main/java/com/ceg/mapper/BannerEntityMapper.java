package com.ceg.mapper;

import com.ceg.pojo.BannerEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BannerEntityMapper {
    int deleteByPrimaryKey(Long id);

    int insert(BannerEntity record);

    int insertSelective(BannerEntity record);

    BannerEntity selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(BannerEntity record);

    int updateByPrimaryKey(BannerEntity record);

    List<BannerEntity> queryBannerList();
}