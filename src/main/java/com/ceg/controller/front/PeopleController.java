package com.ceg.controller.front;

import com.ceg.pojo.SysUserEntity;
import com.ceg.service.SysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author：guozhenyu
 * @date: 2018/7/15.
 */
@RestController
public class PeopleController {

    @Autowired
    private SysUserService sysUserService;

    @ResponseBody
    @RequestMapping("/ceg/front/getUserList")
    public List<SysUserEntity> findUserList(){
        return sysUserService.findUserList();
    }
}
