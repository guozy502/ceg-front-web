//package com.ceg.service.impl;
//
//import com.ceg.mapper.RechargeRecordEntityMapper;
//import com.ceg.pojo.RechargeRecordEntity;
//import com.ceg.service.RechargeRecordService;
//import com.ceg.vo.RechargeRecordVo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//
///**
// * @Author：guozhenyu(guozhenyu112@163.com)
// * @date: 2018/10/15.
// */
//@Service("rechargeRecordService")
//public class RechargeRecordServiceImpl implements RechargeRecordService {
//
//
//    @Autowired
//    private RechargeRecordEntityMapper rechargeRecordEntityMapper;
//
//    @Transactional(rollbackFor = Exception.class,readOnly = true)
//    @Override
//    public List<RechargeRecordEntity> queryRechargeRecordList(RechargeRecordVo rechargeRecordVo) {
//        List<RechargeRecordEntity> rechargeRecordList = rechargeRecordEntityMapper.selectRechargeRecordList(rechargeRecordVo);
//        return rechargeRecordList;
//    }
//
//    @Transactional(rollbackFor = Exception.class,readOnly = true)
//    @Override
//    public RechargeRecordEntity queryRechargeRecordDetail(RechargeRecordVo rechargeRecordVo) {
//        return  rechargeRecordEntityMapper.selectByPrimaryKey(rechargeRecordVo.getId());
//    }
//}
