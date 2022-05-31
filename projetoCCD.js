let bases = [];
let janelas = [];
let telhados = [];
let portas = [];

let andares = [];
let torres = [];

let torre;

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

  nTorres = int(random(2, 35));

  //Criar um valor de nAndares, scale, posXrandom
  for (let x = 0; x < nTorres; x++) {
    nAndares[x] = int(random(2, maxAndares));
    scale[x] = Math.round(5 + Math.random() * 10);
    randomPosX[x] = int(random(0, width - maxWidthBase));
    torre = new Torre(nAndares[x], scale[x], randomPosX[x]);

    // Criar array 2D
    paisagem[x] = [];
    for (let y = 0; y < maxAndares + 2; y++) {
      paisagem[x][y];
    }
  }

  print(paisagem);
  for (let x = 0; x < nTorres; x++) {
    //atribuir a randomPosX e o Scale às ultimas posições do array
    paisagem[x][maxAndares + 2] = torre.posX;
    paisagem[x][maxAndares + 1] = torre.scale;
    //console.log(torre.posX);
    for (let y = 0; y < nAndares[x]; y++) {
      //escolher elementos random para cada andar

      // print(posXYJanelas[0].posX);
      randomJanela[y] = random(janelas);
      randomPorta[y] = random(portas);
      randomBase[y] = random(bases);
      randomTelhado[y] = random(telhados);

      //larguras e alturas dos elementos
      const baseWidth = round(randomBase[y].imagem.width / scale[x]);
      const baseHeight = round(randomBase[y].imagem.height / scale[x]);
      const telhadoWidth = round(randomTelhado[y].imagem.width / scale[x]);
      const telhadoHeight = round(randomTelhado[y].imagem.height / scale[x]);
      const portasWidth = round(randomPorta[y].imagem.width / scale[x]);
      const portasHeight = round(randomPorta[y].imagem.height / scale[x]);
      const janelasWidth = round(randomJanela[y].imagem.width / scale[x]);
      const janelasHeight = round(randomJanela[y].imagem.height / scale[x]);
      const availableWidth =
        baseWidth - (randomPorta[y].imagem.width / scale[x]) * 2;

      //posiçõs dos elementos
      posXPortas[y] = portasWidth + (availableWidth / 20) * round(random(19.4));
      posYPortas[y] = height - baseHeight * y - portasHeight;
      posJanelas = [
        {
          posX: 1 * (baseWidth / 19),
          posY: height - (y + 1) * baseHeight + (1 * baseHeight) / 19,
        },
        {
          posX: 7 * (baseWidth / 19),
          posY: height - (y + 1) * baseHeight + (1 * baseHeight) / 19,
        },
        {
          posX: 13 * (baseWidth / 19),
          posY: height - (y + 1) * baseHeight + (1 * baseHeight) / 19,
        },
        {
          posX: 1 * (baseWidth / 19),
          posY: height - (y + 1) * baseHeight + (7 * baseHeight) / 19,
        },
        {
          posX: 7 * (baseWidth / 19),
          posY: height - (y + 1) * baseHeight + (7 * baseHeight) / 19,
        },
        {
          posX: 13 * (baseWidth / 19),
          posY: height - (y + 1) * baseHeight + (7 * baseHeight) / 19,
        },
      ];

      //print(posJanelas[0].posX);
      //criar andar
      let andar = new Andar(
        randomPosX[x],
        height - (y + 1) * baseHeight,
        baseWidth,
        baseHeight,
        telhadoWidth,
        telhadoHeight,
        1,
        posXPortas[y],
        posYPortas[y],
        portasWidth,
        portasHeight,
        int(random(1, 7)),
        posJanelas,
        janelasWidth,
        janelasHeight,
        randomJanela[y].imagem,
        randomPorta[y].imagem,
        randomBase[y].imagem,
        randomTelhado[y].imagem
      );
      andares.push(andar);
      paisagem[x][y] = andar;
    }
  }
  print(paisagem);
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
