/*
 *创建model
 */
const mongoose = require('mongoose')
const { blogSchema, categorySchema } = require('./schema')

const BlogModel = mongoose.model('Blog', blogSchema);
const CategoryModel = mongoose.model('Category', categorySchema);
const $_saveBlog = blog=>{
	return BlogModel.findOneAndUpdate({title: blog.title}, blog, {
		upsert: true
	}).exec()
		.then(_blog=>{
		return {
			status: 1,
			data: _blog
		}
	})
}

const $_saveCategory = category=>{	
	return CategoryModel.findOneAndUpdate({
		name: category.name
	}, category).then(_category=>{
		console.log(category, _category)
		return {
			status: 1,
			data: _category
		}
	})
}

const $_getCategoryList = query=>{
	return CategoryModel.find().exec().then(categoryList=>{
		return {
			status: 1,
			data: categoryList
		}
	})
}

module.exports = {
	$_saveBlog,
	$_saveCategory,
	$_getCategoryList
}