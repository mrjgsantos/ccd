let bases = [];
let janelas = [];
let telhados = [];
let portas = [];
let posXPorta= [];
let posXJanela= [];

let imgPorta1;
let imgPorta2;
let imgBase1;
let imgBase2;
let imgJanela1;
let imgJanela2;
let imgTelhado1;
let imgTelhado2;

let randomPorta=[];
let randomBase=[];
let randomJanela=[];

let tamanho;
let randomPosX;
let randomAndares;

function preload() {

    imgPorta1 = loadImage('data/ds.png');
  imgPorta2 = loadImage('data/ds2.png');
    imgBase1 = loadImage("data/b1x1.png");
    imgJanela1 = loadImage("data/wb.png");
  imgJanela2 = loadImage("data/wb2.png");
   
    
}

function setup() {
    createCanvas(500, 500);
    tamanho=random(15,20);
    
    imgBase1.resize(imgBase1.width/tamanho,imgBase1.height/tamanho);
    imgPorta1.resize(imgPorta1.width/tamanho,imgPorta1.height/tamanho);
  imgPorta2.resize(imgPorta2.width/tamanho,imgPorta2.height/tamanho);
  imgJanela1.resize(imgJanela1.width/tamanho,imgJanela1.height/tamanho);
  imgJanela2.resize(imgJanela2.width/tamanho,imgJanela2.height/tamanho);
    randomAndares=int(random(2,10));
    
    
    
    janelas = [{
            nome: "Botanico",
            imagem:imgJanela1,
            estilo: "Barroco",
            altura: "1",
            largura: "2",
        },
               {
            nome: "Botanico",
            imagem:imgJanela2,
            estilo: "Barroco",
            altura: "1",
            largura: "2",
        },
        
    ];

    portas = [{
            nome: "Botanico",
            imagem:imgPorta1,
            estilo: "Barroco",
            altura: "1",
            largura: "2",
        },
        {
            nome: "Botanico",
            imagem:imgPorta2,
            estilo: "Barroco",
            altura: "1",
            largura: "2",
        },
    ];

    bases = [{
            nome: "Botanico",
            imagem:imgBase1,
            estilo: "Barroco",
            altura: "1",
            largura: "2",
        },
        
    ];
  telhados = [{
            nome: "Botanico",
            imagem:imgTelhado1,
            estilo: "Barroco",
            altura: "1",
            largura: "2",
        },
        
    ];
  randomPosX=random(0,width-imgBase1.width);
  for(let i=0; i<randomAndares;i++){
      
      randomPorta[i] = random(portas);
    randomBase[i] = random(bases);
    
    posXPorta[i]=random(randomPosX,randomPosX + imgBase1.width - imgPorta1.width);
    posXJanela[i]=random(randomPosX,randomPosX + imgBase1.width - imgJanela1.width);
    randomJanela[i] = random(janelas);
    print(posXJanela)
    }
  print(randomPosX + imgJanela1.width - imgJanela1.width);
}

function draw() {
    background(245);  
  for(let i=0; i<randomAndares; i++){
    image(randomBase[i].imagem,randomPosX,i*randomBase[i].imagem.height);
   image(randomPorta[i].imagem,posXPorta[i],(i+1)*randomBase[i].imagem.height-randomPorta[i].imagem.height);
    image(randomJanela[i].imagem,posXJanela[i],(i*randomBase[i].imagem.height)+randomBase[i].imagem.height*0.1);
  }
}

