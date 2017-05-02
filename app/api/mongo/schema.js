/*
 * 创建schema
 */

const {Schema} = require('mongoose');

// 创建博客数据储存
const blogSchema = new Schema({
  title: String,
  content: String,
  rawContent: String,
  category: categorySchema,
  date: String
},{
	// _id: false,
	strict: false
});

// 创建博客分类
const categorySchema = new Schema({
  name: String,
  id: String
})

module.exports = {
	blogSchema,
	categorySchema
}

