const playerOne = document.querySelector('#p1');
const playerTwo = document.querySelector('#p2');
const reset = document.querySelector('#reset');
const points = document.querySelector('#points');
const cp1 = document.querySelector('#cp1')
const cp2 = document.querySelector('#cp2')

let p1 = 0;
let p2 = 0;
let winningScore = 5;
let isGameOver = false;

cp1.textContent = p1;
cp2.textContent = p2;


playerOne.addEventListener('click', () => {
    if(!isGameOver){
        p1++;
        cp1.textContent = p1;
        if(p1 === winningScore){
            isGameOver = true;
            cp1.style.color = 'green';
            cp2.style.color = 'red';
            playerOne.disabled = true;
            playerTwo.disabled = true;
        }
    }
});

playerTwo.addEventListener('click', () => {
    if(!isGameOver){
        p2++;
        cp2.textContent = p2;
        if(p2 === winningScore){
            isGameOver = true;
            cp2.style.color = 'green';
            cp1.style.color = 'red';
            playerOne.disabled = true;
            playerTwo.disabled = true;
        }
    }
});

points.addEventListener('change', function () {
    winningScore = parseInt(this.value)
})

reset.addEventListener('click', (e) => {
    isGameOver = false;
    p1 = 0;
    p2 = 0;
    cp1.textContent = p1;
    cp2.textContent = p2;
    cp1.style.color = 'black';
    cp2.style.color = 'black';
    playerOne.disabled = false;
    playerTwo.disabled = false;
})

