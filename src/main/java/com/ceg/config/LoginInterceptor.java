package com.ceg.config;

import com.ceg.commons.Constants;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * 登录拦截器类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/19.
 */
@Component
public class LoginInterceptor extends HandlerInterceptorAdapter{

    @Override
    public boolean preHandle(HttpServletRequest request,HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();
        //判断用户是否登录
        if (session.getAttribute(Constants.CURRENT_USER) != null){
            return true;
        }else {
             response.sendRedirect("/ceg/user/loginPage");
             return false;
        }
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        HttpSession session = request.getSession();
        //判断用户是否登录
        if (session.getAttribute(Constants.CURRENT_USER) == null){
            response.sendRedirect("/ceg/user/loginPage");
        }
        super.postHandle(request,response,handler,modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }

}
