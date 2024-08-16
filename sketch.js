function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  function setup() {
    createCanvas(400, 400);
    background("pink")
  }
  
  function draw() {
    stroke("purple");
    fill("purple");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
    