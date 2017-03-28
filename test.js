

// 学习Promise

// typeof Promise === 'function'

// prototype ==> then/catch

// 静态方法 ===> all/race/resolve/reject

// 第一步 new Promise
/*
let p = new Promise((resolve, reject)=> {
	setTimeout(reject, 3000, 'hello world');
})
console.log(p)
// 两个参数 第一个处理resolve结果，第二个处理reject结果
// 1.将这些回调函数 存入处理处理queue
// 2.如果promise已经是fulfilled或者reject的状态了，autoRun
var another = p.then(val=>
	console.log(`resolve val is ${val}`)
,val=>
	console.log(`reject val is ${val}`)
)
// 处理reject的结果
setTimeout(()=>{
	console.log(p)
	p.catch(val=>console.log(`catch val is ${val}`))
},2000)

console.log(another instanceof Promise)
*/

var t = Promise.resolve(1);
var another = Promise.resolve(t)
console.log(another)
