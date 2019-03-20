package com.ceg.controller.background;

import com.ceg.commons.Constants;
import com.ceg.commons.UserRequest;
import com.ceg.dto.CaseAndVisionRecordDto;
import com.ceg.dto.GameRecordDto;
import com.ceg.pojo.GameRecordEntity;
import com.ceg.pojo.SysUserEntity;
import com.ceg.service.CaseInfoService;
import com.ceg.service.GameRecordService;
import com.ceg.service.SysUserService;
import com.ceg.vo.CaseInfoVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * 菜单controller
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/6.
 */
@Controller
public class MenuController {

    @Autowired
    private CaseInfoService caseInfoService;
    @Autowired
    private GameRecordService gameRecordService;
    @Autowired
    private SysUserService sysUserService;
    /**
     * 跳转到setting页面
     * @return str
     */
    @RequestMapping(value = "/ceg/user/background/setting")
    public ModelAndView backgroundUSerSetting(ModelAndView model){
        model.addObject(Constants.CURRENT_USER, UserRequest.getCurrentUser());
        model.setViewName("background/setting");
        return model;
    }

//    /**
////     * 跳转到myData页面
////     * @return str
////     */
////    @RequestMapping(value = "/ceg/user/background/myData")
////    public ModelAndView backgroundUSerData(ModelAndView model){
////        GameRecordEntity record = new GameRecordEntity();
////        SysUserEntity currentUser = sysUserService.getCurrentUser();
////        record.setUserId(currentUser.getId());
////        List<GameRecordEntity> gameRecordDto = gameRecordService.queryGameRecordByUserId(record);
////        model.addObject("gameRecordDto",gameRecordDto);
////        model.addObject(Constants.CURRENT_USER, UserRequest.getCurrentUser());
////        model.setViewName("background/myData");
////        return model;
////    }

    /**
     * 跳转到myCase页面
     * @return str
     */
    @RequestMapping(value = "/ceg/user/background/myCase")
    public ModelAndView backgroundUSerCase(ModelAndView model){
        model.addObject(Constants.CURRENT_USER, UserRequest.getCurrentUser());
        CaseInfoVo caseInfoVo = new CaseInfoVo();
        caseInfoVo.setUserId(UserRequest.getCurrentUser().getId());
        CaseAndVisionRecordDto visionRecordDto = null;
        try {
            visionRecordDto = caseInfoService.queryCaseInfoList(caseInfoVo);
        } catch (Exception e) {
            e.printStackTrace();
        }
        model.addObject("visionRecordDto",visionRecordDto);
        model.setViewName("background/myCase");
        return model;
    }
    /**
     * 跳转到个人账户页面
     * @return str
     */
    @RequestMapping(value = "/ceg/user/background/myAccount")
    public ModelAndView backgroundUSerAccount(ModelAndView model){
        model.addObject(Constants.CURRENT_USER, UserRequest.getCurrentUser());
        model.setViewName("background/myAccount");
        return model ;
    }

    /**
     * 跳转到个人信息页面
     * @return str
     */
    @RequestMapping(value = "/ceg/user/background/myInformation")
    public ModelAndView backgroundUSerInfo(ModelAndView model){
        model.addObject(Constants.CURRENT_USER, UserRequest.getCurrentUser());
        model.setViewName("background/myInformation");
        return model;
    }

    /**
     * 跳转到重置页面
     * @return str
     */
    @RequestMapping(value = "/ceg/background/resetPassword")
    public ModelAndView backgroundRestPassword(ModelAndView model){
        model.addObject(Constants.CURRENT_USER, UserRequest.getCurrentUser());
        model.setViewName("background/resetPassword");
        return model;
    }
}


