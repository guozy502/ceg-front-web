package com.ceg.controller.front;

import com.ceg.service.BannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2019/2/17.
 */
@Controller
public class BannerController {
    @Autowired
    private BannerService bannerService;
}
