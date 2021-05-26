const express = require('express');
const router = express.Router();

const app = express();

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use('/', router);

router.post('/', async (req, res) => {
    const { nombre, correo, comentario } = req.body;
    console.log({recibo: 'Siu', nombre:nombre, correo:correo, comentario:comentario});
    res.json({recibo: 'Siu', nombre:nombre, correo:correo, comentario:comentario});
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});