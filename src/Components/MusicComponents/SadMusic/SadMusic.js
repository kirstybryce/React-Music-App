import React from 'react';
import './SadMusic.css';
import MusicPageLayout from '../MusicPageLayout/MusicPageLayout';

class SadMusic extends React.Component {
    render() {
        return (
            <div>
                <MusicPageLayout title='Sad Music' bgColor='#74A8DB' musicLink='https://open.spotify.com/embed/playlist/61u5aRlqtZe4xdV5iTSUsc?utm_source=generator&theme=0'/>
            </div>
        );
    }
}

export default SadMusic;