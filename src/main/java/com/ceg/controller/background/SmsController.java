package com.ceg.controller.background;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.Constants;
import com.ceg.commons.response.ResponseBody;
import com.ceg.dto.SysUserQuery;
import com.ceg.vo.SysUserVo;
import com.ceg.service.SysUserService;
import com.ceg.utils.SMSUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.Random;

/**
 * 短信验证码
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/11/25.
 */
@Controller
@Slf4j
public class SmsController {

    @Autowired
    private SysUserService sysUserService;

    @Autowired
    private SMSUtil smsUtil;
    @RequestMapping(method = RequestMethod.POST,value = "/ceg/back/send/sms")
    @org.springframework.web.bind.annotation.ResponseBody
    public ResponseBody sendSms(@RequestParam("phone") String phone, HttpServletRequest request){
        ResponseBody responseBody = new ResponseBody();

        //判断用户手机号码是否存在
        SysUserQuery userDto = new SysUserQuery();
        userDto.setMobile(phone.trim());
        SysUserVo sysUserVo = sysUserService.findUserInfo(userDto);
        if (StringUtils.isEmpty(sysUserVo)){
            responseBody.setCode(CodeEnum.IS_NOT_EXIST.getCode());
            responseBody.setMsg("手机号码不存在，请核对手机号！");
            return responseBody;
        }

        //String code = getVerificationCode();
        String code = "123456";
        if (log.isDebugEnabled()){
            log.debug("手机号为:{},接收到的验证码为：{}",phone,code);
        }
        HttpSession session = request.getSession();
        session.setAttribute(Constants.CURRENT_USER, sysUserVo);
        //TODO 设置缓存
        session.setAttribute(Constants.VALIDATE_PHONE, phone);
        session.setAttribute(Constants.VALIDATE_PHONE_CODE, code);
        session.setAttribute(Constants.SEND_CODE_TIME, new Date().getTime());
        try {
            //String message = smsUtil.send(telephone, code);
            responseBody.setCode(CodeEnum.IS_SUCCESS.getCode());
            responseBody.setMsg(CodeEnum.IS_SUCCESS.getValue());
            if (log.isDebugEnabled()){
                //log.debug("短信返回的信息为：{}",message);
            }
        } catch (Exception e) {
            //TODO 添加日志信息
            log.error("添加用户信息失败！",e);
            responseBody.setCode(CodeEnum.IS_FAIL.getCode());
            responseBody.setMsg(CodeEnum.IS_FAIL.getValue());
        }
        return responseBody;
    }

    private String getVerificationCode(){
        StringBuilder code = new StringBuilder();
        Random random = new Random();
        // 生成6位验证码
        for (int i = 0; i < 6; i++) {
            code.append(String.valueOf(random.nextInt(10)));
        }
        return code.toString();
    }

    @RequestMapping(method = RequestMethod.POST,value = "/ceg/back/code/validate")
    public String validateCode(HttpServletRequest request, Model model, @RequestParam("phone") String inputPhone, @RequestParam ("code") String inputCode){
        HttpSession session = request.getSession();
        //TODO
        String code = (String) session.getAttribute(Constants.VALIDATE_PHONE_CODE);
       String phone = (String) session.getAttribute(Constants.VALIDATE_PHONE);
        if(phone.equals(inputPhone) && code.equalsIgnoreCase(inputCode)){
            return "background/resetPassword2";
        }else{
            //TODO 设置错误信息 通过model 返回到密码重置页面
            return "background/resetPassword";
        }
    }
}
