import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

class CardGrid extends React.Component {
    render() {
        return (
            <main>
                    <div>
                        <div className="row">
                            <div className="col">
                                <Link to="./happy">
                                    <Card name='happy' bgColor='#FFCB08'/>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="./sad">
                                    <Card name='sad' bgColor='#74A8DB'/>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to="./excited">
                                    <Card name='excited' bgColor='#2FB774'/>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="./angry">
                                    <Card name='angry' bgColor='#F2726D'/>
                                </Link>
                            </div>
                        </div>
                    </div>
            </main>
            
        );
    }
}

export default CardGrid;