import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCharacter } from '../services/RickAndMortyService';
import { Result as CurrentCharacter } from '../interfaces/RickAndMortyInterface';

export const Character = () => {

    const { id } = useParams();

    const [character, setCharacter] = useState<CurrentCharacter>({})

    const { name, image, status, species, gender, location, origin } = character;

    const colorText = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'orange'

    const getCurrentCharacter = (id: string) => {
        getCharacter(id)
            .then(({ data }) => {
                setCharacter(data)
            })
            .catch((e: Error) => console.log(e))
    }

    useEffect(() => {
        if (id) getCurrentCharacter(id)
    }, [id])

    return (
        <div className='d-flex justify-content-center align-items-center my-5'>
            <div className="card" >
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={image} className="img-fluid rounded my-2 my-md-0" alt={name} />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>

                            <h6 className="card-text">
                                <i className="fa-solid fa-circle" style={{ color: colorText }}></i>
                                <span style={{ color: colorText }}> {status} - {species}</span>
                            </h6>

                            <h6 className="card-text">
                                <span>Gender: {gender}</span>
                            </h6>

                            <h6 className="card-text">
                                <span>Last known location: {location?.name}</span>
                            </h6>

                            <h6 className="card-text">
                                <span>First seen in: {origin?.name}</span>
                            </h6>

                            <Link to='/characters' className='btn btn-primary'>Go to characters</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
