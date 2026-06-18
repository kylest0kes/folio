import tAkumImg from '../imgs/project-imgs/tAkumI.png';
import bl0ckImg from '../imgs/project-imgs/bl0ck.png';
import jobAppTracker from '../imgs/project-imgs/JobAppTracker.png';
import snapStreamImg from '../imgs/project-imgs/snapStream.png';
import folioImg from '../imgs/project-imgs/folio.png';
import writeittImg from '../imgs/project-imgs/writeitt.png';
import moBodies from '../imgs/project-imgs/moBodies.png' 
import pokemonnn from '../imgs/project-imgs/pokemonnn.png';

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
        language: ['React', 'Node'],
        ghURL: 'https://github.com/kylest0kes/writeitt',
        link: 'https://writeitt.onrender.com/'
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
        projectImg: jobAppTracker,
        projectTitle: 'Job App Tracker',
        projectDesc: 'Job Application Tracker is a React/Typescript app to help job seekers organize and monitor their job applications with persistent storage.',
        language: ['React', 'Typescript'],
        ghURL: 'https://github.com/kylest0kes/job_app_tracker',
        link: 'https://kylest0kes.github.io/job_app_tracker/'
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
    {
        id: 8,
        projectImg: pokemonnn,
        projectTitle: 'pokemonnn',
        projectDesc: 'pokemonnn is a Angular frontend, reactive Spring backend, that allows a user to see different pokemon and their information. Powered by the pokeapi.',
        language: ['Angular', 'Java'],  
        ghURL: 'https://github.com/kylest0kes/pokemonnn', 
        link: 'https://github.com/kylest0kes/pokemonnn'

    }
];

export default PROJECTS;