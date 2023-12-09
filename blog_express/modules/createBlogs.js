const fs = require('fs')
const blogsadd = function(req,res) {

    var dataexp = fs.readFileSync('./data.json','utf8')

    if(!dataexp) {
        console.log('no data available')
        data = {}
        data.blogs = []

        var newblogtitle = req.body.title
        var newblogauthor = req.body.author
        var newblogdate = req.body.date
        var newBlogid = 1

        var newblog = {
            title: newblogtitle,
            author: newblogauthor,
            date: newblogdate,
            id : newBlogid
        }

        data.blogs.push(newblog)

        dataToFile = JSON.stringify(data)

        fs.writeFile('./data.json',dataToFile, function(err) {
            if (err) throw err;
            console.log('init blog created');
        });

    }
    else {
        var data = JSON.parse(dataexp)

        if(!data.blogs) {
            console.log('no blogs are available')
            data.blogs = []
            
            var newblogtitle = req.body.title
            var newblogauthor = req.body.author
            var newblogdate = req.body.date
            var newBlogid = 1
    
            var newblog = {
                title: newblogtitle,
                author: newblogauthor,
                date: newblogdate,
                id : newBlogid
            }
    
            data.blogs.push(newblog)
    
            dataToFile = JSON.stringify(data)
    
            fs.writeFile('./data.json',dataToFile, function(err) {
                if (err) throw err;
                console.log('init blog created');
            });
        }
        else {
            console.log('blogs are available')
            var newID
            var minID = data.blogs[0].id

            for(i = 0;i< data.blogs.length;i++) {
                if(data.blogs[i].id >= minID) {
                    newID = data.blogs[i].id + 1
                }
            }
            var newblogtitle = req.body.title
            var newblogauthor = req.body.author
            var newblogdate = req.body.date
            var newBlogid = newID

            var newblog = {
                title: newblogtitle,
                author: newblogauthor,
                date: newblogdate,
                id: newBlogid
            }

            data.blogs.push(newblog)

            dataToFile = JSON.stringify(data)

            fs.writeFile('./data.json',dataToFile, function(err) {
                if (err) throw err;
                console.log('init blog created');
            });


        }



    }
}

module.exports = blogsadd;
