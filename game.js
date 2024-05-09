const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const spillerImg = new Image();
    spillerImg.src = "bilder/spiller.png"; 
    const haiImg = new Image();
    haiImg.src = "bilder/hai.png"; 

const spiller = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width:50,
    height:50,
    fart: 5
}

const hai = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: 50,
    height:50,
    fart: 3
}

function move(event){
    switch(event.key){
        case "ArrowUp":
            spiller.y -= spiller.fart
            break
        case "arrowDown":
            spiller.y+=spiller.fart
            break
        case "arrowLeft":
            spiller.x -= spiller.fart
            break
        case "arrowRight":
            spiller.x += spiller.fart
            break
    }
}

function checkCollision() {
    if (spiller.x < hai.x + hai.width &&
        spiller.x + spiller.width > hai.x &&
        spiller.y < hai.y + hai.height &&
        spiller.y + spiller.height > hai.y) {
        return true;
    }
    return false;
}

function tegn() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(spillerImg, spiller.x, spiller.y, spiller.width, spiller.height);
    ctx.drawImage(haiImg, hai.x, hai.y, hai.width, hai.height);
}

function update() {
    // Move shark towards the person
    if (spiller.x < hai.x) {
       hai.x -= hai.fart;
    } else {
        hai.x += hai.fart;
    }
    
    if (spiller.y < hai.y) {
        hai.y -= hai.fart;
    } else {
        hai.y += hai.fart;
    }
}


        // Check for collision
        if (checkCollision()) {
            alert('You were caught by the shark! Game Over!');
            document.removeEventListener('keydown', move);
            location.reload();
        }

        if (spiller.x < 0) {
            spiller.x = 0;
        }
        if (spiller.x > canvas.width - spiller.width) {
            spiller.x = canvas.width - spiller.width;
        }
        if (spiller.y < 0) {
            spiller.y = 0;
        }
        if (spiller.y > canvas.height - spiller.height) {
            spiller.y = canvas.height - spiller.height;
        }
        function gameLoop() {
            tegn();
            update();
            requestAnimationFrame(gameLoop);
        }
        gameLoop()

        document.addEventListener('keydown', move);