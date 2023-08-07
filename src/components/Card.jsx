function Card(props) {
    const imgStyle = {
        maxWidth: '100%',
        height: '180px',
        objectFit: 'cover',
    }
    const cardBlock = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '220px',
        marginTop: '40px',
    }
    const pStyle = {
        marginTop: '10px'
    }
    return (
        <div style={cardBlock}>
            <img style={imgStyle} src={props.cardImg} alt="card image" />
            <p style={pStyle}>{props.cardText}</p>
        </div>
    )
}

export default Card;