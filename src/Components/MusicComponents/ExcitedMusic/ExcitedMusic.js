import React from 'react';
import './ExcitedMusic.css';
import MusicPageLayout from '../MusicPageLayout/MusicPageLayout';

class ExcitedMusic extends React.Component {
    render() {
        return (
            <div>
                <MusicPageLayout title='Excited Music' bgColor='#2FB774' musicLink='https://open.spotify.com/embed/playlist/2gmQ0znG7gGhlqktoTOM5W?utm_source=generator&theme=0'/>
            </div>
        );
    }
}

export default ExcitedMusic;