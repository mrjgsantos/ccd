let bases = [];
let janelas = [];
let telhados = [];
let portas = [];
let posXPorta = [];
let posXJanela = [];

let imgPorta1;
let imgPorta2;
let imgPorta3;
let imgPorta4;
let imgPorta5;
let imgPorta6;
let imgBase1;
let imgBase2;
let imgBase3;
let imgJanela1;
let imgJanela2;
let imgJanela3;
let imgJanela4;
let imgJanela5;
let imgJanela6;
let imgJanela7;
let imgTelhado1;
let imgTelhado2;

let randomPorta = [];
let randomBase = [];
let randomJanela = [];

let tamanho;
let randomPosX;
let randomAndares;

function preload() {
  imgPorta1 = loadImage("data//doors/db_1.png");
  imgPorta2 = loadImage("data//doors/db_2.png");
  imgPorta3 = loadImage("data//doors/db_3.png");
  imgPorta4 = loadImage("data//doors/ds_1.png");
  imgPorta5 = loadImage("data//doors/ds_2.png");
  imgPorta6 = loadImage("data//doors/ds_3.png");
  imgBase1 = loadImage("data/bases/b1.png");
  imgBase2 = loadImage("data/bases/b2.png");
  imgBase3 = loadImage("data/bases/b3.png");
  imgJanela1 = loadImage("data/windows/wb_1.png");
  imgJanela2 = loadImage("data/windows/wb_2.png");
  imgJanela3 = loadImage("data/windows/wb_3.png");
  imgJanela4 = loadImage("data/windows/ws_1.png");
  imgJanela5 = loadImage("data/windows/ws_2.png");
  imgJanela6 = loadImage("data/windows/ws_3.png");
  imgJanela7 = loadImage("data/windows/ws_4.png");
}

function setup() {
  createCanvas(500, 500);
  tamanho = random(15, 20);

  imgBase1.resize(imgBase1.width / tamanho, imgBase1.height / tamanho);
  imgPorta1.resize(imgPorta1.width / tamanho, imgPorta1.height / tamanho);
  imgPorta2.resize(imgPorta2.width / tamanho, imgPorta2.height / tamanho);
  imgPorta3.resize(imgPorta3.width / tamanho, imgPorta3.height / tamanho);
  imgPorta4.resize(imgPorta4.width / tamanho, imgPorta4.height / tamanho);
  imgPorta5.resize(imgPorta5.width / tamanho, imgPorta5.height / tamanho);
  imgPorta6.resize(imgPorta6.width / tamanho, imgPorta6.height / tamanho);
  imgJanela1.resize(imgJanela1.width / tamanho, imgJanela1.height / tamanho);
  imgJanela2.resize(imgJanela2.width / tamanho, imgJanela2.height / tamanho);
  randomAndares = int(random(2, 10));

  janelas = [
    {
      nome: "Botanico",
      imagem: imgJanela1,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgJanela2,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgJanela3,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgJanela4,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgJanela5,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgJanela6,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgJanela7,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
  ];

  portas = [
    {
      nome: "Botanico",
      imagem: imgPorta1,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgPorta2,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgPorta3,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgPorta4,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgPorta5,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgPorta6,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
  ];

  bases = [
    {
      nome: "Botanico",
      imagem: imgBase1,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgBase2,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
    {
      nome: "Botanico",
      imagem: imgBase3,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
  ];
  telhados = [
    {
      nome: "Botanico",
      imagem: imgTelhado1,
      estilo: "Barroco",
      altura: "1",
      largura: "2",
    },
  ];
  randomPosX = random(0, width - imgBase1.width);
  for (let i = 0; i < randomAndares; i++) {
    randomPorta[i] = random(portas);
    randomBase[i] = random(bases);

    posXPorta[i] = random(
      randomPosX,
      randomPosX + imgBase1.width - imgPorta1.width
    );
    posXJanela[i] = random(
      randomPosX,
      randomPosX + imgBase1.width - imgJanela1.width
    );
    randomJanela[i] = random(janelas);
    print(posXJanela);
  }
  print(randomPosX + imgJanela1.width - imgJanela1.width);
}

function draw() {
  background(220);
  for (let i = 0; i < randomAndares; i++) {
    image(randomBase[i].imagem, randomPosX, i * randomBase[i].imagem.height);
    image(
      randomPorta[i].imagem,
      posXPorta[i],
      (i + 1) * randomBase[i].imagem.height - randomPorta[i].imagem.height
    );
    image(
      randomJanela[i].imagem,
      posXJanela[i],
      i * randomBase[i].imagem.height + randomBase[i].imagem.height * 0.1
    );
  }
}
