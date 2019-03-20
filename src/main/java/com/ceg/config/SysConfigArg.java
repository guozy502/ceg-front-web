package com.ceg.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/11.
 */
@Component
@ConfigurationProperties(prefix = "sys.argument")
public class SysConfigArg {
    private String uploadFolder;

    public String getUploadFolder() {
        return uploadFolder;
    }

    public void setUploadFolder(String uploadFolder) {
        this.uploadFolder = uploadFolder;
    }
}
