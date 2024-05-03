const mongoose = require('mongoose');

const Productos =mongoose.model('Productos',{Nombre:String,Src:String})

exports.getAllProductos = (req,res,next)=>{

  
 
    try {
      Productos.find().then(doc=>{
        res.json( {arrayProductos:doc} );
        
      }) 
    } catch (err) {
        console.error('error en el find'+err.stack)
    }
  
  }
