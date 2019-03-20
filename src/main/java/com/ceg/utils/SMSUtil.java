package com.ceg.utils;

import com.ceg.config.SmsConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * 短信发送工具类
 *
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/11/25.
 */
@Component
public class SMSUtil {
    @Autowired
    private  SmsConfig smsConfig;


    public  String send(String phone, String code) throws Exception {
        Map<String, String> headers = new HashMap<String, String>();
        //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
        headers.put("Authorization", "APPCODE " + smsConfig.getAppCode());
        Map<String, String> querys = new HashMap<String, String>();
        querys.put("mobile", phone.trim());
        querys.put("param", "code:" + code);
        querys.put("tpl_id", smsConfig.getTpl_id());
        String response = HttpClientUtils.postForm(smsConfig.getUrl(), querys, headers, smsConfig.getConnTimeout(), smsConfig.getReadTimeout());
        //TODO 添加日志信息
        return response;
    }
}
