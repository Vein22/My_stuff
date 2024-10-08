const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// Background
canvas.width = 1024;
canvas.height = 576;

c.fillRect(0,0,canvas.width,canvas.height)

// Gravity

const gravity = 0.2

//Sprites and position
class Sprite {
    constructor({position,velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }
    
    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x,this.position.y, 50, this.height)
    }
    
    update() {
        this.draw()

        this.position.y+=this.velocity.y

        if(this.position.y +this.height +this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else this.velocity.y+=gravity
    }
}

const player = new Sprite({
    position: {
      x:0,
      y:0
    }, 
    velocity: {
      x:0,
      y:0
    }
})

const enemy = new Sprite({
    position: {
     x:400,
     y:100
    }, 
    velocity: {
     x:0,
     y:0
    }
})

// Animation

function animation(){
    window.requestAnimationFrame(animation)
    c.fillStyle = "black"
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update()
    enemy.update()
}

animation()

window.addEventListener("keydown", (event)=>{
    console.log(event.key)
})

