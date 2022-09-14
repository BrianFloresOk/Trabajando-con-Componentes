import React from 'react';
import PropTypes from 'prop-types'


function ContentRowMovies(props) {
    return (
        <div className="row">
            <h3>{props.titulo}</h3>
            {
                props.cards.map((card, i) => {
                    return <div className="col-md-4 mb-4" key={card + i}>
                                <div className={`card ${card.borderColor} shadow h-100 py-2`} >
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{card.title}</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{card.cifra}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className={`${card.icono} fa-2x text-gray-300`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                })
            }

        </div >
    )
}


ContentRowMovies.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        cifra: PropTypes.number.isRequired,
        icono: PropTypes.string.isRequired,
        borderColor: PropTypes.oneOf(["border-left-warning", "border-left-success", "border-left-primary"]).isRequired
    }).isRequired),

}

ContentRowMovies.defaultProps = {
    cards: [{
        title: "Sin datos",
        cifra: 0,
        icono: "fas fa-award",
        borderColor: "border-left-warning"
    }]
}


export default ContentRowMovies;