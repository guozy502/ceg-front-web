//package com.ceg.utils;
//
//import com.aliyun.oss.ClientConfiguration;
//import com.aliyun.oss.OSSClient;
//import com.aliyun.oss.common.comm.Protocol;
//import com.aliyun.oss.model.ObjectMetadata;
//import com.aliyun.oss.model.PutObjectResult;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.web.multipart.MultipartFile;
//
//import javax.annotation.PostConstruct;
//import java.io.IOException;
//import java.io.InputStream;
//import java.net.URL;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.Random;
//
///**
// * 阿里云oos 存储
// * @Author：guozhenyu(guozhenyu112@163.com)
// * @date: 2018/10/20.
// */
//@Slf4j
//public class AliyunOssUtil {
//
//    @Value("${oss.endpoint}")
//    private String endpoint;
//    @Value("${oss.accessKeyId}")
//    private String accessKeyId;
//    @Value("${oss.accessKeySecret}")
//    private String accessKeySecret;
//    @Value("${oss.bucketName_yxym}")
//    private String yxymBucketName;
//    @Value("${oss.bucketName_yxym_public}")
//    private String yxymBucketPublicName;
//
//    @Value("${oss.picRealmName}")
//    private String picRealmName;
//
//    private volatile OSSClient ossClient;
//
//    public String getPicRealmName() {
//         return picRealmName;
//    }
//   public void setPicRealmName(String picRealmName) {
//         this.picRealmName = picRealmName;
//   }
//
//  @PostConstruct
//    public void init() {
//        ClientConfiguration conf = new ClientConfiguration();
//        conf.setProtocol(Protocol.HTTPS);
//        ossClient = new OSSClient(endpoint, accessKeyId, accessKeySecret, conf);
//    }
//
//    public String upload(MultipartFile file, String type, Date date) throws IOException {
//        String originalFilename = file.getOriginalFilename();
//        InputStream inputStream = file.getInputStream();
//        return this.upload(inputStream, originalFilename, type, date);
//    }
//
//    public String upload(InputStream inputStream, String name, String type, Date date) throws IOException {
//        // 修改名称, 名称加上毫秒数
//        int pIdx = name.lastIndexOf(".");
//        String preName = name.substring(0, pIdx);
//        String subName = name.substring(pIdx).toLowerCase();
//        name = preName + "_" + System.currentTimeMillis() + subName;
//
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
//        SimpleDateFormat sdf2 = new SimpleDateFormat("dd");
//        StringBuilder fn = new StringBuilder();
//        fn.append(type).append("/").append(sdf.format(date)).append("/").append(sdf2.format(date))
//                .append("/").append(name);
//
//        String path = fn.toString();
//        // TODO 这里需要检查md5的值
//        uploadFile(inputStream, path);
//        return path;
//    }
//
//    public String upload(InputStream inputStream, String type, Date date,String fileName) throws IOException {
//        // 修改名称, 名称加上毫秒数
//        String currentTimeMillis = "_"+System.currentTimeMillis();
//        //pack/201707/26/20170726_0GJPW112_Z0GJPW1122017072600001_3000_1501077871359.zip
//        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
//        SimpleDateFormat sdf2 = new SimpleDateFormat("dd");
//        StringBuilder fn = new StringBuilder();
//        fn.append(type).append("/").append(sdf.format(date)).append("/").append(sdf2.format(date))
//                .append("/").append(fileName).append(currentTimeMillis);
//
//        String path = fn.toString();
//        // TODO 这里需要检查md5的值
//        uploadFile(inputStream, path);
//        return path;
//    }
//
//    /**
//      * 上传到OSS服务器 如果同名文件会覆盖服务器上的
//      * @param instream 文件流
//      * @param fileName 文件名称 包括后缀名
//      * @return 出错返回"" ,唯一MD5数字签名
//      */
//            private String uploadFile(InputStream instream, String fileName) throws IOException {
//        // 小文件上传, 该值就是 md5 结果 .
//        String ret = "";
//        try {
//            // 创建上传Object的Metadata
//            ObjectMetadata objectMetadata = new ObjectMetadata();
////          objectMetadata.setContentLength(instream.available()); // 这样子获取文件大小不严谨
//            objectMetadata.setCacheControl("no-cache");
//            objectMetadata.setHeader("Pragma", "no-cache");
////           objectMetadata.setContentType(OSSClientUtil.getcontentType(fileName.substring(fileName.lastIndexOf("."))));
//            objectMetadata.setContentDisposition("inline;filename=" + fileName);
//
//            // 上传文件
//            PutObjectResult putResult = ossClient.putObject(yxymBucketName, fileName, instream, objectMetadata);
//            ret = putResult.getETag();
//        } finally {
//            try {
//                if (instream != null) {
//                    instream.close();
//                }
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//        return ret;
//    }
//
//    /**
//      * 获得临时访问url .
//      * @param key
//      * @return
//      */
//            public String getUrl(String key) {
//        return getUrl(key, System.currentTimeMillis() + 1000l * 60 * 30);
//    }
//
//    /**
//      * 获得临时访问url .
//      * @param key
//      * @param expireAt
//      * @return
//      */
//            public String getUrl(String key, Long expireAt) {
//        URL url = ossClient.generatePresignedUrl(yxymBucketName, key, new Date(expireAt));
//        if (url != null) {
//            return url.toString();
//        }
//        return null;
//    }
//
//    public String uploadImg2Oss(OSSFileDir ossFileDir, MultipartFile file) throws java.lang.Exception {
//        SimpleDateFormat sdf=new SimpleDateFormat("yyyyMM");
//        String filedir = ossFileDir.getDir() + "/" + (sdf.format(new Date())) + "/";
//        if (file.getSize() > 1024 * 1024) {
//            throw new Exception("上传图片大小不能超过1M！");
//        }
//        String originalFilename = file.getOriginalFilename();
//        String substring = originalFilename.substring(originalFilename.lastIndexOf(".")).toLowerCase();
//        Random random = new Random();
//        String name = random.nextInt(10000) + System.currentTimeMillis() + substring;
//        try {
//            InputStream inputStream = file.getInputStream();
//            this.uploadFile2OSS(filedir,inputStream, name);
//            return filedir + name;
//        } catch (Exception e) {
//            e.printStackTrace();
//            throw new Exception("图片上传失败");
//        }
//    }
//
//    /**
//      * 上传到OSS服务器 如果同名文件会覆盖服务器上的
//      * @param instream 文件流
//      * @param fileName  文件名称 包括后缀名
//      * @return 出错返回"" ,唯一MD5数字签名
//      */
//            public String uploadFile2OSS(String filedir,InputStream instream, String fileName) {
//        String ret = "";
//        try {
//            // 创建上传Object的Metadata
//            ObjectMetadata objectMetadata = new ObjectMetadata();
//            objectMetadata.setContentLength(instream.available());
//            objectMetadata.setCacheControl("no-cache");
//            objectMetadata.setHeader("Pragma", "no-cache");
//            objectMetadata.setContentType(getcontentType(fileName.substring(fileName.lastIndexOf("."))));
//            objectMetadata.setContentDisposition("inline;filename=" + fileName);
//            // 上传文件
//            PutObjectResult putResult = ossClient.putObject(yxymBucketPublicName, filedir + fileName, instream, objectMetadata);
//            ret = putResult.getETag();
//        } catch (IOException e) {
//             log.error(e.getMessage(), e);
//        } finally {
//            try {
//                if (instream != null) {
//                    instream.close();
//                }
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//        return ret;
//    }
//
//    /**
//      * Description: 判断OSS服务文件上传时文件的contentType
//      * @param FilenameExtension   文件后缀
//      * @return String
//      */
//    public static String getcontentType(String FilenameExtension) {
//        if (FilenameExtension.equalsIgnoreCase("bmp")) {
//            return "image/bmp";
//        }
//        if (FilenameExtension.equalsIgnoreCase("gif")) {
//            return "image/gif";
//        }
//        if (FilenameExtension.equalsIgnoreCase("jpeg") || FilenameExtension.equalsIgnoreCase("jpg")
//                || FilenameExtension.equalsIgnoreCase("png")) {
//            return "image/jpeg";
//        }
//        if (FilenameExtension.equalsIgnoreCase("html")) {
//            return "text/html";
//        }
//        if (FilenameExtension.equalsIgnoreCase("txt")) {
//            return "text/plain";
//        }
//        if (FilenameExtension.equalsIgnoreCase("vsd")) {
//            return "application/vnd.visio";
//        }
//        if (FilenameExtension.equalsIgnoreCase("pptx") || FilenameExtension.equalsIgnoreCase("ppt")) {
//            return "application/vnd.ms-powerpoint";
//        }
//        if (FilenameExtension.equalsIgnoreCase("docx") || FilenameExtension.equalsIgnoreCase("doc")) {
//            return "application/msword";
//        }
//        if (FilenameExtension.equalsIgnoreCase("xml")) {
//            return "text/xml";
//        }
//        return "image/jpeg";
//    }
//
//}
