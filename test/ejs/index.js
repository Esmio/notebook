const path = require('path');
const ejs = require('ejs')


const html = `hello 
	<% if(world.match('x')){ %>
	<%- world %>
	<% }%>
	<%- include('test') %>
	<%= hhh %>`
const world = 'xxxx'

const f1 = ejs.compile(html,{
	filename: path.resolve(__filename)
})


const finalStr = f1({
	world: 'xxxx',
	hhh: '<script>alert(1)</script>',
	inside: 'dddd'
})

console.log('-----', finalStr)