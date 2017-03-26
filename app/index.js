/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
class App {
	constructor(){

	}
	initServer(){
		//初始化的工作
		return (request,response)=>{
			let { url } = request;
			//每个请求逻辑 根据url 进行代码分发

			let body = staticServer(url);
			response.writeHead(200, 'resolve OK', {'X-powered-by': 'Node.js'})
			response.end(body);
		}	
	}
}

module.exports =  App