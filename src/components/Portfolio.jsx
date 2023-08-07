import CardsMap from "./CardsMap";
import { portfolioArr } from "../App";
function Portfolio() {
    const portfolioStyle = {
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px',
        textAlign: 'center',
    }
    const paragStyle = {
        lineHeight: '24px',
        fontWeight: 'lighter',
        color: '#777',
        fontSize: '18px',
    }

    return (
        <div style={portfolioStyle}>
            <h2>Portfolio</h2>
            <p style={paragStyle}>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus.</p>
            <div>
                <CardsMap list={portfolioArr} />
            </div>
        </div>
    )
}

export default Portfolio;