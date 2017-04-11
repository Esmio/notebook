/** 
 * @Author Simon
 * 静态资源服务
 */
const path = require('path');
const fs = require('fs');
 // expres框架 apo.use(static('public'))
let getPath = url => path.resolve(process.cwd(), 'public', `.${url}`);

let staticFunc = (ctx)=>{
	let {url} = ctx.req;
	let {resCtx} = ctx;
	return new Promise((resolve, reject)=>{
		if(!url.match('action')){
			if(url==='/'){
				url = '/index.html'
			}
			let _path = getPath(url)
			let body = fs.readFile(_path, (err,data)=> {
				if(err) {
					resCtx.body = `NOT FOUND ${err.stack}`;
				}
				resCtx.body = data;
				resolve()
			})
		}else{
			resolve()
		}
	})
}

module.exports = staticFunc