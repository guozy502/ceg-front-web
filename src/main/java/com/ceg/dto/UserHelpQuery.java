package com.ceg.dto;

import lombok.Data;
import lombok.ToString;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/12.
 */
@Data
@ToString
public class UserHelpQuery {
    private Long id;
    private String name;
    private String content;
}
