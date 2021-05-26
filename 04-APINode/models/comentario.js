const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comentario = mongoose.model('Comentario', new Schema({
    nombre: String,
    correo: String,
    comentario: String
}));

module.exports = Comentario;