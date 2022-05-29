let bases = [];
let janelas = [];
let telhados = [];
let portas = [];

let andares = [];

let posXPortas = [];
let posYPortas = [];
let posXJanela = [];

let randomPorta = [];
let randomBase = [];
let randomJanela = [];

//let tamanho = Math.round(5 + Math.random() * 10);
let tamanho = [];
let randomPosX = [];

let maxAndares = 10;
let maxWidthBase = 75;
let nAndares = [];
let randomScale = [];

let nTorres;
let paisagem = [];

function preload() {
  loadJSON("janelas.json", loadJanelas);
  loadJSON("portas.json", loadPortas);
  loadJSON("bases.json", loadBases);
}
async function loadJanelas(data) {
  for (const janela of Object.keys(data)) {
    let img = await loadImage(data[janela]["imagePath"]);
    //img.resize(round(img.width / tamanho), 0);
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
  createCanvas(windowWidth, 1400);

  nTorres = int(random(2, 25));

  for (let x = 0; x < nTorres; x++) {
    nAndares[x] = int(random(2, maxAndares));
    tamanho[x] = Math.round(5 + Math.random() * 10);
    randomPosX[x] = int(random(0, width - maxWidthBase));
    randomScale[x] = Math.round(5 + Math.random() * 10);
    paisagem[x] = []; // create nested array
    for (let y = 0; y < maxAndares + 2; y++) {
      paisagem[x][y];
    }
  }

  print(paisagem);
  for (let x = 0; x < nTorres; x++) {
    paisagem[x][maxAndares] = randomPosX[x];
    paisagem[x][maxAndares - 1] = randomScale[x];

    for (let y = 0; y < nAndares[x]; y++) {
      randomJanela[y] = random(janelas);
      randomPorta[y] = random(portas);
      randomBase[y] = random(bases);
      const baseWidth = round(randomBase[y].imagem.width / tamanho[x]);
      const baseHeight = round(randomBase[y].imagem.height / tamanho[x]);
      const portasWidth = round(randomPorta[y].imagem.width / tamanho[x]);
      const portasHeight = round(randomPorta[y].imagem.height / tamanho[x]);

      const availableWidth =
        baseWidth - (randomPorta[y].imagem.width / tamanho[x]) * 2;
      //randomPosX = int(random(0, width - randomBase[i].imagem.width));
      print("Available" + availableWidth);
      posXPortas[y] = portasWidth + (availableWidth / 10) * round(random(9.4));
      posYPortas[y] = height - baseHeight * y - portasHeight;
      // print(x);
      /*constructor(
        posX,
        posY,
        baseWidth,
        baseHeight,
        temTelhado,
        temPorta,
        nPortas,
        posXPortas,
        posYPortas,
        nJanelas,
        posJanelas,
        imgsJanelas,
        imgsPortas,
        imgBase,
        imgTelhado
      )*/
      let andar = new Andar(
        randomPosX[x],
        // height - (y + 1) * baseHeight,
        height - (y + 1) * baseHeight,
        baseWidth,
        baseHeight,
        false,
        true,
        1,
        posXPortas[y],
        posYPortas[y],
        portasWidth,
        portasHeight,
        1,
        posXJanela[0],
        randomJanela[y].imagem,
        randomPorta[y].imagem,
        randomBase[y].imagem,
        0
      );
      andares.push(andar);
      paisagem[x][y] = andar;
      // print("X= " + x + "Pos= " + randomPosX[x]);
      //print("nTorres" + nTorres);
    }
  }
  print(paisagem);
  //print(nTorres);
}
function draw() {
  background(220);
  for (let x = 0; x < nTorres; x++) {
    for (let y = 0; y < nAndares[x]; y++) {
      paisagem[x][y].drawAndar();
    }
  }
  print(andares);
  noLoop();
}

class Andar {
  constructor(
    posX,
    posY,
    baseWidth,
    baseHeight,
    temTelhado,
    temPorta,
    nPortas,
    posXPorta,
    posYPorta,
    portaWidth,
    portaHeight,
    nJanelas,
    posJanelas,
    imgsJanelas,
    imgsPortas,
    imgBase,
    imgTelhado
  ) {
    this.posX = posX;
    this.posY = posY;
    this.baseWidth = baseWidth;
    this.baseHeight = baseHeight;
    this.temTelhado = temTelhado;
    this.temPorta = temPorta;
    this.nPortas = nPortas;
    this.posXPorta = posXPorta;
    this.posYPorta = posYPorta;
    this.portaWidth = portaWidth;
    this.portaHeight = portaHeight;
    this.nJanelas = nJanelas;
    this.posJanelas = posJanelas;
    this.imgsJanelas = imgsJanelas;
    this.imgsPortas = imgsPortas;
    this.imgBase = imgBase;
    this.imgTelhado = imgTelhado;
  }

  desenha() {
    // image(randomBase[0], 20, 55, 55);
    image(randomBase[0].imagem, 20, 20);
  }

  drawAndar() {
    //const baseWidth = round(randomBase[i].imagem.width / tamanho);
    //const baseHeight = round(randomBase[i].imagem.height / tamanho);
    //const availableWidth =baseWidth - (randomPorta[i].imagem.width / tamanho) * 2;

    //Base
    image(this.imgBase, this.posX, this.posY, this.baseWidth, this.baseHeight);
    //print(randomBase[i].imagem.height);

    //porta
    image(
      this.imgsPortas,
      this.posX + this.posXPorta,
      //height - baseHeight * i - portaHeight,
      this.posYPorta,
      //randomPorta[i].imagem.width / tamanho,
      //randomPorta[i].imagem.height / tamanho,
      this.portaWidth,
      this.portaHeight
    );
    print("PosXPorta" + this.posXPorta);
    /*
    //Janela
    image(
      imgsJanelas,
      posXJanela[i],
      i * randomJanela[i].imagem.height + randomJanela[i].imagem.height * 0.1,
      randomJanela[i].imagem.width / tamanho,
      randomJanela[i].imagem.height / tamanho
    );*/
  }
}
