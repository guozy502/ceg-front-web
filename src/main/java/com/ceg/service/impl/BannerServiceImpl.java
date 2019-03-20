package com.ceg.service.impl;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.DoctorQuery;
import com.ceg.mapper.BannerEntityMapper;
import com.ceg.mapper.DoctorEntityMapper;
import com.ceg.pojo.BannerEntity;
import com.ceg.pojo.DoctorEntity;
import com.ceg.service.BannerService;
import com.ceg.vo.DoctorVo;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/22.
 */
@Service
public class BannerServiceImpl implements BannerService {

    @Autowired
    private BannerEntityMapper bannerEntityMapper;


    @Override
     public BannerEntity queryBannerDetail(Long id) {
        BannerEntity bannerEntity = bannerEntityMapper.selectByPrimaryKey(id);
        return bannerEntity;
    }

    @Override
    public List<BannerEntity> queryBannerList() {
        List<BannerEntity> bannerList = bannerEntityMapper.queryBannerList();
        return bannerList;
    }
}
