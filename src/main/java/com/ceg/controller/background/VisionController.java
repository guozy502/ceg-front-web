package com.ceg.controller.background;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.response.DataRespBody;
import com.ceg.pojo.VisionRecordEntity;
import com.ceg.service.VisionRecordService;
import com.ceg.vo.VisionRecordVo;
import io.swagger.models.auth.In;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/8.
 */
@Controller
@Slf4j
public class VisionController {

    @Autowired
    private VisionRecordService visionRecordService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST,value = "/ceg/vision/getVisionRecordList")
    public DataRespBody<List<VisionRecordEntity>> findVisionList(VisionRecordVo visionRecordVo){
        DataRespBody<List<VisionRecordEntity>> dataRespBody = new DataRespBody<>();
        List<VisionRecordEntity> visionCaseList ;
        try {
            visionCaseList = visionRecordService.findVisionCaseList(visionRecordVo);
            dataRespBody.setData(visionCaseList);
            dataRespBody.setCode(CodeEnum.IS_SUCCESS.getValue());
        }catch (Exception e){
            e.getStackTrace();
            dataRespBody.setCode(CodeEnum.IS_EXCEPTION.getValue());
            dataRespBody.setMsg("系统抛出异常！");
        }
        return dataRespBody;
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST,value = "/ceg/vision/getEchartVisionList")
    public Map<Integer,Integer> findEchartVisionList(VisionRecordVo visionRecordVo){
        //DataRespBody<Map<Integer,Integer>> dataRespBody = new DataRespBody<>();
        List<VisionRecordEntity> visionCaseList ;
        Map<Integer, Integer> visionMap = new HashMap<>();
        try {
            visionCaseList = visionRecordService.findVisionCaseList(visionRecordVo);
            Integer count = 1;
            for (VisionRecordEntity vision: visionCaseList) {
                //TODO

                visionMap.put(count++,vision.getLeftCsf());
            }
            //dataRespBody.setData(visionMap);
           // dataRespBody.setCode(CodeEnum.IS_SUCCESS.getValue());
        }catch (Exception e){
            e.getStackTrace();
            //dataRespBody.setCode(CodeEnum.IS_EXCEPTION.getValue());
            //dataRespBody.setMsg("系统抛出异常！");
        }
        return visionMap;
    }
}
