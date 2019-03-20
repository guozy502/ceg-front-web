package com.ceg.commons;

import java.util.UUID;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/7.
 */
public class Constants {

    public static final String CURRENT_USER = "currentUser";
    public static String getUUID() {
        String s = UUID.randomUUID().toString();
        //去掉符号 ""
        return s.substring(0,8)+s.substring(9,13)+s.substring(14,18)+s.substring(19,23);
    }

    public static final String VALIDATE_PHONE ="sms_phone";
    public static final String SEND_CODE_TIME = "send_code_time";
    public static final String VALIDATE_PHONE_CODE ="sms_phone_code";
}
