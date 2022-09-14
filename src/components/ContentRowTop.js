import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies 
						cards={[
							{
								title: "Movies in Data Base",
								borderColor: "border-left-primary",
								cifra: 21,
								icono: "fas fa-film"
							},
							{
								title: "total awards",
								borderColor: "border-left-success",
								cifra: 79,
								icono: "fas fa-award"
							},
							{
								title: "Actors quantity",
								borderColor: "border-left-warning",
								cifra: 49,
								icono: "fas fa-user"
							}
						]}


					/>
					{/*<!-- End movies in Data Base -->*/}
					
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastMovieInDb />
						{/*<!-- End content row last movie in Data Base -->*/}
						<GenresInDb />
						{/*<!-- Genres in DB -->*/}

					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;