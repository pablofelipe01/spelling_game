
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
    {
        answer1: 'Weird',
        answer2: 'weirth', 
        correctAnswer: 'Weird'
    },
    {
        answer1: 'Intelligence',
        answer2: 'Intelligeence', 
        correctAnswer: 'Intelligence'
    },
    {
        answer1: 'Pronunciation',
        answer2: 'Pronunnciation', 
        correctAnswer: 'Pronunciation'
    },
    {
        answer1: 'Handkerchief',
        answer2: 'Hanndkerchief', 
        correctAnswer: 'Handkerchief',
    },
    {
        answer1: 'logorrhea',
        answer2: 'logorhea', 
        correctAnswer: 'logorrhea'
    },
    {
        answer1: 'Chiaroscurist',
        answer2: 'Chiarosscurist', 
        correctAnswer: 'Chiaroscurist'
    },
    {
        answer1: 'Pochemuchka',
        answer2: 'Pochemuchnka', 
        correctAnswer: 'Pochemuchka'
    },
    {
        answer1: 'Gobbledegook',
        answer2: 'Gobledegook', 
        correctAnswer: 'Gobbledegook'
    },
    {
        answer1: 'Accommodate',
        answer2: 'Acommodate', 
        correctAnswer: 'Accommodate' 
    },
    {
        answer1: 'Acknowledgment',
        answer2: 'Acknowledgement', 
        correctAnswer: 'Acknowledgment' 
    },
    {
        answer1: 'Acquire',
        answer2: 'Aquire', 
            correctAnswer: 'Acquire' 
    },
    {
        answer1: 'Apparent',
        answer2: 'Aparrent', 
        correctAnswer: 'Apparent' 
    },
    {
        answer1: 'calendar',
        answer2: 'calender', 
        correctAnswer: 'calendar' 
    },
    {
        answer1: 'colleague',
        answer2: 'collegue', 
        correctAnswer: 'colleague' 
    },
    {
        answer1: 'conscientious',
        answer2: 'consciencious', 
        correctAnswer: 'conscientious' 
    },
    {
        answer1: 'consensus',
        answer2: 'concensus', 
        correctAnswer: 'consensus' 
    },
    {
        answer1: 'entrepreneur',
        answer2: 'entrepeneur', 
        correctAnswer: 'entrepreneur' 
    },
    {
        answer1: 'experience',
        answer2: 'experiance', 
        correctAnswer: 'experience' 
    },
    {
        answer1: 'indispensable',
        answer2: 'indispensible', 
        correctAnswer: 'indispensable' 
    },
    {
        answer1: 'liaison',
        answer2: 'liasion', 
        correctAnswer: 'liaison' 
    },
    {
        answer1: 'license',
        answer2: 'lisence', 
        correctAnswer: 'license' 
    },
    {
        answer1: 'maintenance',
        answer2: 'maintainance', 
        correctAnswer: 'maintenance' 
    },
    {
        answer1: 'necessary',
        answer2: 'necessery', 
        correctAnswer: 'necessary' 
    },
    {
        answer1: 'occasion',
        answer2: 'occassion', 
        correctAnswer: 'occasion' 
    },
    {
        answer1: 'pastime',
        answer2: 'pasttime', 
        correctAnswer: 'pastime' 
    },
    {
        answer1: 'occurred',
        answer2: 'occured', 
        correctAnswer: 'occurred' 
    },
    {
        answer1: 'privilege',
        answer2: 'privelege', 
        correctAnswer: 'privilege' 
    },
    {
        answer1: 'publicly',
        answer2: 'publically', 
        correctAnswer: 'publicly' 
    },
   

]
//--state Variables 
let pickWord = 0;
let score =  0;
//--element references
let startButton = document.querySelector('.btn-outline-primary');
let message1 = document.querySelector('.message1');
let message2 = document.querySelector('.message2');
let words = document.querySelector('.words')
let wordA = document.querySelector('.wordA')
let wordB = document.querySelector('.wordB')
let rookie = document.querySelector('.rookie')
let amateur = document.querySelector('.amateur')
let expert = document.querySelector('.expert')
let pro = document.querySelector('.pro')
//--event listeners and functions
startButton.addEventListener('click', (event) =>{
    pickWord = 0
    score = 0
    wordA.innerText = answers[pickWord].answer1
    wordB.innerText = answers[pickWord].answer2
    message1.innerText = ''
    message2.innerText = ''
    rookie.innerText = ''
    amateur.innerText = ''
    expert.innerText = '' 
    pro.innerText = '' 
})
words.addEventListener('click',(event) => {

    if (event.target.innerText === answers[pickWord].correctAnswer) {
        pickWord++
        score++
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
        message2.innerText = 'Game Over, try again!'
    }

if (score > 4) {
    rookie.innerText = ' 5 points, You just passed the Rookie level!'
}
if (score > 10) {
    amateur.innerText = ' 10 points, You are already an amateur, keep going!'
} 
if (score > 19) {
    expert.innerText = ' 20 points, You made it to the major leagues!'
}
if (score >= 30) {
    pro.innerText = ' 30 points, you are a pro, you just beat the game!'
}
    
})




