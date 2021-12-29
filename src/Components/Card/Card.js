import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div id='card-div' style={{backgroundColor: this.props.bgColor}} >
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Card;