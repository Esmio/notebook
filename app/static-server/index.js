/** 
 * @Author Simon
 * 静态资源服务
 */
const path = require('path');
const fs = require('fs');
 // expres框架 apo.use(static('public'))
let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);

let staticFunc = (url)=>{
	let map = {
		'/' : '/index.html',
		'/about' : '/about.html',
		'/list' : '/list.html'
	}
	url = map[url] || url
	let _path = getPath(url)
	let body = '';
	try{
		body = fs.readFileSync(_path)
	}catch(error){
		data = `NOT FOUND ${error.stack}`
	}
	return body
}

module.exports = staticFunc