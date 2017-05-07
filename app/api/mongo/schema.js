/*
 * 创建schema
 */

const {Schema} = require('mongoose');

// 创建博客分类
const categorySchema = new Schema({
  name: String,
  id: String
})


// 创建博客数据储存
const blogSchema = new Schema({
  title: String,
  content: String,
  rawContent: String,
  category: categorySchema,
  date: String
},{
	_id: false, // id为false 告诉mongoose不要操作_id
	strict: false
});


module.exports = {
	blogSchema,
	categorySchema
}

