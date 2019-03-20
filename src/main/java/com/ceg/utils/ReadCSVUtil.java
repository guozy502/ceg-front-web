package com.ceg.utils;

import com.csvreader.CsvReader;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * 读取csv文件类
 * @Author：guozhenyu(guozhenyu112@163.com)
 * @date: 2018/8/11.
 */
public class ReadCSVUtil {
        // 参数：文件路径
        private String file_path;

        // 构造函数
       protected ReadCSVUtil(){}

    public ReadCSVUtil(String file_path){
            this.file_path = file_path;
        }

        // getter and setter
        public String getFile_path() {
            return file_path;
        }

        public void setFile_path(String file_path) {
            this.file_path = file_path;
        }

        // read()函数实现具体的读取CSV文件内容的方法
        public List<String> read() {

            List<String> result = new ArrayList<>();

            try {
                // 创建CSV读对象
                CsvReader csvReader = new CsvReader(file_path);
                while (csvReader.readRecord()){
                    // 读取每一行数据，以逗号分开
                    // System.out.println(csvReader.getRawRecord());
                    result.add(csvReader.getRawRecord());
                }
                csvReader.close();
                return result;

            } catch (IOException e) {
                e.printStackTrace();
                return result;
            }
        }

    }
