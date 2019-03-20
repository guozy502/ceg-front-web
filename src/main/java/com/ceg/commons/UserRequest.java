package com.ceg.commons;

import com.ceg.vo.SysUserVo;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * 获取当前用户信息
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/1.
 */
public class UserRequest {
    public static SysUserVo getCurrentUser(){
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        HttpSession session = request.getSession();
        SysUserVo user = (SysUserVo)session.getAttribute(Constants.CURRENT_USER);
        return user;
    }
}
