function Header() {
    const headerStyling = {
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        backgroundImage: 'url(/img/headerBg.jpg)',
        position: 'relative',
        minHeight: '250px',
        display: 'flex',
        textAlign: 'center',
    }
    const dispBlock = {
        display: 'block',
        marginTop: '8px',
        marginBottom: '30px',
    }
    const headerTextStyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    }
    const headerBtnStyle = {
        padding: '16px 32px',
        backgroundColor: '#80adaa',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        borderRadius: '5px'
    }

    return (
        <div style={headerStyling}>
            <div style={headerTextStyle}>
                <h2>Title</h2>
                <p>Some about text <span style={dispBlock}>in two lines</span></p>
                <button style={headerBtnStyle}>Button</button>
            </div>
        </div>
    )
}

export default Header;