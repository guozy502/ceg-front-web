//package com.ceg.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.Ordered;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
///**
// * 项目启动的页面
// * @Author：guozhenyu(guozhenyu112@163.com)
// * @date: 2018/9/24.
// */
//@Configuration
//@EnableWebMvc
//public class DefaultViewPage implements WebMvcConfigurer {
//    @Override
//    public void addViewControllers( ViewControllerRegistry registry ) {
//        registry.addViewController( "/" ).setViewName( "index" );
//        registry.setOrder( Ordered.HIGHEST_PRECEDENCE );
//        WebMvcConfigurer.super.addViewControllers( registry );
//    }
//
//
//}
