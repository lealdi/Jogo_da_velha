document.addEventListener('DOMContentLoaded',()=>{
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let square = event.target
    let position = square.id

    if(handleMove(position)){        
        if(playerTime == 0){
            setTimeout(()=>{
                alert("O jogo acabou , o vencedor foi " + playerOne)
            }, 10)
        }else{
            setTimeout(()=>{
                alert("O jogo acabou , o vencedor foi " + playerTwo)
            }, 10)
        }      

    }

    updateSquares()
}

function updateSquares(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

function restart(){
    if(board = ['','','','','','','','','']){
        playerTime = 0
        gameOver = false
        let squares = document.querySelectorAll(".square")
        squares.forEach((square)=>{
        square.innerHTML = ''
    })
  }
}
