import { useNavigate } from 'react-router-dom';
import { Result as Character } from '../interfaces/RickAndMortyInterface'

interface Props {
    character: Character
}

export const Card = ({ character }: Props) => {

    const { id, name, image, status } = character;

    const colorText = status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'orange'

    let navigate = useNavigate();

    const navigateTo = () => {
        navigate(`/character/${id}`);
    }

    return (
        <article className='my-2 col-6 col-md-4 col-xl-3'>
            <div className='card' onClick={navigateTo} role='button'>
                <img
                    src={image}
                    className='card-img-top'
                    alt='card description'
                />
                <div className='card-body'>
                    <h5 className='text-center'>
                        <b>{name!.toUpperCase()}</b>
                    </h5>
                    <h6>
                        <b>Status: </b>
                        <i className="fa-solid fa-circle" style={{ color: colorText }}></i>
                        <span style={{ color: colorText }}> {status}</span>
                    </h6>
                </div>
            </div>
        </article>
    )
}
