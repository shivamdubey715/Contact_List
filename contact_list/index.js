const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

var contactList = [
    {
        name: "Shivam",
        phone: "123456"
    },
    {
        name: "Shubham",
        phone: "123456"
    },
    {
        name: "Chandan",
        phone: "123456"
    }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    return res.render('home', {
        title: "I am flying",
        contact_List: contactList
    });
})
app.get('/practice', function (req, res) {
    return res.render('practice', { title: "I am flying" });
});

app.post('/create-contact', function(req, res){
    return res.redirect('/practice')
})

app.listen(port, function (err) {
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log("Yay! my express server is running on port: ", port)
})
