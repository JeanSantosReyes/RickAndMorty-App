
export const Loading = () => {
    return (
        <div className='card mb-4' aria-hidden='true'>
            <div className='card-body'>
                <i className='fa-solid fa-image fa-4x fa-fade'></i>
                <h5 className='card-title placeholder-glow'>
                    <span className='placeholder col-6'></span>
                </h5>
                <p className='card-text placeholder-glow'>
                    <span className='placeholder col-7'></span>
                    <span className='placeholder col-4'></span>
                    <span className='placeholder col-4'></span>
                    <span className='placeholder col-6'></span>
                    <span className='placeholder col-8'></span>
                </p>
                <button className='btn btn-primary disabled placeholder col-6' />
            </div>
        </div>
    )
}
