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
const queryBlogs = require('./modules/queryBlogs')
//define the routes


app.get('/',(req,res) => {
	res.send("Blog Home page")
})



app.get('/blog/:year?/:month?/:day?',(req,res) => {

	url = req.url
	year = req.params.year
	month = req.params.month
	day = req.params.day

	var allBlogs = queryBlogs.queryAllBlogs()
	if(url == '/blog') {
			//display all the blogs
			if(allBlogs.length == 0) {
				res.send('no post found')
			}else {
				res.send(allBlogs)
			}
	}
	else if (url == '/blog'+'/'+year) {
		//display the blogs from that year
		const blogsYear = queryBlogs.queryBlogsYear(allBlogs)
		if(blogsYear.length == 0) {
			res.send('no post found')
		}else {
			res.send(blogsYear)
		}
	}

	else if(url == '/blog'+'/'+year+'/'+month) {
		const blogyearmonth = queryBlogs.queryBlogsYearMonth(allBlogs)
		if(blogyearmonth.length == 0) {
			res.send("no post found")
		}else {
			res.send(blogyearmonth)
		}
	}

	else if(url == '/blog'+year+'/'+month+'/'+day) {
			const blogyearmonthday = queryBlogs.queryBlogsYearMonthDay(allBlogs)

			if(blogyearmonthday.length = 0) {
				res.send('noo post is found')
			}else {
				res.send(blogyearmonthday)
			}
	}
	else {
		res.status(404).send('not founddadadadawddadadawdadw')
	}
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

