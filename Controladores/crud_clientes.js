import express  from "express"
import {con} from "../modelo/db.js"

var crud_cliente = ({});
crud_cliente.leer = (req, res) => {
    con.query('select * from Clientes c left join Sucursales s ON c.clienteid = s.clienteid',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('PaginaPrincipal',{resultado: results})
        }
    })        
}

var crud_truly = ({});
crud_truly.leer = (req, res) => {
    con.query('select * from Clientes c left join Sucursales s ON c.clienteid = s.clienteid',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('Trulyn',{resultado: results})
        }
    })        
}



crud_cliente.agregarC = (req, res) => {

    const btn_insert = req.body.Insert;
    const btn_actualizar =req.body.actualizar;
    const btn_borrar =req.body.borrar;
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
    if(btn_actualizar){
        con.query('update Clientes set ? where clienteid = ?',[ {clienteid:id,razonsocial:cliente,identificador:identificador,rtn:rtn},id], (error,results) =>{
            con.query('update Sucursales set ? where  clienteid = ? ',[ {clienteid:id,razonsocial:cliente,identificador:identificador,rtn:rtn},id], (error,results) =>{
                
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
     if(btn_borrar){
        con.query('DELETE FROM Sucursales WHERE Sucursales.clienteId = (SELECT  Clientes.clienteId FROM Clientes WHERE Clientes.clienteId = ?)',[ id ], (error,results) =>{
            con.query('delete  FROM Clientes WHERE Clientes.clienteId = ? ',[ id], (error,results) =>{
                
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
export {crud_truly};

