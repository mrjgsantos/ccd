class Andar {
  constructor(base, door, window, roof) {
    this.base = base;
    this.door = door;
    this.window = window;
    this.roof = roof;
  }
  drawBg(pg) {
    pg.background(255);
  }

  drawBase(pg) {
    pg.image(
      this.base.shape.imagem,
      this.base.posX,
      this.base.posY,
      this.base.width,
      this.base.height
    );
  }
  drawJanelas(pg) {
    //janela
    //shuffle(posXYJanelas, true);

    for (let i = 0; i < 6; i++) {
      pg.image(
        this.window.shape.imagem,
        this.base.posX + this.window.pos[i].posX,
        this.window.pos[i].posY,
        this.window.width,
        this.window.height
      );
    }
  }

  drawPortas(pg) {
    //porta
    pg.image(
      this.door.shape.imagem,
      this.base.posX + this.door.posX,
      this.door.posY,
      this.door.width,
      this.door.height
    );
    //print("PosXPorta" + this.posXPorta);
  }

  drawTelhados(pg) {
    //porta

    pg.image(
      this.roof.shape.imagem,
      this.base.posX,
      this.base.posY,
      this.roof.width,
      this.roof.height
    );
    //print("PosXPorta" + this.posXPorta);
  }
}
