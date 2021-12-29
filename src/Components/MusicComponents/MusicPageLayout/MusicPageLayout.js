import React from 'react';
import { Link } from 'react-router-dom';
import './MusicPageLayout.css';

class MusicPageLayout extends React.Component {
    render() {
        return (
            <div id='container-div' style={{ backgroundColor: this.props.bgColor }}>
                <div id='title-div'>
                    <Link to='/'>
                        <img id='arrow' src='arrow_back.svg' />
                    </Link>
                    <h2 id='title'>{this.props.title}</h2>
                </div>
                <div id='music-div'>
                    <iframe src={this.props.musicLink} width="100%" height="590px" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>

        );
    }
}

export default MusicPageLayout;