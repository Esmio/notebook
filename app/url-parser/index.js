/*
 *url-parser
 *处理客户端数据
 */
 // request: query + body + method
const Url = require('url')

module.exports = (ctx)=>{
	let {method, url} = ctx.req;
	let {reqCtx} = ctx;
	method = method.toLowerCase();
	Object.assign(reqCtx, Url.parse(url, true), {method})
	return Promise.resolve({
		then: (resolve, reject)=>{
			if(method==='post'){
				let data = '';
				ctx.req.on('data', (chunk)=>{
					data += chunk;
				}).on('end',()=>{
					reqCtx.body = JSON.parse(data)
					resolve()
				})
			}else {
				resolve()
			}
		}
	})
}