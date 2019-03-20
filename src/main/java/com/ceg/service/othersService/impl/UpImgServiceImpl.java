package com.ceg.service.othersService.impl;

import com.ceg.commons.exceptions.ImgException;
import com.ceg.service.othersService.UpImgService;
import com.ceg.utils.OSSClientUtil;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/10/20.
 */
@Service("upImgService")
public class UpImgServiceImpl implements UpImgService {

    @Override
    public String updateHead(MultipartFile file) throws ImgException {
        if (file == null || file.getSize() <= 0) {
            throw new ImgException("file不能为空");
        }
        OSSClientUtil ossClient=new OSSClientUtil();
        String name = ossClient.uploadImg2Oss(file);
        String imgUrl = ossClient.getImgUrl(name);
        String[] split = imgUrl.split("\\?");
        return split[0];
    }

}
