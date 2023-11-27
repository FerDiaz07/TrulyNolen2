import express  from "express"
import {con} from "./modelo/db.js"


const app = express();

app.use(express.static('public'))
app.use(express.static('src'))

app.set('views', './views')
app.set('view engine', 'ejs')


app.listen('3000',function(){ 
    console.log('Aplicacion Iniciada : http://localhost:3000/')
})

app.get('/',function(req,res){
    con.query('select * from Clientes',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('index',{resultado: results})
        }
    })        
})

app.get('/login',function(req,res){

    res.render('login')
        
})

app.get('/registro',function(req,res){

    res.render('registro')
        
})

app.get('/main',function(req,res){

    con.query('select * from Clientes',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('PaginaPrincipal',{resultado: results})
        }
    }) 
        
})

app.get('/ventas',function(req,res){

    res.render('ventas')
        
})

app.get('/truly',function(req,res){

    res.render('Trulyn')
        
})

app.get('/postventa',function(req,res){

    res.render('PostVenta')
        
})


app.get('/calendario',function(req,res){

    res.render('calendario')
        
})