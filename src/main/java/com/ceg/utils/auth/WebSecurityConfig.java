//package com.ceg.utils.auth;
//
//import com.ceg.service.impl.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.csrf.CsrfFilter;
//import org.springframework.web.filter.CharacterEncodingFilter;
//
///**
// * 用户安全管理类
// * @Author：guozhenyu(guozhenyu112@163.com)
// * @date: 2018/8/21.
// */
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true) //开启security注解
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//    @Bean
//    @Override
//    protected AuthenticationManager authenticationManager() throws Exception {
//        return super.authenticationManager();
//    }
//
//    @Override
//    public void configure(WebSecurity web) throws Exception {
//        //解决静态资源被拦截的问题
//        web.ignoring().antMatchers("/somewhere/**");
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        //允许所有用户访问"/"和"/home"
//        http.authorizeRequests()
//                .antMatchers("/", "/home").permitAll()
//                //其他地址的访问均需验证权限
//                .anyRequest().authenticated()
//                .and()
//                .formLogin()
//                //指定登录页是"/login"
//                .loginPage("/login")
//                //登录成功后默认跳转到
//                .defaultSuccessUrl("/welcome")
//                .permitAll()
//                .and()
//                .logout()
//                .logoutUrl("/logout")
//                //退出登录后的默认url是"/login"
//                .logoutSuccessUrl("/login")
//                .permitAll();
//        //解决非thymeleaf的form表单提交被拦截问题
//        http.csrf().disable();
//
//        //解决中文乱码问题
//        CharacterEncodingFilter filter = new CharacterEncodingFilter();
//        filter.setEncoding("UTF-8");
//        filter.setForceEncoding(true);
//        http.addFilterBefore(filter,CsrfFilter.class);
//    }
//
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(systemUserService()).passwordEncoder((PasswordEncoder) passwordEncoder());
//        //也可以将用户名密码写在内存，不推荐
//       // auth.inMemoryAuthentication().withUser("admin").password("111111").roles("USER");
//    }
//
//    /**
//     * 设置用户密码的加密方式为MD5加密
//     */
//    @Bean
//    public Md5PasswordEncoder passwordEncoder() {
//        Md5PasswordEncoder md5PasswordEncoder = new Md5PasswordEncoder();
//        return new Md5PasswordEncoder();
//    }
//    /**
//     *从数据库中读取用户信息
//     */
//    @Bean
//    public UserDetailsService systemUserService() {
//        return new UserService();
//    }
//}
