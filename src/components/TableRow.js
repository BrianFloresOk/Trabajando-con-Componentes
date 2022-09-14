function TableRow(props) {
    let generos;

    if(props.genero.length > 0) {
        generos = props.genero.map((genero, i) => {
              return <li key={genero + i}>{genero}</li>
            })
        
    } else {
        generos = props.genero
    }

    return (
            <tr>
                <td>{props.titulo}</td>
                <td>{props.duracion}</td>
                <td>{props.rating}</td>
                <td>{generos}</td>
                <td>{props.premios}</td>
            </tr>
    )
}

export default TableRow;