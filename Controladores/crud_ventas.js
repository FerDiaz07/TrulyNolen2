import express  from "express"
import {con} from "../modelo/db.js"

var crud_ventas = ({});
crud_ventas.leer = (req, res) => {
    con.query('select * from form',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('Ventas',{resultado: results})
        }
    })        
}