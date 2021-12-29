import React from 'react';
import './AngryMusic.css';
import MusicPageLayout from '../MusicPageLayout/MusicPageLayout';

class AngryMusic extends React.Component {
    render() {
        return (
            <div>
                <MusicPageLayout title='Angry Music' bgColor='#F2726D' musicLink='https://open.spotify.com/embed/playlist/6rEeGgjoz2l6a0ZlSn8cdN?utm_source=generator&theme=0'/>
            </div>
        );
    }
}

export default AngryMusic;