package com.ceg.controller.front;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.response.ResponseBody;
import com.ceg.dto.PotentialUserQuery;
import com.ceg.pojo.CooperationPartnerEntity;
import com.ceg.service.CooperationPartnerService;
import com.ceg.service.PotentialUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/25.
 */
@Controller
@Slf4j
public class OtherController {

    @Autowired
    private PotentialUserService potentialUserService;

    @Autowired
    private CooperationPartnerService cooperationPartnerService;
    @RequestMapping(value = "/ceg/aboutMe/getPotentialUserInfo",method = RequestMethod.POST)
    @org.springframework.web.bind.annotation.ResponseBody
    public ResponseBody getPotentialUserInfo(HttpServletRequest request, @RequestBody PotentialUserQuery potentialUserQuery, @PathVariable(required = false) String keyWord){
        ResponseBody responseBody = new ResponseBody();
        boolean isTrue;
        try {
            HttpSession session = request.getSession();
            String testCode = (String)session.getAttribute("vrifyCode");
            if (!testCode.equals(potentialUserQuery.getTestCode())){
                responseBody.setCode("20000");
                responseBody.setMsg("验证码错误");
                return responseBody;
            }
            isTrue = potentialUserService.addPotentialUser(potentialUserQuery);
            if (!isTrue){
                responseBody.setCode(CodeEnum.IS_FAIL.getCode());
                responseBody.setMsg(CodeEnum.IS_FAIL.getValue());
            }
            responseBody.setCode(CodeEnum.IS_SUCCESS.getCode());
            responseBody.setMsg(CodeEnum.IS_SUCCESS.getValue());
        }catch (Exception e){
            responseBody.setCode(CodeEnum.IS_EXCEPTION.getCode());
            responseBody.setMsg(CodeEnum.IS_EXCEPTION.getValue());
            log.error("数据信息:"+potentialUserQuery.toString()+"保存失败",e);
        }
        return responseBody;
    }

    @RequestMapping(value = "/ceg/front/getPotentialUserInfo",method = RequestMethod.POST)
    @org.springframework.web.bind.annotation.ResponseBody
    public ResponseBody getCooperationPartnerInfo(HttpServletRequest request, @RequestBody CooperationPartnerEntity cooperationPartnerEntity, @PathVariable(required = false) String code){
        ResponseBody responseBody = new ResponseBody();
        boolean isTrue;
        try {
            HttpSession session = request.getSession();
            String testCode = (String)session.getAttribute("vrifyCode");
            if (!testCode.equals(code)){
                responseBody.setCode("20000");
                responseBody.setMsg("验证码错误");
                return responseBody;
            }
            isTrue = cooperationPartnerService.addCooperationPartner(cooperationPartnerEntity);
            if (!isTrue){
                responseBody.setCode(CodeEnum.IS_FAIL.getCode());
                responseBody.setMsg(CodeEnum.IS_FAIL.getValue());
            }
            responseBody.setCode(CodeEnum.IS_SUCCESS.getCode());
            responseBody.setMsg(CodeEnum.IS_SUCCESS.getValue());
        }catch (Exception e){
            responseBody.setCode(CodeEnum.IS_EXCEPTION.getCode());
            responseBody.setMsg(CodeEnum.IS_EXCEPTION.getValue());
            log.error("合作伙伴信息:"+cooperationPartnerEntity.toString()+"保存失败",e);
        }
        return responseBody;
    }
}
