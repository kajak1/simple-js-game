const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const width = 600
const height = 450

const player_width = 20
const player_height = 100

const left_player = new Player(player_width, player_height, 'left')
const right_player = new Player(player_width, player_height, 'right')
const ball = new Ball(10)
const main = new Main(left_player, right_player, ball)

function set_size(){
    canvas.width = width;
    canvas.height = height;
}


window.addEventListener('keydown', e => {
    switch (e.keyCode){
        case 87:
            left_player.move('up')
        break;
        case 83:  
            left_player.move('down')
        break;
        case 38:
            right_player.move('up')
        break;
        case 40:
            right_player.move('down')
        break;
            // case 88:
            //     ball.move()
            // break;
    }
})

set_size()

main.render()
ball.move()