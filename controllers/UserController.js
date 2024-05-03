const mongoose = require('mongoose');
const Usuarios = mongoose.model('Usuarios',{ Usuario:String,Password:String })

const LINK_CLIENTE = process.env.LINK_CLIENTE ||'http://localhost:5173/'
exports.getUser = (req,res)=>{
  
    let {Usuario,Password} = req.body
    console.log(req.body);
    let login = false
   
     
  
   try {
     Usuarios.find({Usuario:Usuario,Password:Password}).then(results =>{
        console.log(results);
        
       
      if (results.length > 0) {
        login = true
        res.json({state:'success'});
      }else{
        login =false
        res.json({state:'failed'});
      }
    
     })
   } catch (err) {
    res.json('error en la ruta de usuarios')
   }
      
  
  }


  exports.getCreateUsuario =(req,res,next)=>{
    let {Usuario,Password} = req.body;
    console.log(req.body);
   
  try {
   const usuario = new Usuarios ({ Usuario :Usuario ,Password :Password });
    usuario.save().then(doc=>{
     console.log('dato insertado correctamente:+doc');
     res.redirect(LINK_CLIENTE)
   })
  } catch (err) {
    console.error('error en el find:'+err.stack)
  }
 
  }


  

 