const express = require ('express'); // Importando express
const {useApi} = require('./router');
const app = express(); // inicializando el servidor
const PORT = process.env.PORT || 3000; // Puerto de escucha del servidor

// Middleware para analizar cuerpos en formato JSON
app.use(express.json())

useApi(app);
app.get('/',(req,res) =>{
  res.send('mi proyecto en express') // Respuesta de la ruta de inicio
}) // Ruta de inicio del server para obtener una respuesta

app.listen(PORT,() =>{
  console.log('Escuchando en el puerto ' + PORT)
})  //Sirve para escuchar el puerto cada vez que se inicia el servidor
