import express  from "express"
import {con} from "../modelo/db.js"

var crud_cliente = ({});
crud_cliente.leer = (req, res) => {
    con.query('select * from Clientes',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('PaginaPrincipal',{resultado: results})
        }
    })        
}

crud_cliente.agregarC = (req, res) => {

        const btn_insert = req.body.Insert;
        const id = req.body.id;
        const cliente = req.body.cliente;
        const identificador = req.body.identificador;
        const rtn = req.body.rtn;
        const direccion = req.body.direccion;
        const contacto = req.body.contacto;
        const telefono = req.body.telefono;

        if(btn_insert){
            con.query('insert into Clientes set ?',{clienteid:id,razonsocial:cliente,identificador:identificador,rtn:rtn}, (error,results) =>{

                con.query('insert into Sucursales set ?',{direccion:direccion,contacto:contacto,telefono:telefono,clienteid:id}, (error,results) =>{
                    
                    if (error) {
                        console.log(error);
                    }
                })

                if (error) {
                    console.log(error);
                }else{            
                    res.redirect('/truly');
                }
            });



        }
         
};




export {crud_cliente};



