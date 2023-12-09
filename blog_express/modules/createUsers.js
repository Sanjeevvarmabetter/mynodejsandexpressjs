//load the fs module

const fs = require('fs')

const userAdd = function(req, res) {
    var dataexp = fs.readFileSync('./data.json','utf8')

    if(!dataexp) {
        console.log("no data available");
        var data = {}
        data.users = []

        var newusername = req.body.name
        var newlastname = req.body.lastname
        var newuseremail = req.body.email
        var newuserid = 100

        var newUser = {
            name: newusername,
            lastname: newlastname,
            email: newuseremail,
            id: newuserid

          }

          data.users.push(newUser)

          dataToFile = JSON.stringify(data)
        //write the datafile

        fs.writeFile('./data.json', dataToFile,function(err) {
            if (err) throw err;
            else {
                console.log('user added');
            }
         });


    }
    else {
        var data = JSON.parse(dataexp)
        if(!dataexp) {
            console.log("no data available");
            var data = {}
            data.users = []
    
            var newusername = req.body.name
            var newlastname = req.body.lastname
            var newuseremail = req.body.email
            var newuserid = 100
    
            var newUser = {
                name: newusername,
                lastname: newlastname,
                email: newuseremail,
                id: newuserid
    
              }
    
              data.users.push(newUser)
    
              dataToFile = JSON.stringify(data)

            fs.writeFile('./data.json', dataToFile,function(err) {
                if (err) throw err;
                else {
                    console.log('user added');
                }
             });
    }
}
}
module.exports = userAdd;
