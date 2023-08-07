function Hero(props) {
    const divBgColor = {
        backgroundColor: props.heroBgColor,
        color: 'white',
        padding: '20px 40px',
    }
    return (
        <div style={divBgColor}>
            <h1>{props.heroText}</h1>
            <h2>{props.subtitleText}</h2>
        </div >
    )
}

export default Hero;