const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000
const ejs = require('ejs')


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render("index");
})


app.listen(port , () => {
    console.log(`Server listening to port ${port}`);
})
