/*
 *创建model
 */
const mongoose = require('mongoose')
const { blogSchema, categorySchema } = require('./schema')

const BlogModel = mongoose.model('Blog', blogSchema);
const CategoryModel = mongoose.model('Category', categorySchema);


exports.$_saveBlog = blog=>{
	let condition = {title: blog.title}
	let {id} = blog
	if(id) {
		condition = {_id: transObjectId(id)}
	}
	blog.date = new Date().toLocaleString()
	return BlogModel.findOneAndUpdate(condition, blog, {
		upsert: true,
		new: true
	}).exec()
		.then(db_blog=>{
		return {status: 1, data: db_blog}
	})
}

exports.$_saveCategory = category=>{
	return CategoryModel.findOneAndUpdate({
		name: category.name
	}, category,{
		upsert: true,
		new: true
	}).then(_category=>{
		return {
			status: 1,
			data: _category
		}
	})
}

exports.$_getCategoryList = query=>{
	return CategoryModel.find(query).exec().then(categoryList=>{
		return {
			status: 1,
			data: categoryList || []
		}
	})
}

exports.$_getBlogDetail = query=>{
	let condition = {
		_id : mongoose.Types.ObjectId(query.id)
	}
	return BlogModel.findOne(condition).then(blog=>{
		return {
			status: 1,
			data: blog
		}
	})
}
// 获取博客列表
exports.$_getBlogList = query=>{
	return BlogModel.find(query).exec().then(blogList=>{
		return {
			status: 1,
			data: blogList
		}
	})
}
// 删除博客
exports.$_deleteBlog = query=>{
	let condition = {
		_id : mongoose.Types.ObjectId(query.id)
	}
	return BlogModel.remove(condition).exec().then(blog=>{
		return {
			status: 1,
			data: '删除成功'
		}
	})
}