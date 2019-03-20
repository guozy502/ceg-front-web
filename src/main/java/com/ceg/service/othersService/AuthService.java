package com.ceg.service.othersService;


import com.ceg.commons.exceptions.ServiceException;

import java.io.UnsupportedEncodingException;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/7/22.
 */
public interface AuthService {
    public abstract String getAccessToken(String code) throws ServiceException;
    public abstract String getOpenId(String accessToken);
    public abstract String refreshToken(String code);
    public abstract String getAuthorizationUrl() throws UnsupportedEncodingException;
    //public abstract JSONObject getUserInfo(String accessToken, String openId);
}
