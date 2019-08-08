const express=require('express');
const bodyParser=require('body-parser')

const app=express();



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(request,response)=>{

    response.send({mesagge:'Esto esta funcionando'})

    
});


app.get('/home',(request,response)=>{

    response.send({mesagge:'Soy Luis'})

    
});

// URLSearchParams, o sea parametros
//:uid es un binding

app.get('/user/:uid',(request,response)=>{

    console.log(request.params);
    const uid =request.params.uid;
    response.send({mesagge:uid})


});

app.get('/search',(req,res)=>{

    console.log(req.query);
    const {q,color,vidas}=req.query;
    res.send({q,color,vidas})



});

app.post('/create/user',(req,res)=>{

    console.log(req.body);
    const {name,age,last_name}=req.body;
    res.send({
    id:19,
    name,
    age,
    last_name
    })



});


/////////////////////////////////////Ejercicio 1///////////////////////////////


app.get('/api',(req,res)=>{
  
    if(res.statusCode ===200){
    res.send({mesagge: 'Hola Mundo'})
    }else{
        console.log(res.statusCode)

    }

});


// /////////////////////////////////////Ejercicio 2///////////////////////////////


app.get('/api/suma',(req,res)=>{
  


    if(res.statusCode ===200){

    const {num1,num2}=req.query;
    const resultado=Number(num1)+Number(num2);
    res.send({ num1,num2,resultado})
    }else{
        console.log(res.statusCode)

    }

});


/////////////////////////////////////Ejercicio 3///////////////////////////////


app.get('/api/:usuario',(request,response)=>{

    console.log(request.params);
    const usuario =request.params.usuario;
    response.send({mesagge:usuario})


});

app.listen(4000,()=>{

    console.log('Server on port 4000')
});