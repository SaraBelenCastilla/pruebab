const mongoose = require('mongoose');

const Consultas =mongoose.model('Consultas',{Nombre:String,Motivo:String,Telefono:Number,Email:String,Usuario:String})
const LINK_CLIENTE = process.env.LINK_CLIENTE ||'http://localhost:5173/'
exports.getAllConsultas =(req,res,next)=>{
  
  
    try {
     Consultas.find().then(doc=>{
       res.json( {arrayConsultas:doc} );
     })
    } catch (err) {
        console.error('error en el find'+err.stack)
    }    
   
   }
exports.getCreateConsultas = (req,res,next)=>{
    let {Nombre,Motivo,Telefono,Email,Usuario} = req.body;
    
  try {
    const consultas = new Consultas({ Nombre:Nombre,Motivo:Motivo,Telefono:Telefono,Email:Email,Usuario:Usuario });
    consultas.save().then(doc=>{
      console.log('dato insertado correctamente:+doc');
      res.redirect(LINK_CLIENTE)
    })
  } catch (err) {
    console.error('error en el find'+err.stack)
  }
  
  }
exports.getConsulta = (req,res,next)=>{
    let id = req.params.id
     
      try {
        Consultas.find({_id:id}).then(doc =>{
          // console.log(doc[0]);
          if (doc.length !=1) {
            console.log('perfil no encontrado');
          } else {
            res.json(doc[0])
          }
        })
      } catch (err) {
        console.error('error en el find'+err.stack)
      }
  }
exports.getUpdateConsultas = (req,res,next)=>{
    let{Nombre,Motivo,Telefono,Email,_id,Usuario}=req.body;
    console.log(req.body);
  
    
  try {
    Consultas.updateOne({_id:_id},{$set:{Nombre:Nombre,Motivo:Motivo,Telefono:Telefono,Email:Email,Usuario:Usuario}}).then(result=>{
      res.json({status:'success'});
      console.log(result);
  })
  } catch (err) {
    console.error('error en el find'+err.stack)
  }
  }
exports.getDeleteConsultas = (req,res,next)=>{
 
    let {_id} = req.body;
  
    console.log(req.body);
  
      
     
  try {
    Consultas.findByIdAndDelete({_id: _id}).then(doc=>{
      console.log('Borrado con éxito: '+doc);
      res.json({status:'success'});
  });
  } catch (err) {
    console.error('error en el find'+err.stack)
  }
  }