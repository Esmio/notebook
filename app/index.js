/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');
class App {
	constructor(){

	}
	initServer(){
		//初始化的工作
		return (request,response)=>{
			let { url } = request;
			//每个请求逻辑 根据url 进行代码分发
			// 返回字符串或者buffer
			let body = '',
				headers = {};
			if(url.match('action')){
				body = JSON.stringify(apiServer(url));
				headers = {
					'Content-Type': 'application/json'
				}
			}else{
				body = staticServer(url);
			}
			let finalHeader = Object.assign(headers, {'X-powered-by': 'Node.js'})
			response.writeHead(200, 'resolve OK', finalHeader)
			response.end(body);
		}	
	}
}

module.exports =  App