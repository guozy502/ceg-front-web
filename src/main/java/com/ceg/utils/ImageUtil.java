package com.ceg.utils;

import com.ceg.commons.Constants;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

/**
 * 文件工具类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/9/7.
 */
public class ImageUtil {
    /**
     * 保存文件，直接以multipartFile形式
     * @param multipartFile
     * @param path 文件保存绝对路径
     * @return 返回文件名
     * @throws IOException
     */
    public static String saveImg(MultipartFile multipartFile, String path) throws IOException {
        File file = new File(path);
        if (!file.exists()) {
            file.mkdirs();
        }
        FileInputStream fileInputStream = (FileInputStream) multipartFile.getInputStream();
        String fileName = DateUtil.getSHC() + ".png";
        multipartFile.transferTo(new File(fileName));
        //BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(path + File.separator + fileName));
//        byte[] bs = new byte[1024];
//        int len;
//        while ((len = fileInputStream.read(bs)) != -1) {
//            bos.write(bs, 0, len);
//        }
//        bos.flush();
//        bos.close();
        return fileName;
    }
}
