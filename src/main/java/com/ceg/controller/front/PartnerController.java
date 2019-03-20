package com.ceg.controller.front;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/31.
 */
@Controller
@Slf4j
public class PartnerController {

    @RequestMapping(value = "/ceg/partner/getPartnerPage")
    public String  getPotentialUserInfo(){
      log.info("跳转到加盟页面");
        return "franchise";
    }

}
