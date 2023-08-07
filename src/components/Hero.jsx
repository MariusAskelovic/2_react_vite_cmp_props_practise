function Hero(props) {
    const divBgColor = {
        backgroundColor: props.heroBgColor,
        color: 'white',
        padding: '20px 40px',
    }
    return (
        <div>
            {props.heroBgColor === 'red' && <div style={divBgColor}>
                <h1>{props.heroText}</h1>
                <h2>{props.subtitleText}</h2>
            </div >}
            {props.heroBgColor === 'blue' && <div style={divBgColor}>
                <h1>{props.heroText}</h1>
                <h2>{props.subtitleText}</h2>
            </div >}

        </div>
    )
}

export default Hero;