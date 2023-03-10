import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='navbar bg-dark navbar-expand-lg'>
            <div className='container'>

                <Link to='/characters' className='navbar-brand'>
                    <img src='/assets/logo.png' alt='Rick and Morty' style={{ maxWidth: '45px' }} />
                </Link>

                <div className='d-flex align-items-center'>
                    <button type='button' className='btn btn-dark px-3 me-2'>
                        Docs
                    </button>
                    <button type='button' className='btn btn-dark me-3'>
                        About
                    </button>
                </div>

            </div>
        </nav>
    )
}
