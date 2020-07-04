const dpi = window.devicePixelRatio;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let canv_width = null;
// let canv_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);;
// let canv_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);;
let canv_height = null;

const player_width = 20;
const player_height = 100;

function fix_dpi(){
    const style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    const style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);

    canvas.setAttribute('width', style_width * dpi);
    canvas.setAttribute('height', style_height * dpi * 1.5);

    canv_width = style_width * dpi;
    console.log(canv_width)
    canv_height = style_height * dpi * 1.5;
    console.log(canv_height)
    // canvas.classList.add('xd')
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

fix_dpi()

const left_player = new Player(player_width, player_height, 'left')
const right_player = new Player(player_width, player_height, 'right')
const ball = new Ball(10)
const game = new Game(ball, left_player, right_player)
let out_of_bounds = false

game.start()