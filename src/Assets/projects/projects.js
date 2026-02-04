import tAkumImg from '../imgs/project-imgs/tAkumI.png';
import bl0ckImg from '../imgs/project-imgs/bl0ck.png';
import weatherImg from '../imgs/project-imgs/weather-app.png';
import snapStreamImg from '../imgs/project-imgs/snapStream.png';
import folioImg from '../imgs/project-imgs/folio.png';
import writeittImg from '../imgs/project-imgs/writeitt.png';
import moBodies from '../imgs/project-imgs/moBodies.png' 

const PROJECTS = [
    {
        id: 1,
        projectImg: tAkumImg,
        projectTitle: 'tAkumI',
        projectDesc: 'tAkumI uses the Reinforement Learning methodology NEAT (NeuroEvolution of Augmenting Topologies) to teach a neural network to drive a 2d car on different tracks.',
        language: 'Python',
        ghURL: 'https://github.com/kylest0kes/tAkumI',
        link: 'https://github.com/kylest0kes/tAkumI'
    },
    {
        id: 6,
        projectImg: writeittImg,
        projectTitle: 'writeitt',
        projectDesc: 'writeitt is a social media app where you can create Stories, add Stories to your Library, add Posts to Stories, connect with other users, and more. Built with MERN stack.',
        language: 'React',
        ghURL: 'https://github.com/kylest0kes/writeitt',
        link: 'https://github.com/kylest0kes/writeitt'
    },
    {
        id: 2,
        projectImg: bl0ckImg,
        projectTitle: 'bl0ck',
        projectDesc: 'bl0ck is a collection of Python scripts that aim to make it fast and easy to block a large list of accounts from X, Facebook, Instagram, and/or TikTok.',
        language: 'Python',
        ghURL: 'https://github.com/kylest0kes/bl0ck',
        link: 'https://github.com/kylest0kes/bl0ck'
    },
    {
        id: 4,
        projectImg: snapStreamImg,
        projectTitle: 'SnapStream',
        projectDesc: 'SnapStream is an image searching application, built with Javascript, and powered by the Unsplash API.',
        language: 'Javascript',
        ghURL: 'https://github.com/kylest0kes/image-search',
        link: 'https://kylest0kes.github.io/image-search/'
    },
    {
        id: 5,
        projectImg: folioImg,
        projectTitle: 'folio',
        projectDesc: 'folio is my current portfolio, showcasing myself and projects I have created. Buit in React, like all the cool portfolios!',
        language: 'React',
        ghURL: 'https://github.com/kylest0kes/folio',
        link: 'https://kylest0kes.github.io/folio/'
    },
    {
        id: 3,
        projectImg: weatherImg,
        projectTitle: 'Weather App',
        projectDesc: 'This is a Weather Dashboard powered by the OpenWeather API that allows you to search locations around the world and retrieve accurate weather data and store the recent searches.',
        language: 'Javascript',
        ghURL: 'https://github.com/kylest0kes/weather_app',
        link: 'https://kylest0kes.github.io/weather_app/'
    },
    {
        id: 7,
        projectImg: moBodies,
        projectTitle: 'mo-bodies',
        projectDesc: 'mo-bodes is a simulation of the n-bodies phyiscs problem, allowing the user to observe simulated orbital patterns of multiple bodies around a fixed center mass.',
        language: 'Python',
        ghURL: 'https://github.com/kylest0kes/mo_bodies',
        link: 'https://github.com/kylest0kes/mo_bodies'
    },
];

export default PROJECTS;