let board = ['','','','','','','','','']
let PlayerTime = 0
let symbols = ['o','x']
let gamerOver = false

function handleMove(position){
    if(gamerOver){
        return
    }

    if(board[position] == ''){
        board[position] = symbols[PlayerTime]

        gamerOver = isWin()


        if(gamerOver == false){
            if(PlayerTime == 0){
                PlayerTime = 1
            }else{
                PlayerTime = 0
            }
        }
        
    }

    return gamerOver
}

function isWin(){
    let winStates = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
    ] 

    for (let i = 0; i < winStates.length; i++){
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true
        }

        
    }
    return false
}

