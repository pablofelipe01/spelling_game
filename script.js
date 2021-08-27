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

]

let pickWord = 0;
let winner;
let looser;

let startButton = document.querySelector('.btn-outline-primary');
let message1 = document.querySelector('.message1');
let message2 = document.querySelector('.message2');
let words = document.querySelector('.words')
let wordA = document.querySelector('.wordA')
let wordB = document.querySelector('.wordB')
console.log(words)
//--> Event Listeners
words.addEventListener('click',(event) => {
    console.log(event)
    if (event.target.innerText === answers[pickWord].correctAnswer) {
        pickWord++
        const randomNumber = Math.floor(Math.random() *2)
        if (randomNumber === 0) {
            wordA.innerText = answers[pickWord].answer1
            wordB.innerText = answers[pickWord].answer2
            // else inf number === 1 siwcht the order of the words 

        } else {
            wordA.innerText = answers[pickWord].answer2
            wordB.innerText = answers[pickWord].answer1
        }
        //Calculate random number 0 || 1
        //if hte random number === 0 assign word a || word B
        
    } else {
        message2.innerText = 'Game Over!'
    }
} )
//Click button with the class: 'btn btn-outline-primary' to begin the game.
startButton.addEventListener('click', (event) =>{
    wordA.innerText = answers[pickWord].answer1
    wordB.innerText = answers[pickWord].answer2
})

// only when the counter === length of the answers array the player wins 

if (pickWord === answers.length) {
    message1.innerText = 'You Win!'
}


//words mus show in the screen

//if the word you chose is correct, other two words pop in the screen
// message1.addEventListener('click')
//else you lose 
// message2.addEventListener('click')
//if you want your score, you leave the email 

//--> functions 