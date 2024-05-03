const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rutasPerfiles = require('./routes/routerPerfiles')
const rutasConsultas = require('./routes/routerConsultas')
const rutasUsuarios =require('./routes/routerUser')
const rutasProductos = require('./routes/routerProductos')
require('dotenv').config();
const PORT = process.env.PORT || 3000
const DB_USER_CONNECTION =process.env.DB_USER_CONNECTION || 'mongodb+srv://Sara:$ara123@cluster0.syylwu5.mongodb.net/Wooh'
const LINK_CLIENTE = process.env.LINK_CLIENTE ||'http://localhost:5173/'
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect(DB_USER_CONNECTION);




  const connection = mongoose.connection;
  connection.once('open',()=>{
    console.log('conexion a la BD exitosa');
  })

  connection.on('error',(err)=>{
    console.log('ha habido un error',+err);
  })






app.use('/',rutasUsuarios)
app.use('/miPerfil',rutasPerfiles)
app.use('/consultas',rutasConsultas)
app.use('/productos',rutasProductos)


const manejadorErrores =(err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).send('Algo ha salido mal!')

}
app.use(manejadorErrores);

 

 rutasConsultas.use((req,res,next)=>{
   res.status(400).send('Ruta no encontrada para Consultas')
 })
 rutasConsultas.use((err,req,res,next)=>{
   console.error(err.stack)
   res.status(500).send('Error del servidor en Consultas')
 })


 rutasProductos.use((req,res,next)=>{
   res.status(400).send('Ruta no encontrada para Productos')
 })
 rutasProductos.use((err,req,res,next)=>{
   console.error(err.stack)
   res.status(500).send('Error del servidor en Productos')
 })

 rutasPerfiles.use((req,res,next)=>{
   res.status(400).send('Ruta no encontrada para Perfiles')
 })
 rutasPerfiles.use((err,req,res,next)=>{
   console.error(err.stack)
   res.status(500).send('Error del servidor en Perfiles')
 })






  // const usuarios = [
  //   { nombre: "Susana", password: "cualquiera" },
  //   { nombre: "Sara", password: "$ara123" },
  //   { nombre: 'Jesus', password: 'Mortadelo'},
  //   { nombre: 'Noemi', password: 'FilemonPi.'}
  // ];


// app.post('/', (req,res)=>{
  
  
//   Usuarios.find().then(doc=>{
//     console.log(doc);
//     console.log('dato encontrado correctamente:+doc');
//     res.json( doc)
//     // res.redirect(process.env.LINK_CREAR_PERFILES)
//   }
 
// })
app.get('/',(req,res)=>{
 
 
    res.json('funcionando')

})

// app.post('/',(req,res,next)=>{
  
//   let {Usuario,Password} = req.body
//   console.log(req.body);
//   let login = false
 
   

//  try {
//    Usuarios.find({Usuario:Usuario,Password:Password}).then(results =>{
//       console.log(results);
      
     
//     if (results.length > 0) {
//       login = true
//       res.json({state:'success'});
//     }else{
//       login =false
//       res.json({state:'failed'});
//     }
  
//    })
//  } catch (error) {
//   res.status(500).json('Error en servidor')
//  }
    

// })

   

    //   arrayUsuarios.forEach(Usuario => {
        
     

    //     if (Usuario.Usuario == Usuario && Usuario.Password == Password) {

    //      login = true;

    //     }

    //   })

    //   if (login) {
      
    //     res.json({state:'success'});

    //   }else{

    //     res.json({state:'failed'});
      
    //   }

    // });
 
//  app.get('/miPerfil',(req,res,next)=>{
 
//    try {
//      Perfiles.find().then(doc=>{
//        res.json( {arrayPerfiles:doc} );
      
//      })
//    } catch (error) {
//     res.status(500).json('Error en Express')
//    }
     
//  })


// app.get('/consultas',(req,res,next)=>{
  
  
//  try {
//   Consultas.find().then(doc=>{
//     res.json( {arrayConsultas:doc} );
//   })
//  } catch (error) {
//   res.status(500).json('Error en Consultas')
//  }    

// })



//  app.post('/miPerfil',(req,res,next)=>{
//    let {nombre,apellidos,direccion} = req.body;
  
//  try {
//   const perfil = new Perfiles({ Nombre:nombre,Apellidos:apellidos,Direccion:direccion });
//    perfil.save().then(doc=>{
//     console.log('dato insertado correctamente:+doc');
//     res.redirect(process.env.LINK_CREAR_PERFILES)
//   })
//  } catch (error) {
//   res.status(500).json('Error en servidor')
//  }

