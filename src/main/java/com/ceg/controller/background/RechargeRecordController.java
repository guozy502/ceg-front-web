//package com.ceg.controller.background;
//
//import com.ceg.commons.CodeEnum;
//import com.ceg.commons.response.DataRespBody;
//import com.ceg.pojo.RechargeRecordEntity;
//import com.ceg.service.RechargeRecordService;
//import com.ceg.vo.RechargeRecordVo;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import java.util.List;
//
///**
// * @Author：guozhenyu(guozhenyu112@163.com)
// * @date: 2018/9/8.
// */
//@Controller
//@Slf4j
//public class RechargeRecordController {
//
//    @Autowired
//    private RechargeRecordService rechargeRecordService;
//
//    @ResponseBody
//    @RequestMapping(method = RequestMethod.POST,value = "/ceg/recharge/getVisionRecordList")
//    public DataRespBody<List<RechargeRecordEntity>> findRechargeList(RechargeRecordVo rechargeRecordVo){
//        DataRespBody<List<RechargeRecordEntity>> dataRespBody = new DataRespBody<>();
//        List<RechargeRecordEntity> rechargeRecordList ;
//        try {
//            rechargeRecordList = rechargeRecordService.queryRechargeRecordList(rechargeRecordVo);
//            dataRespBody.setData(rechargeRecordList);
//        }catch (Exception e){
//            e.getStackTrace();
//            dataRespBody.setCode(CodeEnum.IS_EXCEPTION.getValue());
//            dataRespBody.setMsg("系统抛出异常！");
//        }
//        return dataRespBody;
//    }
//
//    @ResponseBody
//    @RequestMapping(method = RequestMethod.POST,value = "/ceg/recharge/getRechargeDetail")
//    public DataRespBody<RechargeRecordEntity> findRechargeDetail(RechargeRecordVo rechargeRecordVo){
//        DataRespBody<RechargeRecordEntity> dataRespBody = new DataRespBody<>();
//        try {
//            RechargeRecordEntity rechargeRecordEntity = rechargeRecordService.queryRechargeRecordDetail(rechargeRecordVo);
//            dataRespBody.setData(rechargeRecordEntity);
//            dataRespBody.setCode(CodeEnum.IS_SUCCESS.getValue());
//        }catch (Exception e){
//            e.getStackTrace();
//            //dataRespBody.setCode(CodeEnum.IS_EXCEPTION.getValue());
//            //dataRespBody.setMsg("系统抛出异常！");
//        }
//        return null;
//    }
//}
