//package com.ceg.service.impl;
//
//import com.ceg.pojo.SysUserEntity;
//import com.ceg.service.SysUserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
///**
// * @Author：guozhenyu(guozhenyu112@163.com)
// * @date: 2018/8/21.
// */
//@Service
//public class UserService  /*implements UserDetailsService*/ {
//
//    @Autowired
//    private SysUserService sysUserService;
//  /*  @Override
//    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
//        //根据用户名查询用户信息
//        SysUserEntity userInfo = sysUserService.findUserInfo(name);
//        if (userInfo == null){
//            throw new UsernameNotFoundException("username is not exists");
//        }
//        return userInfo;
//    }*/
//
//  @Transactional(readOnly = true)
//  public SysUserEntity querySysUserInfoByName(String name){
//      SysUserEntity userInfo = sysUserService.findUserInfo(name);
//      if (userInfo == null){
//          throw new UsernameNotFoundException("username is not exists");
//      }
//      return userInfo;
//  }
//}
