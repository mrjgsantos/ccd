class Andar {
  constructor(base, door, window, roof) {
    this.base = base;
    this.door = door;
    this.window = window;
    this.roof = roof;
  }

  drawBase() {
    image(
      this.base.shape.imagem,
      this.base.posX,
      this.base.posY,
      this.base.width,
      this.base.height
    );
  }
  drawJanelas() {
    //janela
    //shuffle(posXYJanelas, true);

    for (let i = 0; i < 6; i++) {
      image(
        this.window.shape.imagem,
        this.base.posX + this.window.pos[i].posX,
        this.window.pos[i].posY,
        this.window.width,
        this.window.height
      );
    }
  }

  drawPortas() {
    //porta
    image(
      this.door.shape.imagem,
      this.base.posX + this.door.posX,
      this.door.posY,
      this.door.width,
      this.door.height
    );
    //print("PosXPorta" + this.posXPorta);
  }

  drawTelhados() {
    //porta
    image(
      this.roof.shape.imagem,
      this.base.posX,
      this.base.posY,
      this.roof.width,
      this.roof.height
    );
    //print("PosXPorta" + this.posXPorta);
  }
}
