import React from 'react';
import TableRow from './TableRow';


function Table() {
    return (
        <div className="table-responsive container-fluid">
            <table className="table table-striped table-sm table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Género</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow 
                        titulo="Bylly Elliot"
                        duracion={123}
                        rating={5}
                        genero={["Drama", "Comedia"]}
                        premios={2}    
                    />

                    <TableRow 
                        titulo="Alicia en el país de las maravillas"
                        duracion={142}
                        rating={4.8}
                        genero={["Drama", "Comedia", "Acción"]}
                        premios={2}    
                    />
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Género</th>
                        <th scope="col">Premios</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
};

export default Table;