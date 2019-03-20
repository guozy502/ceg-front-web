package com.ceg.controller.front;

import com.ceg.commons.response.DataRespBody;
import com.ceg.commons.response.DataRespWithPage;
import com.ceg.vo.DoctorVo;
import com.ceg.dto.DoctorQuery;
import com.ceg.pojo.DoctorEntity;
import com.ceg.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/15.
 */
@Controller
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @RequestMapping(value = "/ceg/front/getDoctorListByPage",method = {RequestMethod.GET,RequestMethod.POST})
    public String findDoctorListByPage(Model model,DoctorQuery doctorQuery, Integer pageNo, Integer pageSize){
        DataRespWithPage<List<DoctorEntity>> doctorEntityList =doctorService.queryDoctorListByPage(doctorQuery,pageNo,pageSize);
        model.addAttribute("responseData",doctorEntityList);
        return "expertList";
    }

    @RequestMapping(value = "/ceg/front/showDoctorDetail")
    public String findDoctorDetail(Model model,Long id){
        DoctorEntity doctor =doctorService.queryDoctorDetail(id);
        model.addAttribute("doctor",doctor);
        return "expertDetail";
    }

    @RequestMapping(value = "/ceg/front/getDoctorList",method = RequestMethod.POST)
    @ResponseBody
    public DataRespBody findDoctorList(DoctorQuery doctorQuery){
        DataRespBody<List<DoctorVo>> dataRespBody = new DataRespBody<>();
        List<DoctorVo> doctorList =doctorService.queryDoctorList(doctorQuery);
        dataRespBody.setData(doctorList);
        return dataRespBody;
    }

    @RequestMapping(value = "/ceg/front/ajaxGetDoctorListByPage",method = {RequestMethod.POST})
    @ResponseBody
    public DataRespWithPage ajaxFindDoctorListByPage(@RequestBody DoctorQuery doctorQuery, Integer pageNo, Integer pageSize){
        DataRespWithPage<List<DoctorEntity>> doctorEntityList =doctorService.queryDoctorListByPage(doctorQuery,pageNo,pageSize);
        return doctorEntityList;
    }
}
