package com.ceg.controller.background;

import com.ceg.commons.Constants;
import com.ceg.commons.MD5Util;
import com.ceg.commons.UserRequest;
import com.ceg.commons.response.DataRespBody;
import com.ceg.commons.response.ResponseBody;
import com.ceg.dto.SysUserQuery;
import com.ceg.pojo.SysUserEntity;
import com.ceg.service.SysUserService;
import com.ceg.vo.SysUserVo;
import io.swagger.annotations.ApiOperation;
import jodd.util.StringUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;

/**
 * @Author：guozhenyu
 * @date: 2018/7/15.
 */
@Controller
@Slf4j
public class LoginController {

    @Autowired
    private SysUserService sysUserService;

    /**
     * 注册用户信息
     */
    @RequestMapping(value = "/ceg/user/registerPage")
    public String getUserRegisterPage(Model model){
      //  sysUserService.addUserInfo(sysUser);
        ResponseBody responseBody = new ResponseBody();
        model.addAttribute("responseBody",responseBody);
        model.addAttribute("sysUser",new SysUserEntity());
        return  "background/register";
    }

    @ApiOperation(value = "用户注册接口",notes = "用户注册")
    @RequestMapping(value = "/ceg/user/register",method = RequestMethod.POST)
    public String getUserRegister(SysUserQuery sysUserVo, Model model){
        ResponseBody responseBody = new ResponseBody();
        //校验校验邮箱是否存在 TODO
        SysUserVo userInfo = sysUserService.findUserByEmail(sysUserVo.getEmail());
        if (userInfo != null){
            responseBody.setMsg("用户邮箱已注册,请登录!");
            model.addAttribute("responseBody",responseBody);
            return "background/register";
        }
        SysUserVo userInfo1 = sysUserService.findUserInfo(sysUserVo);
        if (userInfo1 != null){
            responseBody.setMsg("用户名已存在,请换用其他用户名!");
            model.addAttribute("responseBody",responseBody);
            return "background/register";
        }
        SysUserVo userInfo2 = sysUserService.findUserInfo(sysUserVo);
        if (userInfo2 != null){
            responseBody.setMsg("手机号已注册,请换用其他用户名!");
            model.addAttribute("responseBody",responseBody);
            return "background/register";
        }
        SysUserEntity sysUser = new SysUserEntity();
        sysUser.setCreateTime(new Date());
        sysUser.setPassword(sysUserVo.getPassword());
        sysUser.setEmail(sysUserVo.getEmail());
        sysUser.setUserName(sysUserVo.getUserName());
        //MD5加密
        sysUser.setPassword(MD5Util.MD5EncodeUtf8(sysUser.getPassword()));
        sysUserService.addUserInfo(sysUser);
        return  "redirect:/ceg/user/loginPage";
    }

    @GetMapping(value = "/ceg/user/loginPage")
    public String userLoginPage(Model model){
        //TODO 判断用户是否存在 密码是否正确
        ResponseBody responseBody = new ResponseBody();
        model.addAttribute("responseBody",responseBody);
        return "background/login";
    }

    /**
     * 跳转到密码重置页面
     * @return
     */
    @RequestMapping(value = "/ceg/user/modifyUserPassword",method = {RequestMethod.POST,RequestMethod.GET})
    public String userResetPasswordPage(HttpServletRequest request,SysUserVo sysUserVo){
        HttpSession session = request.getSession();
        SysUserVo currentUser = UserRequest.getCurrentUser();
        //TODO 冗余
        SysUserEntity sysUser = sysUserService.findSysUserByUserId(currentUser.getId());
        sysUser.setPassword(MD5Util.MD5EncodeUtf8(sysUserVo.getPassword()));
        session.removeAttribute(Constants.CURRENT_USER);
        sysUser.setUpdateTime(new Date());
        sysUserService.updateUserInfo(sysUser);
        return "redirect:/ceg/user/loginPage";
    }

