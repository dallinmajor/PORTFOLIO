import Tools from './tools';

export default () => {
    return [{
        project: 'WWII Trivia',
        toolsUsed: [Tools.Javascript, Tools.Bootstrap, Tools.HTML, Tools.Git, Tools.JQuery],
        description: 'This is a World War 2 Trivia game I made using Javascript Timers. You get asked a series of questions and are given a time limit on each. When you are done you are graded and given a percentage.',
        createdAt: '5/20/2018',
        gitHubLink: 'https://github.com/dallinmajor/TriviaGame',
        projectLink: 'https://dallinmajor.github.io/TriviaGame/'
    },{
        project: 'Game of Memory',
        toolsUsed: [Tools.Javascript, Tools.Bootstrap, Tools.HTML, Tools.Git, Tools.React],
        description: 'This is a game I made using React. You are presented with a grid of images and when you click on an image the grid shuffles. The object of the game is to click each image once with no repeats.',
        createdAt: '5/20/2018',
        gitHubLink: 'https://github.com/dallinmajor/MemoryGame',
        projectLink: 'https://dallinmajor.github.io/MemoryGame/'
    }]
}