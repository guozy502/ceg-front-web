package com.ceg.service.impl;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.DoctorQuery;
import com.ceg.mapper.DoctorEntityMapper;
import com.ceg.pojo.DoctorEntity;
import com.ceg.service.DoctorService;
import com.ceg.vo.DoctorVo;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/22.
 */
@Service("doctorService")
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorEntityMapper doctorEntityMapper;

    @Override
    public DataRespWithPage<List<DoctorEntity>> queryDoctorListByPage(DoctorQuery doctorQuery, Integer pageNo, Integer pageSize) {
        //設置分頁查詢的默認頁碼
        Integer number= pageNo == null ?  1 : pageNo;
        Integer size= pageSize == null ?  4 : pageSize;
        PageHelper.startPage(number,size);
        DataRespWithPage<List<DoctorEntity>> pageDataList = new DataRespWithPage<>();
        List<DoctorEntity> doctorEntities =doctorEntityMapper.queryDoctorListByPage(doctorQuery);
        pageDataList.setPageNo(number);
        pageDataList.setLimit(size);
        pageDataList.setTotalCount( PageHelper.count(()->doctorEntityMapper.queryDoctorListByPage(doctorQuery)));
        pageDataList.setData(doctorEntities);
        return pageDataList;
    }

    @Override
    public DoctorEntity queryDoctorDetail(Long id) {
        DoctorEntity doctorEntity = doctorEntityMapper.selectByPrimaryKey(id);
        return doctorEntity;
    }

    @Override
    public List<DoctorVo> queryDoctorList(DoctorQuery doctorQuery) {
        List<DoctorVo> doctorList = doctorEntityMapper.queryDoctorList(doctorQuery);
        return doctorList;
    }
}