    /**
     * 登录
     * @param sysUserVo
     * @param request
     * @return 返回静态页面
     */
    @ApiOperation(value = "用户登录接口")
    @RequestMapping(value = "/ceg/user/backLogin",method = RequestMethod.POST)
    public String userLogin(SysUserQuery sysUserVo, HttpServletRequest request, Model model){
        ResponseBody responseBody = new ResponseBody();
        if (StringUtils.isEmpty(sysUserVo.getPassword())){
            responseBody.setCode("10002");
            responseBody.setMsg("用户密码不能为空！");
            model.addAttribute("responseBody", responseBody);
            return "background/login";
        }
        if (StringUtils.isEmpty(sysUserVo.getPassword())){
            responseBody.setCode("10003");
            responseBody.setMsg("用户名不能为空！");
            model.addAttribute("responseBody", responseBody);
            return "background/login";
        }
            HttpSession session = request.getSession();
            SysUserVo currentUser = UserRequest.getCurrentUser();
            SysUserVo user;
            if (currentUser != null && currentUser.getUserName().equals(sysUserVo.getUserName())){
                user = currentUser;
            }else {
                user = sysUserService.findUserInfo(sysUserVo);
                if (user == null){
                    user = sysUserService.findUserByMobile(sysUserVo.getUserName());
                    if (user == null){
                        user = sysUserService.findUserByEmail(sysUserVo.getUserName());
                    }
                }
            }
            if (StringUtils.isEmpty(user)) {
                responseBody.setCode("10002");
                responseBody.setMsg("用户信息不存在！");
                model.addAttribute("responseBody", responseBody);
                return "background/login";
            }
            if (!user.getPassword().equals(MD5Util.MD5EncodeUtf8(sysUserVo.getPassword()))){
                responseBody.setCode("10002");
                responseBody.setMsg("用户密码错误！");
                model.addAttribute("responseBody", responseBody);
                return "background/login";
            }else {
                sysUserVo.setPassword(user.getPassword());
                session.setAttribute(Constants.CURRENT_USER, sysUserVo);
            }
        //设置session
        model.addAttribute(Constants.CURRENT_USER,user);
        return "background/backMain";
    }

    //异步修改用户信息
    @RequestMapping(value = "/ceg/user/asynchronousModifyUserInfo",method = RequestMethod.POST)
    public DataRespBody modifyUser(SysUserQuery sysUser){
        //TODO 判断用户是否登录 获取用户的session
        SysUserEntity sysUserEntity = sysUserService.findSysUserByUserId(sysUser.getId());
        DataRespBody<String> dataRespBody = new DataRespBody<>();
        if (!StringUtils.isEmpty(sysUser.getUserName()) && !StringUtils.isEmpty(sysUser.getPassword())){
           if (sysUserEntity.equals(sysUser.getPassword())){
               sysUserEntity.setUpdateTime(new Date());
               sysUserEntity.setPassword(sysUser.getNewPassword());
               log.info("更新用户密码成功！");
               dataRespBody.setData("更新用户密码成功！");
           }
            //boolean istrue = sysUserService.updateUserInfo(sysUser);
        }
        if (!StringUtils.isEmpty(sysUser.getEmail())){
            //TODO 发送邮件
            sysUserEntity.setEmail(sysUser.getEmail());
            dataRespBody.setData("更新用户邮箱成功！");
        }
        if (!StringUtils.isEmpty(sysUser.getMobile())){
            //TODO 发送手机验证码
            sysUserEntity.setMobile(sysUser.getMobile());
            dataRespBody.setData("更新用户手机成功！");
        }
        sysUserService.updateUserInfo(sysUserEntity);
        return dataRespBody;
    }

    //同步修改用户信息
    @RequestMapping(value = "/ceg/user/synchronousModifyUser",method = RequestMethod.POST)
    public ModelAndView modifyUserPassword(SysUserQuery sysUser){
        //TODO 判断用户是否登录 获取用户的session
        SysUserEntity sysUserEntity = sysUserService.findSysUserByUserId(sysUser.getId());
        ModelAndView mav = new ModelAndView();
        if (!StringUtils.isEmpty(sysUser.getNewPassword()) && !StringUtils.isEmpty(sysUser.getPassword())){
            if (sysUserEntity.equals(sysUser.getPassword())){
                sysUserEntity.setPassword(sysUser.getNewPassword());
            }
            if (!StringUtil.isEmpty(sysUser.getAddress())){
                sysUserEntity.setAddress(sysUser.getAddress());
            }
//            if (!StringUtils.isEmpty(sysUser.getIdNumber())){
//                sysUserEntity.setIdNumber(sysUser.getIdNumber());
//            }
//            if (!StringUtils.isEmpty(sysUser.getLinkName())){
//                sysUserEntity.setLinkName(sysUser.getIdNumber());
//            }
            sysUserEntity.setUpdateTime(new Date());
        }
        sysUserService.updateUserInfo(sysUserEntity);
        mav.addObject(Constants.CURRENT_USER,sysUserEntity);
        mav.setViewName("background/setting");
        return mav;
    }
    /**
     * 用户注销
     * @param request
     * @return
     */
    @RequestMapping(value = "/ceg/user/logout")
    public String userlogout(HttpServletRequest request){
        HttpSession session = request.getSession();
        session.removeAttribute(Constants.CURRENT_USER);
        return  "redirect:/ceg/user/loginPage";
    }
}
