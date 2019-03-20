package com.ceg.controller.background;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.response.ResponseBody;
import com.google.code.kaptcha.impl.DefaultKaptcha;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

/**
 * 验证码类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/2.
 */
@Controller
@Slf4j
public class VerifiedCodeController {
    @Autowired
    private DefaultKaptcha defaultKaptcha;

    @RequestMapping("/ceg/web/defaultKaptcha")
    public void defaultKaptcha(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception{
        byte[] captchaChallengeAsJpeg = null;
        ByteArrayOutputStream jpegOutputStream = new ByteArrayOutputStream();
        try {
            //生产验证码字符串并保存到session中
            String createText = defaultKaptcha.createText();
            httpServletRequest.getSession().setAttribute("vrifyCode", createText);
            //使用生产的验证码字符串返回一个BufferedImage对象并转为byte写入到byte数组中
            BufferedImage challenge = defaultKaptcha.createImage(createText);
            ImageIO.write(challenge, "jpg", jpegOutputStream);
        } catch (IllegalArgumentException e) {
            httpServletResponse.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        //定义response输出类型为image/jpeg类型，使用response输出流输出图片的byte数组
        captchaChallengeAsJpeg = jpegOutputStream.toByteArray();
        httpServletResponse.setHeader("Cache-Control", "no-store");
        httpServletResponse.setHeader("Pragma", "no-cache");
        httpServletResponse.setDateHeader("Expires", 0);
        httpServletResponse.setContentType("image/jpeg");
        ServletOutputStream responseOutputStream =
                httpServletResponse.getOutputStream();
        responseOutputStream.write(captchaChallengeAsJpeg);
        responseOutputStream.flush();
        responseOutputStream.close();
    }

    @RequestMapping(value = "/ceg/web/validateCode",method = RequestMethod.POST)
    @org.springframework.web.bind.annotation.ResponseBody
    public ResponseBody imgvrifyControllerDefaultKaptcha(HttpServletRequest httpServletRequest, String testCode){
        ResponseBody responseBody = new ResponseBody();
        String captchaId = (String) httpServletRequest.getSession().getAttribute("vrifyCode");
       log.info("Session  vrifyCode "+captchaId+" form vrifyCode "+testCode);
        if (!captchaId.equals(testCode)) {
            responseBody.setMsg(CodeEnum.IS_FAIL.getValue());
            responseBody.setCode(CodeEnum.IS_FAIL.getCode());
            log.warn("传输验证码：{}，后端验证码是：{}",testCode,captchaId);
            return responseBody;
        }
        responseBody.setMsg(CodeEnum.IS_SUCCESS.getValue());
        responseBody.setCode(CodeEnum.IS_SUCCESS.getCode());
        return responseBody;
    }


}
