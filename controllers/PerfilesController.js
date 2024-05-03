
const mongoose = require('mongoose');


const Perfiles = mongoose.model('Perfiles',{ Nombre:String,Foto:String })

exports.getAllPerfiles =(req,res,next)=>{
 
    try {
      Perfiles.find().then(doc=>{
        res.json( {arrayPerfiles:doc} );
       
      })
    } catch (err) {
      console.error('error en el find:'+err.stack)
    }
      
  }

exports.getPerfil = (req,res,next)=>{
    let id = req.params.id
     
      try {
        Perfiles.find({_id:id}).then(doc =>{
          // console.log(doc[0]);
          if (doc.length !=1) {
            console.log('perfil no encontrado');
          } else {
            res.json(doc[0])
          }
        })
      } catch (err) {
        console.error('error en el find:'+err.stack)
      }
  }
exports.getUpdatePerfiles =(req,res,next)=>{

 
    let {Nombre,Apellidos,Direccion,_id} = req.body;
     
    console.log(req.body)
 
   
    try {
      Perfiles.updateOne({_id: _id}, {$set: {Nombre:Nombre,Src:Src} }).then(result=>{
        res.json({status:'success'});
    })
    } catch (err) {
      console.error('error en el find:'+err.stack)
    }
  }
exports.getDeletePerfiles = (req,res,next)=>{
 
    let {_id} = req.body;
 
     
     
      try {
        Perfiles.findByIdAndDelete({_id: _id}).then(doc=>{
          console.log('Borrado con éxito: '+doc);
          res.json({status:'success'});
      });
      } catch (err) {
        console.error('error en el find:'+err.stack)
      }
 
  }