console.log('Welcome to Tic Tac Toe');

let music = new Audio('./assets/music.mp3');
let audioTurn = new Audio('./assets/ting.mp3');
let gameover = new Audio('./assets/gameover.mp3');
let turn = "X";
let isgameover = false;


// Function to change the turn
const changeTurn = ()=>{
    return turn === 'X'? '0':'X';
}

// Function to check for a win

const checkWin = ()=>{
    let boxText =  document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,15,-10,90],
        [3,4,5,15,0,90],
        [6,7,8,15,10,90],
        [0,3,6,5,0,0],
        [1,4,7,15,0,0],
        [2,5,8,25,0,0],
        [0,4,8,14,0,136],
        [2,4,6,15,0,225]
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + ':' +'Won';
            isgameover = true;
            gameover.play();
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = '15px';
        }
    })
}


// Game Logic

music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxText =  element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
        boxText.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if(!isgameover){
        document.getElementsByClassName('info')[0].innerText = 'Turn for: ' + turn;
        }
      }
})
})

// Adding onclick listener to reset button 

document.getElementById('reset').addEventListener('click', () => {
    let boxtexts =  document.getElementsByClassName('boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
        document.querySelector('.line').style.width = '0px';
    })

    turn ='X';
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for: ' + turn;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0px';
})
  