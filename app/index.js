/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');

class App {
	constructor(){
		this.middlewareArr = [];
		//设计一个空的Promise
		this.middlewareChain = Promise.resolve();
	}
	use(middleware) {
		this.middlewareArr.push(middleware);
	}
	//创建Promise链条
	composeMiddleware(context) {
		let {middlewareArr} = this
		for(let middleware of middlewareArr){
			this.middlewareChain = this.middlewareChain.then(()=>{
				return middleware(context);
			})
		}
		return this.middlewareChain
	}
	initServer(){
		//初始化的工作
		return (request,response)=>{
			//每个请求逻辑 根据url 进行代码分发
			// 返回字符串或者buffer
			request.context = {
				query: {},
				body: '',
				method: 'get'
			}
			let context = {
				req: request,
				reqCtx: {
					body: '',//post 请求的数据
					query: {}// 处理客户端get请求
				},
				res: response,
				resCtx: {
					hasUser: false,
					statusMessage: 'resolve ok',
					statusCode: 200,// 状态码
					headers: {
						cookie: ''
					},// response的返回报文
					body: '',// 返回给前端的内容区  
				}
			};
			// Promise + request + response
			// @TODO
			this.composeMiddleware(context)
				.then(()=>{
					let { body, headers, statusCode, statusMessage } = context.resCtx;
					let base = {'X-powered-by':'Node.js'};
					response.writeHead(statusCode, statusMessage, Object.assign(base, headers))
					response.end(body);
				})
		}	
	}
}

module.exports =  App