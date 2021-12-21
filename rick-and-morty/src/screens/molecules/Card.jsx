const Card = ({image, name}) => {
    return ( 
        <div>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
        </div>
    );
}
 
export default Card;