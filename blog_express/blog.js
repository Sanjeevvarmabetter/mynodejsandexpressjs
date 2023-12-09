//blog.js


//load the http module

const http = require('http')

//load the express module
const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false}))

//we need to load the module we created

const createUser = require('./modules/createUsers')
const removeuser = require('./modules/userremove')
const createBlogs = require('./modules/createBlogs')
const removeblogs = require('./modules/blogremove')
//define the routes


app.get('/',(req,res) => {
	res.send("Blog Home page")
})
//after adding the createusers we need to init the route for that 

app.post('/createusers',(req,res) => {
	//we need to access the createuser module
	createUser(req,res)
	res.send('user has been added successfully')
})


app.post('/removeuser',(req,res) => {
	//we need to access the createuser module
	removeuser(req,res)
	res.send('user has been removed successfully')
})

app.post('/createblogs',(req,res) =>  {
	createBlogs(req,res)
	res.send("Hello from blog module")
});

app.post('/removeblog',(req,res) => {
	//we need to access the createuser module
	removeblogs(req,res)
	res.send('blog has been removed  successfully')
})

const port = 3001;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
//server = http.createServer(app);
//server.listen(3000);

