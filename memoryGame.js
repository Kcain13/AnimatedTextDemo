/* const boxOfCards = document.querySelector(".box-of-cards");


const restartGame = document.querySelector(".restart-game");

restartGame.addEventListener('click', () => {
    boxOfCards.innerHTML = '';
    cardCount = createCard(colorList);
    createCard(cardCount);
    revealedCount = 0;
    activeCard = null;
    awaitingFinalMove = false;
})

const colors = [
    "https://media4.giphy.com/media/HUGoZeejzhRi8/giphy.gif?cid=ecf05e47eaulergq51b3w9g51984rkiuw4cn8bg1oc5uuiud&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/wcFlXfhyyyp0c/200w.webp?cid=ecf05e47p7ont11glhrvwpkeyb6f24z7z08fgz10f4trxvhd&ep=v1_gifs_search&rid=200w.webp&ct=g",
    "https://media3.giphy.com/media/140ObFj9MRjRIc/200w.webp?cid=ecf05e47p7ont11glhrvwpkeyb6f24z7z08fgz10f4trxvhd&ep=v1_gifs_search&rid=200w.webp&ct=g",
    "https://media0.giphy.com/media/Ge3UWWcnr9OvK/100.webp?cid=ecf05e47p7ont11glhrvwpkeyb6f24z7z08fgz10f4trxvhd&ep=v1_gifs_search&rid=100.webp&ct=g",
    "https://media3.giphy.com/media/lv3axdBhk5tZe/200w.webp?cid=ecf05e47p7ont11glhrvwpkeyb6f24z7z08fgz10f4trxvhd&ep=v1_gifs_search&rid=200w.webp&ct=g",
    "https://media0.giphy.com/media/7V8vnH1ujyvyE/200w.webp?cid=ecf05e47p7ont11glhrvwpkeyb6f24z7z08fgz10f4trxvhd&ep=v1_gifs_search&rid=200w.webp&ct=g",
    "https://media4.giphy.com/media/92Q5CPvVhiInu/100.webp?cid=ecf05e47p7ont11glhrvwpkeyb6f24z7z08fgz10f4trxvhd&ep=v1_gifs_search&rid=100.webp&ct=g",
    "https://media2.giphy.com/media/FtBw4gIVV6fTO/giphy.webp?cid=ecf05e47eaulergq51b3w9g51984rkiuw4cn8bg1oc5uuiud&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media4.giphy.com/media/5xkK6TySqMxxu/200w.webp?cid=ecf05e47eaulergq51b3w9g51984rkiuw4cn8bg1oc5uuiud&ep=v1_gifs_search&rid=200w.webp&ct=g",
    "https://media3.giphy.com/media/xcymn33ucu4M0/200w.webp?cid=ecf05e477wvsv3m2w08drbsol5bsfq8xktj67wdxjdpxswhd&ep=v1_gifs_search&rid=200w.webp&ct=g",
];

// using spread operator to duplicate colors array
const colorList = [...colors, ...colors];

// create reference for number of cards we have so we can loop
const cardCount = colorList.length;

// current state of the game
let revealedCount = 0;
let activeCard = null;
let awaitingFinalMove = false;

// create new card element and return flowing into the creating cards loop
function createCard(color) {
    const cardElement = document.createElement('div');
    // set the class to 'card' and add a data attribute equal to the color assignment so we can test for match later
    cardElement.classList.add('card');
    cardElement.setAttribute('data-color', color);
    // need to prevent from clicking on a revealed matched card
    cardElement.setAttribute('data-revealed', 'false');

    //() => instead of function(e)
    cardElement.addEventListener('click', () => {
        // This is going to prevent the user from clicking on revealing another card while waiting for the cards to turn over if they got the match wrong
        const revealed = cardElement.getAttribute('data-revealed');

        if (awaitingFinalMove
            // this resets if you have a match and click on one of the revealed cards
            || revealed === 'true'
            // this does not allow you to click on a revealed card and match it with itself
            || cardElement === activeCard) {
            return;
        }
        cardElement.style.backgroundColor = color;

        if (!activeCard) {
            activeCard = cardElement;
            return; // to cancel the function after we have an active card
        }

        const colorToMatch = activeCard.getAttribute('data-color')
        if (colorToMatch === color) {
            cardElement.setAttribute('data-revealed', 'true');
            activeCard.setAttribute('data-revealed', 'true');

            awaitingFinalMove = false;
            activeCard = null;
            revealedCount += 2;

            setTimeout(() => {
                if (revealedCount === cardCount) {
                    alert("You Have Amazing Memory! Refresh to test again");
                }
            }, 500)
            return;
        }

        // If we are not awaiting final move and there is an active card  we need to check if it matches
        awaitingFinalMove = true;
        setTimeout(() => {
            cardElement.style.backgroundColor = null;
            activeCard.style.backgroundColor = null;

            // the awaiting final move & active card variable are still set so we need to clear them
            awaitingFinalMove = false;
            activeCard = null;
        }, 1000);
    });

    return cardElement;
}

//create the card
for (let i = 0; i < cardCount; i++) {
    const colorIndex = Math.floor(Math.random() * colorList.length);
    const color = colorList[colorIndex];
    const card = createCard(color);
    // limit card to being picked no more than twice
    colorList.splice(colorIndex, 1);
    // append the card to the container
    boxOfCards.appendChild(card);
} */




