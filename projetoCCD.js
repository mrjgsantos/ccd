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

let pg = [];
let pgAtual = 0;

const crossoverP = 0.9;
const mutatorP = 0.1;

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

  createCanvas(windowWidth, windowHeight);

  pop = new Population();
  pop.initialize();

  /*for (let i = 0; i < pop.pop.length; i++) {
    pg[i] = createGraphics(windowWidth, windowHeight);
    for (let x = 0; x < pop.getIndividual(i).length; x++) {
      for (let y = 0; y < pop.getIndividual(i)[x].floor; y++) {
        if (y < pop.getIndividual(i)[x].floor - 1) {
          pop.getIndividual(i)[x].floors[y].drawBase(pg[i]);
          pop.getIndividual(i)[x].floors[y].drawJanelas(pg[i]);
        }
        if (y == 0) {
          pop.getIndividual(i)[x].floors[y].drawPortas(pg[i]);
        }

        if (y == pop.getIndividual(i)[x].floor - 1) {
          pop.getIndividual(i)[x].floors[y].drawTelhados(pg[i]);
        }
      }
    }
  }*/
}

function draw() {
  background(255);
  for (let i = 0; i < pop.pop.length; i++) {
    const img = pop.getIndividual(i).getPhenotype();
    image(img, 0, 0);
    // image(img, (width / pop.pop.length) * i, 0, width / pop.pop.length, 100);
  }
  textSize(50);
  text("Paisagem " + (pgAtual + 1), 50, 50);
}

function keyPressed() {
  if (pgAtual < pop.pop.length - 1) {
    if (keyCode === RIGHT_ARROW) {
      pgAtual++;
      print(pgAtual);
    }
  }
  if (pgAtual > 0) {
    if (keyCode === LEFT_ARROW) {
      pgAtual--;
      print(pgAtual);
    }
  }
}
