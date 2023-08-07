import Card from "./Card";
const portfolioGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '20px'
}


function CardsMap(props) {
    return (
        <div style={portfolioGrid}>
            {props.list.map((oneObj) =>
                <Card
                    key={oneObj.id}
                    cardImg={oneObj.img}
                    cardText={oneObj.cardText}
                />
            )}
        </div>
    )
}

export default CardsMap;