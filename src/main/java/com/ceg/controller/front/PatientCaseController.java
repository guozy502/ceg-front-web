package com.ceg.controller.front;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.response.DataRespBody;
import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.PatientCaseQuery;
import com.ceg.pojo.PatientCaseEntity;
import com.ceg.service.PatientCaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/29.
 */
@Controller
public class PatientCaseController {

    @Autowired
    private PatientCaseService patientCaseService;

    @RequestMapping(value = "/ceg/front/getPatientDetail" ,method = RequestMethod.GET)
    public String queryPatientCaseInfo(Model model,Long id){

        PatientCaseEntity patientCase = patientCaseService.queryPatientCaseInfoById(id);
        model.addAttribute("patientCaseEntity",patientCase);
        return "new/caseDetail";
    }
    @RequestMapping(value = "/ceg/front/getPatientCaseInfoByPage")
    public String queryPatientCaseInfoListByPage(Model model,@RequestBody(required = false) PatientCaseQuery patientCaseEntity, Integer pageNo, Integer pageSize){
        DataRespWithPage< List<PatientCaseEntity>> patientCaseEntityList = patientCaseService.queryPatientCaseListByPage(patientCaseEntity,pageNo,pageSize);
        model.addAttribute("patientCaseEntityList",patientCaseEntityList);
        return "new/caseList";
    }

    @ResponseBody
    @RequestMapping(value = "/ceg/front/getAjaxPatientCaseInfo" ,method = RequestMethod.POST)
    public DataRespBody<List<PatientCaseEntity>> queryPatientCaseInfoList(@RequestBody(required = false) PatientCaseQuery patientCaseQuery){
        DataRespBody<List<PatientCaseEntity>> respBody =new DataRespBody<>();
        List<PatientCaseEntity> patientCaseEntityList;
        try {
            patientCaseEntityList = patientCaseService.queryPatientCaseList(patientCaseQuery);
            respBody.setData(patientCaseEntityList);
            respBody.setCode(CodeEnum.IS_SUCCESS.getCode());
            respBody.setMsg(CodeEnum.IS_SUCCESS.getValue());
        }catch (Exception e){
            respBody.setCode(CodeEnum.IS_EXCEPTION.getCode());
            respBody.setMsg(CodeEnum.IS_EXCEPTION.getValue());
        }
        return respBody;
    }
}
