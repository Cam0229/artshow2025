let b = 600
let shape = 1
let poop = 1
let r = 255
let g = 0
let b1 = 0
let hue = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
world.gravity.y = 10
  balls=new Group()
    background(220);
   pop = loadSound('pop.mp3');

  a = new Sprite()
  a.color = 'rgb(220,220,220)'
  a.strokeWeight = 0
  a.text = 'touch to draw - space to change shapes - use up and down arrow keys to move floor'
  a.collider = 'n'
  a.x = 390
  a.y = 25
  a.textSize = 20
  
  t = new Sprite()
  t.color = 'rgb(220,220,220)'
  t.strokeWeight = 0
  t.text = 'press c to clear'
  t.collider = 'n'
  t.x = windowWidth - 75
  t.y = 25
  t.textSize = 15
  
  b = windowHeight - 300
  

  
}

function draw() {
 background(220);
if (shape == 1){ if (mouse.pressing('left')>0){
  ball = new balls.Sprite()
  ball.overlaps(balls)
  ball.d = 45
  ball.rotation = 0
  ball.rotationLock = 'true'
  ball.x = mouseX
  ball.y = mouseY
  ball.bounciness = 1
  ball.color = `rgb(${r},${g},${b1})`
  
 }
} else if (shape == 2){
  if (mouse.pressing('left')>0){
  ball = new balls.Sprite()
  ball.overlaps(balls)
  ball.w =  40
  ball.h = 40
  ball.rotation = 0
  ball.rotationLock = 'true'
  ball.x = mouseX
  ball.y = mouseY
  ball.bounciness = 1
  ball.color = `rgb(${r},${g},${b1})`
  }
}else if (shape == 3){
  if (mouse.pressing('left')>0){
  ball = new balls.Sprite()
  ball.overlaps(balls)
ball.h = 35
    ball.w = 55
  ball.rotation = 0
  ball.rotationLock = 'true'
  ball.x = mouseX
  ball.y = mouseY
  ball.bounciness = 1
ball.color = `rgb(${r},${g},${b1})`
  }
}
  
  
for (let currentball of balls){
  
if (currentball.y > b){
if (poop == 1){if (currentball.y < b + 30){pop.play()}}
  currentball.remove()
  poop += 1
}
  
}
  if (kb.pressing("down")){
    b += 2
    strokeWeight(10)
  line(b - 99999999, b + 15, b + 99999999, b + 15)
   strokeWeight(1)
  } else if (kb.pressing("up")){
   b -=2
   strokeWeight(10)
  line(b - 9999999999, b + 25, b + 999999, b + 25)
   strokeWeight(1)
 } 
  
  if (b > windowHeight + 5){
    
    b = windowHeight + 5
  }
  if (b < 100){
    
    b = 100
  }
if (kb.pressed('space')){
  shape+=1
  
}
 if (shape == 4){
   shape = 1
   
 }   
    if (poop > 4){
      poop = 1
    }
  if (kb.presses('c')){
  balls.removeAll()
    
  }

  if (mouse.pressing('left'))
  if (r == 255 && g < 255 && b1 == 0){
  g += 15
} else if (g == 255 && r > 0){
  r -= 15
} else if (g == 255 && b1 < 255){
  b1 += 15
} else if (b1 == 255 && g > 0){
  g -= 15
} else if (b1 == 255 && r < 255){
  r += 15
} else if (r == 255 && b1 > 0){
  b1 -= 15
}
}