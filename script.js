//safe the words some how


//--> Variables --
const answers = [
    {
        answer1: 'Misspell', 
        answer2: 'Mispell', 
        correctAnswer: 'Misspell'
    },
    {
        answer1: 'Pharaoh', 
        answer2: 'Pharao', 
        correctAnswer: 'Pharaoh'
    },
    // {
    //     answer1: 'Weird',
    //     answer2: 'weirth', 
    //     correctAnswer: 'Weird'
    // },
    // {
    //     answer1: 'Intelligence',
    //     answer2: 'Intelligeence', 
    //     correctAnswer: 'Intelligence'
    // },
    // {
    //     answer1: 'Pronunciation',
    //     answer2: 'Pronunnciation', 
    //     correctAnswer: 'Pronunciation'
    // },
    // {
    //     answer1: 'Handkerchief',
    //     answer2: 'Hanndkerchief', 
    //     correctAnswer: 'Handkerchief',
    // },
    // {
    //     answer1: 'logorrhea',
    //     answer2: 'logorhea', 
    //     correctAnswer: 'logorrhea'
    // },
    // {
    //     answer1: 'Chiaroscurist',
    //     answer2: 'Chiarosscurist', 
    //     correctAnswer: 'Chiaroscurist'
    // },
    // {
    //     answer1: 'Pochemuchka',
    //     answer2: 'Pochemuchnka', 
    //     correctAnswer: 'Pochemuchka'
    // },
    // {
    //     answer1: 'Gobbledegook',
    //     answer2: 'Gobledegook', 
    //     correctAnswer: 'Gobbledegook'
    // },

]
//--state Variables 
let pickWord = 0;
//--element references
let startButton = document.querySelector('.btn-outline-primary');
let message1 = document.querySelector('.message1');
let message2 = document.querySelector('.message2');
let words = document.querySelector('.words')
let wordA = document.querySelector('.wordA')
let wordB = document.querySelector('.wordB')
//--event listeners and functions

startButton.addEventListener('click', (event) =>{
    pickWord = 0
    wordA.innerText = answers[pickWord].answer1
    wordB.innerText = answers[pickWord].answer2
    message1.innerText = ''
    message2.innerText = ''
})

words.addEventListener('click',(event) => {

    if (event.target.innerText === answers[pickWord].correctAnswer) {
        pickWord++
        if (pickWord === answers.length) {
            message1.innerText = 'You Win!'
        } else { 
            const randomNumber = Math.floor(Math.random() *2)
            if (randomNumber === 0) {
                wordA.innerText = answers[pickWord].answer1
                wordB.innerText = answers[pickWord].answer2
            } else {
                wordA.innerText = answers[pickWord].answer2
                wordB.innerText = answers[pickWord].answer1
            }
        }    
    } else {
        message2.innerText = 'Game Over!'
    }
    
})




