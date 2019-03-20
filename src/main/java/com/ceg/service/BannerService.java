package com.ceg.service;

import com.ceg.pojo.BannerEntity;

import java.util.List;

/**
 * banner
 * @Author：guozhenyu
 * @date: 2018/7/22.
 */

public interface BannerService {

    BannerEntity queryBannerDetail(Long id);

    List<BannerEntity> queryBannerList();
}
