var express =require('express');
const app=express();
var jwt = require('jsonwebtoken');
const config = require('config.json');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
}); 

// users hardcoded for simplicity, store in a db for production applications
const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'John update', lastName: 'Sha' },
    { id: 2, username: 'sysuser', password: 'sysuser', firstName: 'Poll', lastName: 'Rock' },
    { id: 3, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }
    
    ];




app.get('/api',function(req,res){
    res.json({
        text:'my api!'
    });
});
app.get('/api/getAllUsers',function(req,res){
    const user = users.find(u => u.username === "test" && u.password === "test");
    if (user) {
       // const token= jwt.sign({user},'my_secret_key');
       //const token= jwt.sign({ username: user.username,firstname:user.firstName }, 'shhhhh');
       const { password, ...userWithoutPassword } = users;
       res.json({
        ...userWithoutPassword,
        
    })
    }
})

app.post('/api/login',function(req,res){   
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password);
    
    if (user) {
       const token= jwt.sign({ username: user.username,firstname:user.firstName }, 'my_secret_key');
       const { password, ...userWithoutPassword } = user;
       res.json({
        ...userWithoutPassword,
        token
    })
    }
    else
    {
        res.json({
            "msg":"The username or password is incorrect"
            
        })
    }
        
})


app.get('/api/protected', ensureToken ,function(req,res){
    jwt.verify(req.token,'my_secret_key',function(err,data){
        if(err){
            res.sendStatus(403);
        }
        else
        {
            res.json({
                text:'this is protected',
                data:data
            })
        }   
    })
    
})

function ensureToken(req,res,next){
    const beareHeader =req.headers['authorization'];
    if(typeof beareHeader!=='undefined'){
        const bearer = beareHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else
    {
        res.sendStatus(403);
    }

}

app.get('/api/destroytoken' ,function(req,res){
    //jwt.destroy(req.token);    
    
})

app.listen(3000,function(){
 console.log('App listening on port 3000 !');
});
