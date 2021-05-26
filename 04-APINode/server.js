const express = require('express');
const http = require('http');
const socketio =  require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comentario = require('./models/comentario');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const servidor = http.createServer(app);
const io = socketio(servidor, {
    cors: {
        origin: "*"
    },
});

mongoose.connect('mongodb+srv://MERN_USER:jYIIuvMAThkrcVuO@cluster0.obe6m.mongodb.net/tallerGRPC?authSource=admin&replicaSet=atlas-2iv4ab-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true });



io.on('connection', socket => {
    console.log("Conectado");

    interval = setInterval(() => {
        Comentario.find().exec().then(
            x => socket.emit("Comentarios", x));
    }, 500);

    socket.on('disconnect', () => { 
        console.log("Desconectado");
    });
});

servidor.listen(4000, () => console.log('Server levantado en el puerto 4000'));
