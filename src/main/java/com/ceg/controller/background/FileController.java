package com.ceg.controller.background;

import com.ceg.commons.CodeEnum;
import com.ceg.commons.ResultEnum;
import com.ceg.commons.exceptions.BusinessException;
import com.ceg.commons.exceptions.ImgException;
import com.ceg.commons.response.DataRespBody;
import com.ceg.config.WeAppConfig;
import com.ceg.pojo.SysUserEntity;
import com.ceg.service.SysUserService;
import com.ceg.service.othersService.UpImgService;
import com.ceg.utils.ImageUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;

/**
 * 文件controller
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/7.
 */
@Controller


@Slf4j
public class FileController {

    @Autowired
    private SysUserService sysUserService;
//    @Autowired
//    private WeAppConfig weAppConfig;

    @Autowired
    private UpImgService upImgService;
    @RequestMapping(value = "/ceg/background/upload/image",method = RequestMethod.POST)
    @ResponseBody
    public DataRespBody uploadImg(@RequestParam(value = "file") MultipartFile file,Long userId) {
//        if (file.isEmpty() || StringUtils.isBlank(file.getOriginalFilename())) {
//            throw new BusinessException(ResultEnum.IMG_NOT_EMPTY);
//        }
//        String contentType = file.getContentType();
//        if (!contentType.contains("")) {
//            throw new BusinessException(ResultEnum.IMG_FORMAT_ERROR);
//        }
//        String root_fileName = file.getOriginalFilename();
//        log.info("上传图片:name={},type={}", root_fileName, contentType);
//        //处理图片
//        //获取路径 TODO
//        String return_path ="";// ImageUtil.getFilePath(currentUser);
//        String filePath = weAppConfig.getLocation() ;
//        log.info("图片保存路径={}", filePath);
//        String file_name ;
//        try {
//            file_name = ImageUtil.saveImg(file, filePath);
//            DataRespBody respBody = new DataRespBody();
//            respBody.setCode(CodeEnum.IS_SUCCESS.getValue());
//            if(StringUtils.isNotBlank(file_name)){
//                respBody.setCode(CodeEnum.IS_SUCCESS.getValue());
//                respBody.setData(return_path+File.separator+file_name);
//            }
//            log.info("返回值：{}",respBody);
//            // SysUserEntity currentUser = sysUserService.getCurrentUser();
        try {
           DataRespBody respBody = new DataRespBody();
            String s = upImgService.updateHead(file);
            SysUserEntity user = sysUserService.findSysUserByUserId(userId);
            //TODO 更新用户信息
            user.setImgUrl(s);
            user.setUpdateTime(new Date());
            sysUserService.updateUserInfo(user);
            return respBody;
        } catch (ImgException e) {
            e.printStackTrace();
        }
        return null;
    }
}
