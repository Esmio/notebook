/** 
 * @Author Simon
 * 静态资源服务
 */
const path = require('path');
const fs = require('fs');
 // expres框架 apo.use(static('public'))
let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);

let staticFunc = (url)=>{
	return new Promise((resolve, reject)=>{
		if(url==='/'){
			url = '/index.html'
		}
		let _path = getPath(url)
		let body = fs.readFile(_path, (err,data)=> {
			if(err) {
				reject(`NOT FOUND ${err.stack}`)
			}
			resolve(data)
		})
	})
}

module.exports = staticFunc