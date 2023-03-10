
export const Footer = () => {
    const anio = new Date().getFullYear();
    return (
        <footer className='bg-dark text-center text-white'>
            <div className='p-3'>
                Jean Santos © {anio}
            </div>
        </footer>
    )
}