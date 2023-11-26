const Card = (props) => {
    return (
        <div className='card'>
            <h2>
                '{props.h2}'
                <h3>
                    '{props.h3}'
                </h3>
            </h2>
        </div>
    )
}

export default Card