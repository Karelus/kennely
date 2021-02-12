import React from 'react';
import avatar from '../img/dog5.svg';

class PetCard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <a href="#">
                <button className="pet-card" id="start-food-counter">
                    <div className="image-container">
                        <img className="petImage" src={avatar} alt="avatar" />
                    </div>
                    <div className="text-container">
                        <h3>{this.props.petname}</h3>
                        <p>{this.props.animal}</p>
                        <p>Weight: {this.props.weight}kg</p>
                        <p>Level: 3</p>
                    </div>
                </button>
            </a>
        )
    }
}

export default PetCard;