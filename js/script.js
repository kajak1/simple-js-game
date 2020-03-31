const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const width = 600
const height = 450

const player_width = 20
const player_height = 100

const left_player = new Player(player_width, player_height, 'left')
const right_player = new Player(player_width, player_height, 'right')
const ball = new Ball(10)
const main = new Main(ball, left_player, right_player)

function set_size(){
    canvas.width = width;
    canvas.height = height;
}

let W_pressed = null
let S_pressed = null
let UP_pressed = null
let DOWN_pressed = null

window.addEventListener('keydown', e => {
    switch (e.keyCode){
        case 87:
            W_pressed = true
        break;
        case 83: 
            S_pressed = true
        break;
        case 38:
            UP_pressed = true
        break;
        case 40:
            DOWN_pressed = true
         break;
    }
})

window.addEventListener('keyup', e => {
    switch (e.keyCode){
        case 87:
            W_pressed = false
        break;
        case 83: 
            S_pressed = false
        break;
        case 38:
            UP_pressed = false
        break;
        case 40:
            DOWN_pressed = false
         break;
    }
})

set_size()

main.render()