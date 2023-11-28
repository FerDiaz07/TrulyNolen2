import express  from "express"
import { crud_cliente } from "./Controladores/crud_clientes.js";
import { crud_ventas} from "./Controladores/crud_ventas.js";

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))
app.use(express.static('src'))
app.use(express.static('Controladores'))

app.set('views', './views')
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000;

app.listen(port,"0.0.0.0",function(){ 
    console.log('Aplicacion Iniciada : http://localhost:3000/')
})

app.get('/',function(req,res){
    res.render('index')       
})

app.get('/login',function(req,res){

    res.render('login')
        
})

app.get('/registro',function(req,res){

    res.render('registro')
        
})

app.get('/main',crud_cliente.leer);

app.get('/ventas',crud_ventas.leer);

   
        


app.get('/ventas',function(req,res){

    res.render('ventas')
        
})

app.get('/truly',function(req,res){

    res.render('Trulyn')
        
})

app.post('/crud_c',crud_cliente.agregarC);

app.get('/postventa',function(req,res){

    res.render('PostVenta')
        
})


app.get('/calendario',function(req,res){

    res.render('calendario')
        
})
