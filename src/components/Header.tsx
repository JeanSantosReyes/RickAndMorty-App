import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            {/* Navbar */}
            <Navbar />

            {/* Background image */}
            <div
                className='d-flex justify-content-center align-items-center'
                style={{
                    height: '250px',
                    backgroundColor: '#212529',
                    backgroundImage: 'url(/assets/back-header.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='text-white'>
                    <Link
                        to='/characters'
                        className='display-5'
                        style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        The Rick and Morty API
                    </Link>
                </div>
            </div>
        </header>
    )
}
