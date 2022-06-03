//ADAPTADO

class Population {
  constructor() {
    this.pop = [];
  }

  initialize(popSize = 15) {
    for (let i = 0; i < popSize; i++) {
      const nTorres = round(random(2, 50));

      let individual = [];
      for (let x = 0; x < nTorres; x++) {
        const nAndares = round(random(2, maxAndares));

        //const nAndares = 5;
        const s = round(5 + Math.random() * 10);
        const randomPosX = round(random(0, width));
        const tower = {
          scale: s,
          floor: nAndares,
          maxFloors: maxAndares,
          floors: new Array(maxAndares).fill(null),
        };

        // const torre = new Torre(x, scale, nAndares);
        for (let y = 0; y < nAndares; y++) {
          const base = {
            shape: random(bases),
            width: null,
            height: null,
            posX: randomPosX,
            posY: null,
          };
          // print(x);
          base.width = round(base.shape.imagem.width / tower.scale);
          base.height = round(base.shape.imagem.height / tower.scale);
          base.posY = height - (y + 1) * base.height;

          const door = {
            shape: random(portas),
            width: null,
            height: null,
            posX: null,
            posY: null,
          };

          door.width = round(door.shape.imagem.width / tower.scale);
          const availableWidth =
            base.width - (door.shape.imagem.width / tower.scale) * 2;
          door.height = round(door.shape.imagem.height / tower.scale);
          door.posX = door.width + (availableWidth / 20) * round(random(19.4));
          door.posY = height - base.height * y - door.height;

          const window = {
            shape: random(janelas),
            width: null,
            height: null,
            pos: [],
          };

          window.width = round(window.shape.imagem.width / tower.scale);
          window.height = round(window.shape.imagem.height / tower.scale);
          window.pos = [
            {
              posX: 1 * (base.width / 19),
              posY: height - (y + 1) * base.height + (1 * base.height) / 19,
            },
            {
              posX: 7 * (base.width / 19),
              posY: height - (y + 1) * base.height + (1 * base.height) / 19,
            },
            {
              posX: 13 * (base.width / 19),
              posY: height - (y + 1) * base.height + (1 * base.height) / 19,
            },
            {
              posX: 1 * (base.width / 19),
              posY: height - (y + 1) * base.height + (7 * base.height) / 19,
            },
            {
              posX: 7 * (base.width / 19),
              posY: height - (y + 1) * base.height + (7 * base.height) / 19,
            },
            {
              posX: 13 * (base.width / 19),
              posY: height - (y + 1) * base.height + (7 * base.height) / 19,
            },
          ];

          const roof = {
            shape: random(telhados),
            width: null,
            height: null,
          };

          roof.width = round(roof.shape.imagem.width / tower.scale);
          roof.height = round(roof.shape.imagem.height / tower.scale);
          const andar = new Andar(base, door, window, roof);

          //andar.drawBase();
          //tower.floors.push(andar);
          tower.floors[y] = new Andar(base, door, window, roof);
          //print(tower.floors[0].base.shape.imagem);
        }
        individual.push(tower);
        individual.length;
      }

      this.pop.push(individual);
    }
    console.group(`Initial Population`);
    this.pop.forEach(function (el, i) {
      console.info(`individual no. ${i} (no. towers ${el.length})`, el);
    });
    console.groupEnd();
  }
  getIndividual(i) {
    return this.pop[i];
  }
  getNTorres(i) {
    return this.nTorres[i];
  }
  evolve() {}
  sortIndividualsByFitness() {}
}