const gameContainer = document.querySelector('#game');

// creating restart game button
const restartGame = document.querySelector('.restart-game')
restartGame.addEventListener('click', () => {
    gameContainer.innerHTML = '';
    shuffledColors = shuffle(COLORS);
    createDivsForColors(shuffledColors);
    scoreNums = 0;
    yourScore.innerHTML = scoreNums;
    bestScoreValue = localStorage.getItem('bestScore') || Infinity;
    bestScoreElement.innerHTML = bestScoreValue === Infinity ? '0' : bestScoreValue;

});

let scoreNums = 0;
const COLORS = [

]

const colorList = [...COLORS, ...COLORS];

const cardCount = colorList.length;
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// shuffle the color array
let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
    for (let color of colorArray) {
        // create a new div
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'cards');
        // give it a class attribute for the value we are looping over
        newDiv.classList.add(color);

        // call a function handleCardClick when a div is clicked on
        newDiv.addEventListener("click", handleCardClick);

        // append the div to the element with an id of game
        gameContainer.append(newDiv);
    }
}

let arr = [];

// companring score value to infity because if scoreNums is smaller, bestScoreValue will be updated
let bestScoreValue = localStorage.getItem('bestScore') || Infinity;
let bestScoreElement = document.querySelector("#bestScore");
bestScoreElement.innerHTML = bestScoreValue === Infinity ? '0' : bestScoreValue;

// TODO: Implement this function!
function handleCardClick(event) {

    const card = event.target;

    // return if the card is already matched or two cards are already flipped
    if (card.classList.contains('matched') || card.classList.contains('flipped')) {
        return;
    }
    // you can use event.target to see which element was clicked
    console.log("you just clicked", event.target);

    // add flipped class to the arr
    arr.push(card);
    if (arr.length > 2) {
        return;
    } else {
        arr.splice(2);
    }

    card.style.backgroundImage = `url(${card.className})`;
    card.classList.add('flipped');

    // increase scoreNums by one with each click
    scoreNums++;
    let yourScore = document.querySelector('#yourScore');
    yourScore.innerHTML = scoreNums;

    // check for match if two cards are flipped
    if (arr.length === 2) {
        let firstCard = arr[0];
        let secondCard = arr[1];
        if (firstCard.classList.contains('matched') || secondCard.classList.contains('matched')) {
            // if cards match, add matched class and empty arr
            event.stopPropagation();
        } else if (firstCard.className === secondCard.className) {
            console.log('Good Memory!');
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            arr = [];
        } else {
            // if cards don't match, remove flipped class after 1 second
            setTimeout(() => {
                firstCard.classList.add('flip-back');
                secondCard.classList.add('flip-back');
                setTimeout(() => {
                    firstCard.style.backgroundImage = '';
                    secondCard.style.backgroundImage = '';
                    firstCard.classList.remove('flipped', 'flip-back');
                    secondCard.classList.remove('flipped', 'flip-back');
                    arr = [];
                }, 300);
            }, 1000);

        }
        let allCardsMatched = true;
        // condition to check if all cards have class 'matched' and game is over
        for (let i = 0; i < gameContainer.children.length; i++) {
            const child = gameContainer.children[i];
            // perform operations on the child element
            if (child.classList.contains('matched')) {
                continue;
            } else {
                allCardsMatched = fasle;
                break;
            }
        }
        if (allCardsMatched) {
            if (scoreNums < bestScoreValue) {
                bestScoreValue = scoreNums;
                bestScoreElement.innerHTML = bestScoreValue;
                localStorage.setItem('bestScore', JSON.stringify(bestScoreValue));
            }
        }
    }
    bestScoreElement.innerHTML = bestScoreValue === Infinity ? '0' : bestScoreValue;
}
bestScoreElement.innerHTML = bestScoreValue === Infinity ? "0" : bestScoreValue;
// when the DOM loads
createDivsForColors(shuffledColors); 