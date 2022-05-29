let bases = [];
let janelas = [];
let telhados = [];
let portas = [];

let objBases = [];

let posXPorta = [];
let posXJanela = [];

let randomPorta = [];
let randomBase = [];
let randomJanela = [];

let tamanho = Math.round(5 + Math.random() * 10);
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
  createCanvas(windowWidth, 1400);

  nTorres = int(random(2, 10));

  for (let x = 0; x < nTorres; x++) {
    nAndares[x] = int(random(2, maxAndares));
    randomPosX[x] = int(random(0, width - maxWidthBase));
    randomScale[x] = Math.round(5 + Math.random() * 10);
    paisagem[x] = []; // create nested array
    for (let y = 0; y < maxAndares + 2; y++) {
      paisagem[x][y];
    }
  }

  for (let x = 0; x < nTorres; x++) {
    for (let y = 0; y < nAndares[x]; y++) {
      paisagem[x][y] = 1;
    }
  }

  for (let x = 0; x < nTorres; x++) {
    paisagem[x][nAndares + 1] = randomPosX[x];
    paisagem[x][nAndares + 2] = randomScale[x];

    for (let i = 0; i < nAndares[i]; i++) {
      randomJanela[i] = random(janelas);
      randomPorta[i] = random(portas);
      randomBase[i] = random(bases);

      //randomPosX = int(random(0, width - randomBase[i].imagem.width));

      posXPorta[i] = round(random(9.4));

      strokeWeight(5);
      posXJanela[i] = random(
        randomPosX,
        randomPosX + randomBase[i].imagem.width
      );
      console.log("PosX= " + posXPorta[i]);
      console.log("min= " + randomPosX);
      console.log(
        "max= " + int(randomPosX + randomBase[i].imagem.width / tamanho)
      );
      console.log("  ");
    }
  }
  print(paisagem);
}

function draw() {
  background(220);

  for (let x = 0; x < nTorres; x++) {
    for (let i = 0; i < nAndares[x]; i++) {
      const baseWidth = round(randomBase[i].imagem.width / tamanho);
      const baseHeight = round(randomBase[i].imagem.height / tamanho);
      const portaWidth = round(randomPorta[i].imagem.width / tamanho);
      const portaHeight = round(randomPorta[i].imagem.height / tamanho);

      const availableWidth =
        baseWidth - (randomPorta[i].imagem.width / tamanho) * 2;

      /*
      //Base
      image(
        randomBase[i].imagem,
        randomPosX[x],
        height - (i + 1) * baseHeight,
        baseWidth,
        baseHeight
      );
      print(randomBase[i].imagem.height);

      const availableWidth =
        baseWidth - (randomPorta[i].imagem.width / tamanho) * 2;

      //porta
      image(
        randomPorta[i].imagem,
        randomPosX[x] +
          randomPorta[i].imagem.width / tamanho +
          (availableWidth / 10) * posXPorta[i], // srebelo: removed random(randomPosX, randomPosX,randomPosX + randomBase[i].imagem.width / round(tamanho))
        height - baseHeight * i - portaHeight, // @srebelo: removed  (- randomPorta[i].imagem.height)

        randomPorta[i].imagem.width / tamanho,
        randomPorta[i].imagem.height / tamanho
      );

      //Janela
      image(
        randomJanela[i].imagem,
        posXJanela[i],
        i * randomJanela[i].imagem.height + randomJanela[i].imagem.height * 0.1,
        randomJanela[i].imagem.width / tamanho,
        randomJanela[i].imagem.height / tamanho
      );*/
    }
  }
  /*
  for (let i = 0; i < nAndares[1]; i++) {
    // srebelo: added
    const baseWidth = round(randomBase[i].imagem.width / tamanho);
    const baseHeight = round(randomBase[i].imagem.height / tamanho);
    const portaWidth = round(randomPorta[i].imagem.width / tamanho);
    const portaHeight = round(randomPorta[i].imagem.height / tamanho);

    //Base
    image(
      randomBase[i].imagem,
      randomPosX[1],
      height - (i + 1) * baseHeight,
      baseWidth,
      baseHeight
    );
    print(randomBase[i].imagem.height);

    const availableWidth =
      baseWidth - (randomPorta[i].imagem.width / tamanho) * 2;

    //porta
    image(
      randomPorta[i].imagem,
      randomPosX[1] +
        randomPorta[i].imagem.width / tamanho +
        (availableWidth / 10) * posXPorta[i], // srebelo: removed random(randomPosX, randomPosX,randomPosX + randomBase[i].imagem.width / round(tamanho))
      height - baseHeight * i - portaHeight, // @srebelo: removed  (- randomPorta[i].imagem.height)

      randomPorta[i].imagem.width / tamanho,
      randomPorta[i].imagem.height / tamanho
    );

    //Janela
    image(
      randomJanela[i].imagem,
      posXJanela[i],
      i * randomJanela[i].imagem.height + randomJanela[i].imagem.height * 0.1,
      randomJanela[i].imagem.width / tamanho,
      randomJanela[i].imagem.height / tamanho
    );
  } */
  // noLoop(); // srebelo: DEBUG
}
/*
function keyPressed() {
  tamanho = random(5, 10);
}*/

class Andar {
  constructor(
    temTelhado,
    temPorta,
    nPortas,
    posPortas,
    nJanelas,
    posJanelas,
    imgsJanelas,
    imgsPortas
  ) {
    this.temTelhado = temTelhado;
    this.temPorta = temPorta;
    this.nPortas = nPortas;
    this.posPortas = posPortas;
    this.nJanelas = nJanelas;
    this.posJanelas = posJanelas;
    this.imgsJanelas = imgsJanelas;
    this.imgsPortas = imgsPortas;
  }

  drawAndar(imgBase, imgsPorta, imgsJanelas, imgTelhados) {
    image(
      imgBase,
      randomPosX[x],
      height - (i + 1) * baseHeight,
      baseWidth,
      baseHeight
    );
    print(randomBase[i].imagem.height);

    const availableWidth =
      baseWidth - (randomPorta[i].imagem.width / tamanho) * 2;

    //Base
    image(
      imgBase,
      randomPosX[x],
      height - (i + 1) * baseHeight,
      baseWidth,
      baseHeight
    );
    print(randomBase[i].imagem.height);

    //porta
    image(
      imgsPorta,
      randomPosX[x] +
        randomPorta[i].imagem.width / tamanho +
        (availableWidth / 10) * posXPorta[i], // srebelo: removed random(randomPosX, randomPosX,randomPosX + randomBase[i].imagem.width / round(tamanho))
      height - baseHeight * i - portaHeight, // @srebelo: removed  (- randomPorta[i].imagem.height)

      randomPorta[i].imagem.width / tamanho,
      randomPorta[i].imagem.height / tamanho
    );

    //Janela
    image(
      imgsJanelas,
      posXJanela[i],
      i * randomJanela[i].imagem.height + randomJanela[i].imagem.height * 0.1,
      randomJanela[i].imagem.width / tamanho,
      randomJanela[i].imagem.height / tamanho
    );
  }
}
