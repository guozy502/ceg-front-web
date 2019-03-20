package com.ceg.commons.exceptions;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/7/22.
 */
public class ServiceException extends Exception {
    public ServiceException(String resp) {
        super(resp);
    }
}
