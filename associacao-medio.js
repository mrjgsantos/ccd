let bases = [];
let janelas = [];
let telhados = [];
let portas = [];

let posXPorta = [];
let posXJanela = [];

let randomPorta = [];
let randomBase = [];
let randomJanela = [];

let tamanho = Math.round(5 + Math.random() * 10);
let randomPosX;
let randomAndares;

function preload() {
  loadJSON("janelas.json", loadJanelas);
  loadJSON("portas.json", loadPortas);
  loadJSON("bases.json", loadBases);
}

async function loadJanelas(data) {
  for (const janela of Object.keys(data)) {
    let img = await loadImage(data[janela]["imagePath"]);
    img.resize(round(img.width / tamanho), 0);
    data[janela]["imagem"] = img;
    data[janela]["resizeFactor"] = tamanho;
    janelas.push(data[janela]);
  }
}

async function loadPortas(data) {
  for (const porta of Object.keys(data)) {
    let img = await loadImage(data[porta]["imagePath"]);
    data[porta]["imagem"] = img;
    data[porta]["resizeFactor"] = round(tamanho);
    portas.push(data[porta]);
  }
}

async function loadBases(data) {
  for (const base of Object.keys(data)) {
    let img = await loadImage(data[base]["imagePath"]);
    data[base]["imagem"] = img;
    data[base]["resizeFactor"] = round(tamanho);
    bases.push(data[base]);
  }
}

function setup() {
  imageMode(CORNER);
  createCanvas(windowWidth, windowHeight);


  randomAndares = int(random(2, 10));

  for (let i = 0; i < randomAndares; i++) {
    randomJanela[i] = random(janelas);
    randomPorta[i] = random(portas);
    randomBase[i] = random(bases);

    randomPosX = int(random(0, width - randomBase[i].imagem.width));
    /**********************************************************/
    /*posXPorta[i] = int(
      random(
        randomPosX,
        randomPosX + randomBase[i].imagem.width / round(tamanho)
      )
    );*/
    // normalise the values between 0-10
    posXPorta[i] = round(random(9.4));

    /*random(
        randomPosX,
        randomPosX + randomBase[i].imagem.width / round(tamanho)
    )*/

    /**********************************************************/
    strokeWeight(5);
    // posXJanela[i] = random(randomPosX, randomPosX + randomBase[i].imagem.width);
    console.log("PosX= " + posXPorta[i]);
    console.log("min= " + randomPosX);
    console.log(
      "max= " + int(randomPosX + randomBase[i].imagem.width / tamanho)
    );
    console.log("  ");
  }
}

function draw() {
  background(220);

  for (let i = 0; i < randomAndares; i++) {
    // srebelo: added
    const baseWidth = round(randomBase[i].imagem.width / tamanho);
    const baseHeight = round(randomBase[i].imagem.height / tamanho)

    //Base
    image(
      randomBase[i].imagem,
        randomPosX,
        i * randomBase[i].imagem.height,
        baseWidth, //srebelo: removed  int(randomBase[i].imagem.width / tamanho)
        baseHeight // srebelo: removed  int(randomBase[i].imagem.height / tamanho)
    );

    //Porta
    // srebelo: added
    // availableWidth: space available to place door (base width - "door margins")
    const availableWidth = baseWidth - ((randomPorta[i].imagem.width / tamanho * 2));
    image(
        randomPorta[i].imagem,
        randomPosX + (randomPorta[i].imagem.width / tamanho) + (availableWidth/10 * posXPorta[i]), // srebelo: removed random(randomPosX, randomPosX,randomPosX + randomBase[i].imagem.width / round(tamanho))
        round((i + 1) * (randomPorta[i].imagem.height / tamanho * 2)), // @srebelo: removed  (- randomPorta[i].imagem.height)
        randomPorta[i].imagem.width / tamanho,
        randomPorta[i].imagem.width / tamanho
    );
    fill(0);
    text(posXPorta[i], randomPosX + (availableWidth/10 * posXPorta[i]), round((i + 1) * (randomPorta[i].imagem.height / tamanho * 2))-10);


    // srebelo: DEBUG
    // available area
    // fill(255, 0, 0, 50);
    // noStroke();
    // rect(randomPosX + ((randomPorta[i].imagem.width / tamanho)), i * randomBase[i].imagem.height, availableWidth, baseHeight);

    //Janela
    image(
      randomJanela[i].imagem,
      posXJanela[i],
      i * randomJanela[i].imagem.height + randomJanela[i].imagem.height * 0.1,
      randomJanela[i].imagem.width / tamanho,
      randomJanela[i].imagem.height / tamanho
    );
    // console.log("Array de PosX no draw= " + posXPorta);
  }
  // noLoop(); // srebelo: DEBUG
}
/*
function keyPressed() {
  tamanho = random(5, 10);
}*/
