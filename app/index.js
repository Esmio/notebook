/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');
const urlParser = require('./url-parser')
class App {
	constructor(){

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
			urlParser(request).then(()=>{
				return apiServer(request)
			}).then(val=> {
				if(!val){
					// Promiese
					return staticServer(request)
				}else{
					return val
				}
			}).then(val=>{
				let base = {'X-powered-by':'Node.js'};
				let body='';
				if(val instanceof Buffer){
					body = val
				}else{
					body = JSON.stringify(val);
					let finalHeader = Object.assign(base,{
						'Content-Type': 'application/json'
					})
					response.writeHead(200, 'resolve OK', finalHeader)	
				}
				response.end(body);
			})
		}	
	}
}

module.exports =  App