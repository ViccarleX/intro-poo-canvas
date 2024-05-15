const canvasOPP = document.getElementById("canvasOPP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOPP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOPP.height = 200;
canvasOPP.width = 300;
canvasRandom.height = 200;
canvasRandom.width = 300;
canvasMultiple.height = 200;
canvasMultiple.width = 300;

canvasOPP.style.background = "#C936DE";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#e6f7f6";

class Circle {
    constructor(x, y, radius, color, text, backcolor) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.backcolor;
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.stroke();
        
        context.fillStyle = "white";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.posX, this.posY);
        context.closePath();
    }
}

// Función para asegurar que los círculos no se corten en los bordes del canvas
function validPlacement(x, y, radius, canvas) {
    return (x - radius > 0 && x + radius < canvas.width && y - radius > 0 && y + radius < canvas.height);
}

let randomX, randomY, randomRadius;
do {
    randomX = Math.random() * (canvasRandom.width - 50) + 25;
    randomY = Math.random() * (canvasRandom.height - 50) + 25;
    randomRadius = Math.floor(Math.random() * 50 + 30);  // Radio entre 30 y 80
} while (!validPlacement(randomX, randomY, randomRadius, canvasRandom));

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, 'red', 'Tec', 'green');
miCirculoRandom.draw(ctxRandom);

let arrayCircle = [];
for (let i = 0; i < 10; i++) {
    do {
        randomX = Math.random() * (canvasMultiple.width - 50) + 25;
        randomY = Math.random() * (canvasMultiple.height - 50) + 25;
        randomRadius = Math.floor(Math.random() * 50 + 30);
    } while (!validPlacement(randomX, randomY, randomRadius, canvasMultiple));

    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "blue", i + 1, "green");
    arrayCircle.push(miCirculoMultiple);
    arrayCircle[i].draw(ctxMultiple);
}

// Dibujar un círculo fijo en el primer canvas
let miCirculo = new Circle(canvasOPP.width/2, canvasOPP.height/2, 50, 'red', 'Tec', 'green');
miCirculo.draw(ctx);
