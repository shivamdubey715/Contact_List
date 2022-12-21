const express = require('express');
const path = require('path');
const { next } = require('process');
const port = 3000;

const app = express();

// app.use(function(req, res, next){
//     console.log("middleware 1` is called");
//     next();
// })
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'))

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

app.get('/practice', function (req, res) {
    return res.render('practice',
        {
            title: "I am flying"
        });
});



app.get('/', function (req, res) {
    return res.render('home', {
        title: "Contatc List",
        contact_List: contactList
    });
});


app.post('/create-contact', function (req, res) {
    // return res.redirect('/practice')
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
    res.redirect('/');
})

app.get('/delete-contact/:phone', function(req, res){
    console.log(req.params);
    let phone = req.params.photo;
})

app.listen(port, function (err) {
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log("Yay! my express server is running on port: ", port)
})

app.get('/delete-contact', function(req, res){
    console.log(req.query);
    let phone = req.query.phone;
    let contactindex = contactList.findIndex(contact => contact.phone == phone);

    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }

    return res.redirect('back');
});