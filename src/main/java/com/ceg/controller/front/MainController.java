package com.ceg.controller.front;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.pojo.*;
import com.ceg.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * 初识化页面
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/7/29.
 */
@Controller
public class MainController {

    @Autowired
    private NewsService newsService;
    @Autowired
    private DoctorService doctorService;
    @Autowired
    private PatientCaseService patientCaseService;
    @Autowired
    private KnowledgeService knowledgeService;
    @Autowired
    private UserHelpService userHelpService;

    @RequestMapping(value = "/ceg/front/getMainInfoList")
    public String getMainInfoList(Model model,Integer pageNo,Integer pageSize){
        pageNo = (pageNo == null || pageNo ==0) ?  1 : pageNo;
        pageSize = (pageSize == null || pageSize == 0) ? 5 : pageSize;
        DataRespWithPage<List<NewsEntity>> newsList = newsService.findNewsListByPage(null,pageNo, pageSize);
        DataRespWithPage<List<PatientCaseEntity>> patientCaseListData = patientCaseService.queryPatientCaseListByPage(null,pageNo,5);
        DataRespWithPage<List<DoctorEntity>> doctorList = doctorService.queryDoctorListByPage(null,pageNo, 4);
        DataRespWithPage<List<KnowledgeEntity>> knowledgeList = knowledgeService.findKnowledgesByPage(null, pageNo, pageSize);
        DataRespWithPage<List<UserHelpEntity>> userHelpEntityList = userHelpService.queryUserHelpListByPage(null,pageNo,pageSize);
        model.addAttribute("helpListData",userHelpEntityList);
        model.addAttribute("newsListData",newsList);
        model.addAttribute("knowledgeList",knowledgeList);
        model.addAttribute("patientCaseListData",patientCaseListData);
        model.addAttribute("doctorData",doctorList);
        return "new/index";
    }

    /**
     * 跳转到公司简介页面
     * @return str
     */
    @RequestMapping(value = "/ceg/front/aboutMe")
    public String frontAboutMe(Model model){
        return "new/aboutUs";
    }
    /**
     * 跳转到加盟页面
     * @return str
     */
    @RequestMapping(value = "/ceg/front/joinUs")
    public String frontJoinUs(Model model){
        return "new/joinUs";
    }
    /**
     * 跳转到加盟页面
     * @return str
     */
    @RequestMapping(value = "/ceg/front/contactUs")
    public String frontContactUs(Model model){
        return "new/contactUs";
    }

}
