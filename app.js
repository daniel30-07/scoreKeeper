const p1 = {
    button: document.querySelector('#p1'),
    cp: document.querySelector('#cp1'),
    score: 0
}

const p2 = {
    button: document.querySelector('#p2'),
    cp: document.querySelector('#cp2'),
    score: 0
}

const reset = document.querySelector('#reset');
const points = document.querySelector('#points');

let winningScore = 5;
let isGameOver = false;

cp1.textContent = p1.score;
cp2.textContent = p2.score;

function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1;
        player.cp.textContent = player.score;
        if(player.score === winningScore){
            isGameOver = true;
            player.cp.style.color = 'green';
            opponent.cp.style.color = 'red';
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

function resetScore(){
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.cp.textContent = p.score;
        p.cp.style.color = 'black';
        p.button.disabled = false;
    }
}

p1.button.addEventListener('click', () => {
    updateScore(p1, p2)
});

p2.button.addEventListener('click', () => {
    updateScore(p2, p1)
});

points.addEventListener('change', function () {
    winningScore = parseInt(this.value)
})


reset.addEventListener('click', () => {
    resetScore(p1, p2);
})


