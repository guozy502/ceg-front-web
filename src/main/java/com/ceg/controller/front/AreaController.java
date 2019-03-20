package com.ceg.controller.front;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.response.DataRespBody;
import com.ceg.dto.AreaDto;
import com.ceg.pojo.AreaEntity;
import com.ceg.service.AreaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 初识化页面
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/7/29.
 */
@Controller
@Slf4j
public class AreaController {

    @Autowired
    private AreaService areaService;

    @RequestMapping(value = "/ceg/front/getAreaList",method = RequestMethod.POST)
    @ResponseBody
    public DataRespBody<List<AreaEntity>> getMainInfoList(){
        DataRespBody<List<AreaEntity>> dataRespBody = new DataRespBody<>();
        List<AreaEntity> areaEntities;
        try {
            areaEntities = areaService.queryAreaList(new AreaDto());
            dataRespBody.setData(areaEntities);
            dataRespBody.setMsg(CodeEnum.IS_SUCCESS.getValue());
            dataRespBody.setCode(CodeEnum.IS_SUCCESS.getCode());
        }catch (Exception e){
            dataRespBody.setCode(CodeEnum.IS_EXCEPTION.getCode());
            dataRespBody.setMsg(CodeEnum.IS_EXCEPTION.getValue());
            log.error("查询地区信息失败！");
        }
        return dataRespBody;
    }

}
