import tAkumIimg from '../imgs/project-imgs/tAkumI.png';
import bl0ckImg from '../imgs/project-imgs/bl0ck.png';
import weatherImg from '../imgs/project-imgs/weather-app.png';
import snapStreamImg from '../imgs/project-imgs/snapStream.png';
import folioImg from '../imgs/project-imgs/folio.png';
import writeittImg from '../imgs/project-imgs/writeitt.png';

const PROJECTS = [
    {
        id: 1,
        projectImg: tAkumIimg,
        projectTitle: 'tAkumI',
        projectDesc: 'tAkumI uses the Reinforement Learning methodology NEAT (NeuroEvolution of Augmenting Topologies) to teach a neural network to drive a 2d car on different tracks.',
        language: 'Python',
        ghURL: 'https://github.com/kylest0kes/tAkumI',
        link: 'https://github.com/kylest0kes/tAkumI'
    },
    {
        id: 2,
        projectImg: bl0ckImg,
        projectTitle: 'bl0ck',
        projectDesc: 'bl0ck is a collection of Python scripts that aim to make it fast and easy to block a large list of accounts from X, Facebook, Instagram, and/or TikTok. ',
        language: 'Python',
        ghURL: 'https://github.com/kylest0kes/bl0ck',
        link: 'https://github.com/kylest0kes/bl0ck'
    },
    {
        id: 3,
        projectImg: weatherImg,
        projectTitle: 'Weather App',
        projectDesc: 'This is a Weather Dashboard powered by the OpenWeather API that allows you to search locations around the world and retrieve accurate weather data.',
        language: 'Javascript',
        ghURL: 'https://github.com/kylest0kes/weather_app',
        link: 'https://kylest0kes.github.io/weather_app/'
    },
    {
        id: 4,
        projectImg: snapStreamImg,
        projectTitle: 'SnapStream',
        projectDesc: 'SnapStream is an image searching application, built with Javascript, and powered by the Unsplash API. ',
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
        id: 6,
        projectImg: writeittImg,
        projectTitle: 'writeitt',
        projectDesc: 'writeitt is a social media app where you can create Stories, add Stories to your Library, add Posts to Stories, connect with other users, and more. Built with MongoDB, Express, React, and Node. Currently still in development, and slated for a full release in the coming months.',
        language: 'React',
        ghURL: 'https://github.com/kylest0kes/writeitt',
        link: 'https://github.com/kylest0kes/writeitt'
    }
];

export default PROJECTS;