package com.ceg.controller.front;

import com.ceg.commons.response.DataRespWithPage;
import com.ceg.dto.UserHelpQuery;
import com.ceg.pojo.UserHelpEntity;
import com.ceg.service.UserHelpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/22.
 */

@Controller
public class UserHelpController {

    @Autowired
    private UserHelpService userHelpService;

    @RequestMapping(value = "/ceg/front/getHelpListByPage",method = RequestMethod.POST)
    public String findUSerHelpListByPage(Model model,UserHelpQuery userHelp, Integer pageNo, Integer pageSize){
        DataRespWithPage<List<UserHelpEntity>> userHelpEntityList = userHelpService.queryUserHelpListByPage(userHelp,pageNo,pageSize);
        model.addAttribute("helpListData",userHelpEntityList);
        return "helpList";
    }

    @RequestMapping(value = "/ceg/front/showHelpDetail")
    public String findUserHelpDetail(Model model,Long id){
        UserHelpEntity userHelpEntity = userHelpService.queryUserHelpDetail(id);
        model.addAttribute("userHelp",userHelpEntity);
        return "helpDetail";
    }
}
