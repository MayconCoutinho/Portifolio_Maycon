import React from 'react';
import ifuture from '../../assets/IFUTURE.png'
import Pokedex from '../../assets/Pokedex.png'



export const Projects = () => {

    const video_url = 'https://www.youtube.com/embed/'

    return (
        <div>
            <img src={ifuture} width={500}/>
            <img src={Pokedex} width={500}/>
            <h1> projects </h1>

            <iframe src='https://www.youtube.com/embed/cJt7-pEEvB4' width={720} height={420}/>
        </div>
    )

}