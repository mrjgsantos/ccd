let bases = [];
let janelas = [];
let telhados = [];
let portas = [];

let posXPorta = [];
let posXJanela = [];

let randomPorta = [];
let randomBase = [];
let randomJanela = [];

let tamanho = Math.round(2 + Math.random() * 2);
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
    //console.log(img);
    img.resize(round(img.width / tamanho), 0);
    data[janela]["imagem"] = img;
    data[janela]["resizeFactor"] = tamanho;
    //janelas.push(loadImage(janelaInfo[janela]["ima
    //janelas.push(loadImage(janelaInfo[janela]["imagem"]));
    janelas.push(data[janela]);
  }

  console.log(janelas);
}

async function loadPortas(data) {
  console.log(data);
  console.log("entrei");
  for (const porta of Object.keys(data)) {
    let img = await loadImage(data[porta]["imagePath"]);
    //console.log(img);
    //console.log("tamanho1:", img.width, tamanho);
    // img.resize(round(img.width / round(tamanho)), 0);
    console.log("pos", img);
    data[porta]["imagem"] = img;
    data[porta]["resizeFactor"] = round(tamanho);
    //janelas.push(loadImage(janelaInfo[janela]["imagem"]));
    portas.push(data[porta]);
  }

  console.log(portas);
}

async function loadBases(data) {
  console.log(data);
  console.log("entrei");
  for (const base of Object.keys(data)) {
    let img = await loadImage(data[base]["imagePath"]);
    console.log(img);
    console.log("tamanho1:", img.width, tamanho);
    // img.resize(round(img.width / round(tamanho)), 0);
    console.log("pos", img);
    data[base]["imagem"] = img;
    data[base]["resizeFactor"] = round(tamanho);
    //janelas.push(loadImage(janelaInfo[janela]["imagem"]));
    bases.push(data[base]);
  }

  console.log(bases);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  randomAndares = int(random(2, 10));

  for (let i = 0; i < randomAndares; i++) {
    randomJanela[i] = random(janelas);
    randomPorta[i] = random(portas);
    randomBase[i] = random(bases);
    randomPosX = random(0, width - randomBase[i].imagem.width);
    posXPorta[i] = random(
      randomPosX,
      randomPosX + randomPorta[i].imagem.width - randomPorta[i].imagem.width
    );
    posXJanela[i] = random(
      randomPosX,
      randomPosX + randomBase[i].imagem.width - randomJanela[i].imagem.width
    );

    print(posXJanela);
    print(
      randomPosX + randomJanela[i].imagem.width - randomJanela[i].imagem.width
    );
  }
}

function draw() {
  background(220);
  for (let i = 0; i < randomAndares; i++) {
    image(randomBase[i].imagem, randomPosX, i * randomBase[i].imagem.height);
    console.log(randomBase[i]);
    image(
      randomPorta[i].imagem,

      posXPorta[i],
      (i + 1) * randomBase[i].imagem.height - randomPorta[i].imagem.height
    );

    image(
      randomJanela[i].imagem,
      posXJanela[i],
      i * randomBase[i].imagem.height + randomBase[i].imagem.height * 0.1,
      randomJanela[i].imagem.width / tamanho,
      randomJanela[i].imagem.height / tamanho
    );
  }
}

function keyPressed() {
  /* for (const j of Object.keys(janelas)) {
    janelas[j]["resizeFactor"] = random(2, 5);
  }*/
  tamanho = random(2, 5);
}
