/*
 * 创建schema
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

// 创建博客数据储存
exports.blogSchema = new Schema({
  title:  String,
  content:   String,
  rawContent: String,
  category: String,
  date: { type: String, default: ()=>{
    return new Date().toLocaleString()
  }}
});

// 创建博客分类
exports.categorySchema = new Schema({
  category: String,
})


