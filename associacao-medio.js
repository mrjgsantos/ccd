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
    posXPorta[i] = int(
      random(
        randomPosX,
        randomPosX + randomBase[i].imagem.width / round(tamanho)
      )
    );
    /**********************************************************/
    strokeWeight(5);
    posXJanela[i] = random(randomPosX, randomPosX + randomBase[i].imagem.width);
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
    //Base
    image(
      randomBase[i].imagem,
      randomPosX,
      i * randomBase[i].imagem.height,
      int(randomBase[i].imagem.width / tamanho),
      int(randomBase[i].imagem.height / tamanho)
    );

    //Porta
    /***************************** */
    image(
      randomPorta[i].imagem,
      random(
        randomPosX,
        randomPosX + randomBase[i].imagem.width / round(tamanho)
      ),
      (i + 1) * randomPorta[i].imagem.height - randomPorta[i].imagem.height,
      randomPorta[i].imagem.width / tamanho,
      randomPorta[i].imagem.width / tamanho
    );
    /********************************** */

    //Janela
    image(
      randomJanela[i].imagem,
      posXJanela[i],
      i * randomJanela[i].imagem.height + randomJanela[i].imagem.height * 0.1,
      randomJanela[i].imagem.width / tamanho,
      randomJanela[i].imagem.height / tamanho
    );
    console.log("Array de PosX no draw= " + posXPorta);
  }
}
/*
function keyPressed() {
  tamanho = random(5, 10);
}*/
