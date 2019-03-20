package com.ceg.config;

import lombok.Data;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 短信配置类信息
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/11/25.
 */
@Component
@ConfigurationProperties(prefix = "sys.sms")
@Data
@ToString
public class SmsConfig {

    private String appCode;
    private String url;
    private String tpl_id;
    private Integer connTimeout;
    private Integer readTimeout;

}
