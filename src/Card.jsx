import PropTypes from 'prop-types';

function Card(props){
     return(
        <div className="Card">
            <h3>name : {props.name}</h3>
            <p>description : {props.description}</p>
            <p>age : {props.age}</p>
        </div>
     );

}

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

Card.defaultProps = {
    name: 'Guest',
    description: "No description provided",
    age: 0,
}

export default Card;