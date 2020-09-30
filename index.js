const express = require('express');
const cors = require('cors');
require('dotenv').config();

//1 crea el servidor de express
const app = express();

//4 configurar cors
app.use( cors() );

//3 rutas ( get, post, put, delete )
app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: 'hola mundo',
  });
});



console.log(process.env);





//2 poner a la escucha el servidor
app.listen(process.env.PORT, () =>
  console.log("Server Online, puerto: ", process.env.PORT)
);