package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/12/28.
 */
@Data
@ToString
public class ClientSoftwareQuery {
    private Long id;
    private String name;
    private String downloadUrl;
    private String size;
    private String platform;
    private Boolean deleted;
    private String description;
    private String version;
}
