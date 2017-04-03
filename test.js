const assert = require('assert')

const p = Promise.resolve(1);
const p1 = p.then(val=>{
	console.log(val)
	return val + 1
})

const p2 = p1.then(val=>{
	console.log(val)
	assert.equal(val, 4)
})