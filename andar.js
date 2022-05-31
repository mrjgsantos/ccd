class Andar {
  constructor(
    posX,
    posY,
    baseWidth,
    baseHeight,
    telhadoWidth,
    telhadoHeight,
    nPortas,
    posXPorta,
    posYPorta,
    portaWidth,
    portaHeight,
    nJanelas,
    posJanela,
    janelaWidth,
    janelaHeight,
    imgsJanelas,
    imgsPortas,
    imgBase,
    imgTelhado
  ) {
    this.posX = posX;
    this.posY = posY;
    this.baseWidth = baseWidth;
    this.baseHeight = baseHeight;
    this.telhadoWidth = telhadoWidth;
    this.telhadoHeight = telhadoHeight;
    this.nPortas = nPortas;
    this.posXPorta = posXPorta;
    this.posYPorta = posYPorta;
    this.portaWidth = portaWidth;
    this.portaHeight = portaHeight;
    this.nJanelas = nJanelas;
    this.posJanela = posJanela;
    this.janelaWidth = janelaWidth;
    this.janelaHeight = janelaHeight;
    this.imgsJanelas = imgsJanelas;
    this.imgsPortas = imgsPortas;
    this.imgBase = imgBase;
    this.imgTelhado = imgTelhado;
  }

  drawBase() {
    //Base
    image(this.imgBase, this.posX, this.posY, this.baseWidth, this.baseHeight);
  }
  drawJanelas() {
    //janela
    //shuffle(posXYJanelas, true);

    for (let i = 0; i < this.nJanelas; i++) {
      image(
        this.imgsJanelas,
        //this.posX + this.posXJanela + i * 10,
        this.posX + this.posJanela[i].posX,
        this.posJanela[i].posY,
        this.janelaWidth,
        this.janelaHeight
      );
    }
  }
  drawPortas() {
    //porta
    image(
      this.imgsPortas,
      this.posX + this.posXPorta,
      this.posYPorta,
      this.portaWidth,
      this.portaHeight
    );
    //print("PosXPorta" + this.posXPorta);
  }
  drawTelhados() {
    //porta
    image(
      this.imgTelhado,
      this.posX,
      this.posY,
      this.telhadoWidth,
      this.telhadoHeight
    );
    //print("PosXPorta" + this.posXPorta);
  }
}
