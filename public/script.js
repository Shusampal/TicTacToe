console.log("Welcome to Tic Tac Toe");
let audioturn = new Audio("./music/ting.mp3")
let gameover = new Audio("./music/gameover.mp3")
let turn = "X";
let isGameOver = false;



// Function to change the turn
const changeTurn = () =>{
    turn =  turn === "X" ? "0" : "X";


}



// Function to check for a win

const checkWin = () =>{

    const boxesCollection = document.getElementsByClassName('box');
    const boxes = Array.from(boxesCollection);

    console.log(boxes[0].innerText);

    if(boxes[0].innerText === turn && boxes[1].innerText === turn && boxes[2].innerText === turn)
    {
        boxes[0].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        boxes[1].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        boxes[2].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        
        isGameOver = true;
    }
    else if (boxes[3].innerText === turn && boxes[4].innerText === turn && boxes[5].innerText === turn)
    {
        boxes[3].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        boxes[4].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        boxes[5].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        isGameOver = true;
    }
    else if (boxes[6].innerText === turn && boxes[7].innerText === turn && boxes[8].innerText === turn)
    {
        boxes[6].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        boxes[7].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        boxes[8].style.background = 'linear-gradient( to bottom , white 44% , green 49% ,white 52%)';
        isGameOver = true;
    }
    else if (boxes[0].innerText === turn && boxes[3].innerText === turn && boxes[6].innerText === turn)
    {
        boxes[0].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        boxes[3].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        boxes[6].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        isGameOver = true;
    }
    else if (boxes[1].innerText === turn && boxes[4].innerText === turn && boxes[7].innerText === turn)
    {
        boxes[1].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        boxes[4].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        boxes[7].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        isGameOver = true;
    }
    else if (boxes[2].innerText === turn && boxes[5].innerText === turn && boxes[8].innerText === turn)
    {
        boxes[2].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        boxes[5].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        boxes[8].style.background = 'linear-gradient( to right , white 44% , green 49% ,white 52%)';
        isGameOver = true;
    }
    else if (boxes[0].innerText === turn && boxes[4].innerText === turn && boxes[8].innerText === turn)
    {
        boxes[0].style.background = 'linear-gradient( 45deg , white 44% , green 49% ,white 52%)';
        boxes[4].style.background = 'linear-gradient( 45deg , white 44% , green 49% ,white 52%)';
        boxes[8].style.background = 'linear-gradient( 45deg , white 44% , green 49% ,white 52%)';
        isGameOver = true;
    }
    else if (boxes[2].innerText === turn && boxes[4].innerText === turn && boxes[6].innerText === turn)
    {
        boxes[2].style.background = 'linear-gradient( 135deg , white 44% , green 49% ,white 52%)';
        boxes[4].style.background = 'linear-gradient( 135deg , white 44% , green 49% ,white 52%)';
        boxes[6].style.background = 'linear-gradient( 135deg , white 44% , green 49% ,white 52%)';
        isGameOver = true;
    }

    if(isGameOver)
    {
        gameover.play();
        image = Array.from(document.getElementsByClassName('imgbox'));
        image[0].classList.remove('disp');
        
        // To Disable pointer event when game is over
        document.getElementById('game').style.pointerEvents = 'none';


        document.getElementsByClassName('info')[0].innerText = `Winner is ${turn}`;
        document.getElementsByClassName('info')[0].style.fontSize = '4vw';
        document.getElementsByClassName('info')[0].style.color = 'darkblue';


    }

}




// Game Logic

let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
            audioturn.play();
            checkWin();
            if(isGameOver === false)
            {

                changeTurn();
                document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`;
            }

            
        }
    })
})