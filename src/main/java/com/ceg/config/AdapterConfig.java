//package com.ceg.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.*;
//
///**
// * 拦截器注册类
// * @Author：guozhenyu(guozhenyu112@163.com)
// * @date: 2018/9/16.
// */
//@Configuration
//public class AdapterConfig extends WebMvcConfigurationSupport {
//
//    @Autowired
//    private LoginInterceptor loginInterceptor;
//
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        // 多个拦截器组成一个拦截器链
//        // addPathPatterns 用于添加拦截规则
//        // excludePathPatterns 用户排除拦截
//        //registry.addInterceptor( loginInterceptor).addPathPatterns("/**").excludePathPatterns("/ceg/front/**","/ceg/outApi/**","/ceg/static/**","/static/**","/ceg/user/loginPage");
////       registry.addInterceptor( loginInterceptor).excludePathPatterns("/ceg/front/**","/ceg/outApi/**","/ceg/user/loginPage","/ceg/user/backLogin").addPathPatterns("/**");
//        super.addInterceptors(registry);
//    }
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")//设置允许跨域的路径
//                .allowedOrigins("*")//设置允许跨域请求的域名
//                .allowCredentials(true)//是否允许证书 不再默认开启
//                .allowedMethods("GET", "POST", "PUT", "DELETE")//设置允许的方法
//                .maxAge(3600);//跨域允许时间
//    }
//
//    @Override
//    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
//        //TODO /webjars/** 路径
//        registry.addResourceHandler("swagger-ui.html")
//                .addResourceLocations("classpath:/META-INF/resources/");
//
//        registry.addResourceHandler("/webjars/**")
//                .addResourceLocations("classpath:/META-INF/resources/webjars/");
//        registry.addResourceHandler("/static/**","/ceg/static/**","/webjars/**").addResourceLocations("classpath:/static/");
//        super.addResourceHandlers(registry);
//    }
//}
