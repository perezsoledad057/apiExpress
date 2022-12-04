import { pool } from "../db.js"

export const getclientes = async(req, res) => {
try {
    const [rows]=await pool.query('select * from cliente')
    res.json(rows)

}catch(error){
return res.send('hay un error')
}
}

export const getcliente = async(req, res) => {
    try {
        const [rows]=await pool.query('select * from cliente where idcliente=?',req.params.id)
        if(rows.length<=0)
        return res.send('cliente no encontrado')
        res.json(rows)
    
    }catch(error){
    return res.send('hay un error')
    }
    }

export const postclientes = async(req, res) => {
    const {idcliente,ci,nombre,appaterno,apmaterno,direccion,celular,foto,fechaReg} = req.body
    try {
        const [rows]=await pool.query('insert into cliente(idcliente,ci,nombre,appaterno,apmaterno,direccion,celular,foto,fechaReg) values(?,?,?,?,?,?,?,?,?)',[idcliente,ci,nombre,appaterno,apmaterno,direccion,celular,foto,fechaReg])
        res.json(rows)
    
    }catch(error){
    return res.send('hay un error')
    }
    }
    

export const putclientes = (req, res) => {
    res.send('Modificando datos del cliente desde controllers')
}

export const patchclientes = async(req, res) => {
    const{id}=req.params
    const {ci,nombre,appaterno,apmaterno,direccion,celular,foto,fechaReg} = req.body
    try {
        const [rows]=await pool.query('update cliente set ci= IFNULL(?,ci),nombre= IFNULL(?,nombre),appaterno= IFNULL(?,appaterno),apmaterno= IFNULL(?,apmaterno),direccion= IFNULL(?,direccion),celular= IFNULL(?,celular),foto= IFNULL(?,foto),fechaReg= IFNULL(?,fechaReg) where idcliente=?',[ci,nombre,appaterno,apmaterno,direccion,celular,foto,fechaReg,id])
        if(rows.affectedRows === 0)
        return res.send('cliente no encontrado')
        res.json(rows)
    
    }catch(error){
    return res.send('hay un error')
    }
    }

export const deleteclientes = async(req, res) => {
    try {
        const [rows]=await pool.query('delete from cliente where idcliente=?',req.params.id)
        if(rows.affectedRows === 0)
        return res.send('cliente no encontrado')
        res.json(rows)
    
    }catch(error){
    return res.send('hay un error')
    }
    }
