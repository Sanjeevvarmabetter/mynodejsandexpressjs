const fs = require('fs')

const userremove = function(req,res) {
	var dataexp = fs.readFileSync('./data.json','utf8')
	var data = JSON.parse(dataexp)

	console.log(data)
	//we need to retrive the user id
	
		
	var deluserid = req.body.id - 0


	var elementFound = function(user) {
		return user.id === deluserID
	}

	var index = data.users.findIndex(elementFound)

	data.users.splice(index, 1)

	dataToFile = JSON.stringify(data)

	fs.writeFile('./data.json',dataToFile, function(err) {
		if (err) throw err;
		console.log("userId removed");
	});
}

module.exports = userremove();
