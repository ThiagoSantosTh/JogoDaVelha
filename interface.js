    let squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        square.addEventListener('click',handleClick)
    })

    function handleClick(event){
        let square = event.target
        let position = square.id

        if(handleMove(position)){
            setTimeout(()=>{
            alert(`O jogo acabou! - O Vencedor foi ${PlayerTime}`)
            }, 10)
        }
        updateSquares()
    }


    function updateSquares(){
        let squares = document.querySelectorAll('.square')

        squares.forEach((square)=>{
            let position = square.id
            let symbols = board[position]

            if(symbols != ''){
                square.innerHTML = `<div class="${symbols}"></div>`
            }
        })
    }