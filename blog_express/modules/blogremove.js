const fs = require('fs')

const blogremove = function(req,res) {
	var dataexp = fs.readFileSync('./data.json','utf8')
	var data = JSON.parse(dataexp)
	
	var delblogid = req.body.id - 0

	var elementfound = function(blog) {
		return blog.id === delblogid
	}

	var index = data.blogs.findIndex(elementfound)

	data.blogs.splice(index, 1)


	dataToFile = JSON.stringify(data) 
	
	fs.writeFile('./data.json', dataFile,function(err) {
		if (err) throw err;
		console.log('blogid removed');
	});
}
module.exports = blogremove();

