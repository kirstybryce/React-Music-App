import React from 'react';
import { Link } from 'react-router-dom';
import './HappyMusic.css';
import MusicPageLayout from '../MusicPageLayout/MusicPageLayout';

class HappyMusic extends React.Component {
    render() {
        return (
            <div>
                <MusicPageLayout title='Happy Music' bgColor='#FFCB08' musicLink="https://open.spotify.com/embed/playlist/5q9PnhSqNEc4UejozwkfJD?utm_source=generator&theme=0"/>
            </div>
        );
    }
}

export default HappyMusic;