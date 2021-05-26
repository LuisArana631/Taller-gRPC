import React, { useEffect, useState } from "react";
import './App.css';
import socket from "./componentes/Socket";

function App() {
  const [comentarios, setComentarios] = useState([]);
  
  useEffect(() => {
    socket.on('Comentarios', comentarios => {
      setComentarios(comentarios)
    });


  }, [comentarios])

  return (
    <div className="App">
      <div class="card">
        <div class="card-header">
          <h6>Comentarios</h6>
        </div>
        <div class="table-responsive">
          <table class="table table-hover table-nowrap">
            <thead class="thead-light">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Comentario</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
              comentarios.slice(0).reverse().map( ( comentario ,i) => {
                  return (
                    <tr>
                      <td data-label="Job Title">
                        <img alt="..." height="15%" width="15%" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" class="avatar avatar-sm rounded-circle me-2"/>
                        <span class="text-heading"> 
                          {comentario.nombre}
                        </span>
                      </td>
                      <td data-label="Email">
                        <span>{comentario.correo}</span>
                      </td>
                      <td data-label="Phone">
                        <a class="text-current">{comentario.comentario}</a>
                      </td>
                    </tr>
                  );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
