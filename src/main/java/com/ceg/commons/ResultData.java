package com.ceg.commons;

import lombok.Data;

/**
 * 返回值封装类
 * @Author：guozhenyu
 * @date: 2018/7/21.
 */
@Data
public class ResultData<T> {
    private boolean isSuccess;
    private T data;
    private String errorMessage;
}
