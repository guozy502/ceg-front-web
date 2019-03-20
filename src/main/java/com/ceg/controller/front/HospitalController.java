package com.ceg.controller.front;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.response.DataRespBody;
import com.ceg.dto.HospitalQuery;
import com.ceg.pojo.HospitalEntity;
import com.ceg.service.HospitalService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/15.
 */
@Controller
@Slf4j
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @RequestMapping("/ceg/front/getHospitalList")
    @ResponseBody
    public DataRespBody<List<HospitalEntity>> findHospitalList(@RequestBody HospitalQuery hospitalQuery){
        DataRespBody<List<HospitalEntity>> dataRespBody = new DataRespBody<>();
        List<HospitalEntity> hospitalList;
        try {
            hospitalList = hospitalService.findUserList(hospitalQuery);
            dataRespBody.setData(hospitalList);
            dataRespBody.setMsg(CodeEnum.IS_SUCCESS.getValue());
            dataRespBody.setCode(CodeEnum.IS_SUCCESS.getCode());
        }catch (Exception e){
            dataRespBody.setMsg(CodeEnum.IS_FAIL.getValue());
            dataRespBody.setCode(CodeEnum.IS_FAIL.getCode());
            log.error("查询医院信息列表出错！",e);
        }
        return dataRespBody;
    }

    @RequestMapping("/ceg/front/showHospitalsByPage")
    public List<HospitalEntity> findHospitalListByPage(@RequestBody HospitalEntity hospitalEntity,Integer pageNo,Integer pageSize){

        return hospitalService.findHospitalEntityListByPage(hospitalEntity,pageNo,pageSize);
    }
}
