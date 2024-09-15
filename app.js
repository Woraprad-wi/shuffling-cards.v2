const suits = ['♠', '♥', '♣', '♦']; 
const nums = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function generateDeck() {
    const deck = [];
    suits.forEach(suit => {
        nums.forEach(num => {
            deck.push(`${num}${suit}`);
        });
    });
    return deck;
}

function shuffle(array) {
    let turn = array.length;
    
    while (turn !== 0) {
        let randomIndex = Math.floor(Math.random() * turn);
        turn--;
        [array[turn], array[randomIndex]] = [array[randomIndex], array[turn]];
    }

    return array;
}

const shuffle_btn = document.getElementById('shuffle');
const reset_btn = document.getElementById('reset');
const output = document.getElementById('output');

function displayDeck(deck) {
    output.innerHTML = ''; 
    deck.forEach(card => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        if (card.includes('♥') || card.includes('♦')) {
            cardDiv.style.color = 'red';  
        } else {
            cardDiv.style.color = 'black';  
        }

        cardDiv.textContent = card;
        output.appendChild(cardDiv);
    });
}

function init(){
    let deck = generateDeck();
    displayDeck(deck);
}

shuffle_btn.addEventListener('click', () => {
    let deck = generateDeck();
    let shuffledDeck = shuffle(deck);
    displayDeck(shuffledDeck);
});

reset_btn.addEventListener('click', () => {
    let deck = generateDeck();
    displayDeck(deck);
});

init();