//  })

 

//  app.get('/miPerfil/:id',(req,res,next)=>{
//    let id = req.params.id
    
//      try {
//        Perfiles.find({_id:id}).then(doc =>{
//          // console.log(doc[0]);
//          if (doc.length !=1) {
//            console.log('perfil no encontrado');
//          } else {
//            res.json(doc[0])
//          }
//        })
//      } catch (error) {
//       res.status(500).json('Error en servidor')
//      }
//  })
 
// app.get('/consultas/:id',(req,res,next)=>{
//   let id = req.params.id
   
//     try {
//       Consultas.find({_id:id}).then(doc =>{
//         // console.log(doc[0]);
//         if (doc.length !=1) {
//           console.log('perfil no encontrado');
//         } else {
//           res.json(doc[0])
//         }
//       })
//     } catch (error) {
//       res.status(500).json('Error en servidor')
//     }
// })

// app.put('/Consultas',(req,res,next)=>{
//   let{Nombre,Motivo,Telefono,Email,_id,Usuario}=req.body;
//   console.log(req.body);

  
// try {
//   Consultas.updateOne({_id:_id},{$set:{Nombre:Nombre,Motivo:Motivo,Telefono:Telefono,Email:Email,Usuario:Usuario}}).then(result=>{
//     res.json({status:'success'});
//     console.log(result);
// })
// } catch (error) {
//   res.status(500).json('Error en servidor')
// }
// })

// app.delete('/Consultas',(req,res,next)=>{
 
//   let {_id} = req.body;

//   console.log(req.body);

    
   
// try {
//   Consultas.findByIdAndDelete({_id: _id}).then(doc=>{
//     console.log('Borrado con éxito: '+doc);
//     res.json({status:'success'});
// });
// } catch (error) {
//   res.status(500).json('Error en servidor')
// }
// })

// app.post('/Consultas',(req,res,next)=>{
//   let {Nombre,Motivo,Telefono,Email,Usuario} = req.body;
  
// try {
//   const consultas = new Consultas({ Nombre:Nombre,Motivo:Motivo,Telefono:Telefono,Email:Email,Usuario:Usuario });
//   consultas.save().then(doc=>{
//     console.log('dato insertado correctamente:+doc');
//     res.redirect(process.env.LINK_CREAR_CONSULTAS)
//   })
// } catch (error) {
//   res.status(500).json('Error en servidor')
// }

// })

//  app.put('/miPerfil',(req,res,next)=>{

 
//    let {Nombre,Apellidos,Direccion,_id} = req.body;
    
//    console.log(req.body)

  
//    try {
//      Perfiles.updateOne({_id: _id}, {$set: {Nombre:Nombre,Apellidos:Apellidos,Direccion:Direccion} }).then(result=>{
//        res.json({status:'success'});
//    })
//    } catch (error) {
//     res.status(500).json('Error en servidor')
//    }
//  })
 

//  app.delete('/miPerfil',(req,res,next)=>{
 
//    let {_id} = req.body;

    
    
//      try {
//        Perfiles.findByIdAndDelete({_id: _id}).then(doc=>{
//          console.log('Borrado con éxito: '+doc);
//          res.json({status:'success'});
//      });
//      } catch (error) {
//       res.status(500).json('Error en servidor')
//      }

//  })
 
// app.get('/productos',(req,res,next)=>{

  
 
//   try {
//     Productos.find().then(doc=>{
//       res.json( {arrayProductos:doc} );
      
//     }) 
//   } catch (error) {
//     res.status(500).json('Error en Productos')
//   }

// })


// app.get('/productos/detallesProducto',(req,res)=>{
//   let id = req.query.id;
//   res.json(accesoriosMascotas[id])

// })
// app.post('/productos/nuevoProducto',(req,res)=>{
//   let nombre = req.body.nombre;
//   let precio = req.body.precio;
//   let descripcion = req.body.descripcion;
//   let id = accesoriosMascotas.length

//   let objeto ={
//     id:id,
//     nombre:nombre,
//     precio:parseInt(precio),
//     descripcion:descripcion
//   }
//   accesoriosMascotas.push(objeto)
//   res.redirect('http://localhost:5173');
  

// })

app.listen(PORT,()=>{
    console.log('Servidor Encendido')
})