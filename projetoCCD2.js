let bases = [];
let janelas = [];
let telhados = [];
let portas = [];
let individuals = [];

let andares = [];
let torres = [];

let torre;
let pop;

let posXPortas = [];
let posYPortas = [];

let posJanelas = [];

let randomPorta = [];
let randomBase = [];
let randomJanela = [];
let randomTelhado = [];

let scale = [];
let randomPosX = [];

let maxAndares = 10;
let maxWidthBase = 75;
let nAndares = [];

let nTorres;
let paisagem = [];

function preload() {
  loadJSON("janelas.json", loadJanelas);
  loadJSON("portas.json", loadPortas);
  loadJSON("bases.json", loadBases);
  loadJSON("telhados.json", loadTelhados);
}

//Load Janelas
async function loadJanelas(data) {
  for (const janela of Object.keys(data)) {
    let img = await loadImage(data[janela]["imagePath"]);
    data[janela]["imagem"] = img;
    janelas.push(data[janela]);
  }
}

//Load Portas
async function loadPortas(data) {
  for (const porta of Object.keys(data)) {
    let img = await loadImage(data[porta]["imagePath"]);
    data[porta]["imagem"] = img;
    portas.push(data[porta]);
  }
}

//Load Bases
async function loadBases(data) {
  for (const base of Object.keys(data)) {
    let img = await loadImage(data[base]["imagePath"]);
    data[base]["imagem"] = img;
    bases.push(data[base]);
  }
}

//Load Telhados
async function loadTelhados(data) {
  for (const telhado of Object.keys(data)) {
    let img = await loadImage(data[telhado]["imagePath"]);
    data[telhado]["imagem"] = img;
    telhados.push(data[telhado]);
  }
}

function setup() {
  imageMode(CORNER);

  createCanvas(windowWidth, 1400);

  pop = new Population();
  pop.initialize();
  //pop = new Population();
  //pop.initialize();
}

function draw() {
  background(0, 255, 255);
  //desenhar a paisagem
  for (let x = 0; x < nTorres; x++) {
    for (let y = 0; y < nAndares[x]; y++) {
      if (y < nAndares[x] - 1) {
        paisagem[x][y].drawBase();
        paisagem[x][y].drawJanelas();
      }
      if (y == 0) {
        paisagem[x][y].drawPortas();
      }
      if (y == nAndares[x] - 1) {
        paisagem[x][y].drawTelhados();
      }
    }
  }
  //print(andares);
  //noLoop();
}
