package com.ceg.service.othersService;

import com.ceg.commons.exceptions.ImgException;
import org.springframework.web.multipart.MultipartFile;

/**
 * 图片上传service
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/20.
 */
public interface UpImgService {

    String updateHead(MultipartFile file)throws ImgException;
}
