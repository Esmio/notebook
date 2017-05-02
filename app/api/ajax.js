/*
 * 采用mongoose处理ajax
 */

let Router = require('./router')
let {$_saveBlog, $_saveCategory, $_getCategoryList} = require('./mongo')
// 获取分类列表
Router.get('/categoryList.action', ctx=>{
	return $_getCategoryList()
})
// 添加分类
Router.post('/category.action', ctx=>{
	let category = ctx.reqCtx.query
	return $_saveCategory(category)
})
// 添加博客
Router.post('/blog.action', ctx=>{
	let blog = ctx.reqCtx.body
	return $_saveBlog(blog)
})

module.exports = Router