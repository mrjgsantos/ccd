class Individual {
  constructor(genotype, fitness = 0) {
    this.genotype = genotype;
    this.fitness = fitness;
    //this.pg = null;
    this.pg = createGraphics(windowWidth, windowHeight);
  }

  getPhenotype(i /* w = 500, h = 500*/) {
    //this.pg = createGraphics(w, h);

    for (let x = 0; x < this.genotype.length; x++) {
      for (let y = 0; y < this.genotype[x].floor; y++) {
        if (y < this.genotype[x].floor - 1) {
          this.genotype[x].floors[y].drawBase(this.pg);
          this.genotype[x].floors[y].drawJanelas(this.pg);
        }
        if (y == 0) {
          this.genotype[x].floors[y].drawPortas(this.pg);
        }

        if (y == this.genotype[x].floor - 1) {
          this.genotype[x].floors[y].drawTelhados(this.pg);
        }
      }
    }
    return this.pg;
  }
  getGenotype() {
    return this.genotype;
  }
  crossover(parent1) {
    const child = new Individual(this.genotype, 0);
    let crossoverPoint = int(random(1, this.genotype.length - 1));
    if (i < crossoverPoint) {
      for (let i = 0; i < crossoverPoint; i++) {
        child.genotype[i] = parent1.genotype[i];
      }
    }
    return offspring;
  }

  mutation() {
    // para cada uma das torre random < mutationP
    // escolher um andar random (dentro da torre)
    // escolher um tipo de ornamento random
    // mudar o ornamento radnom
    //for(let i=0;i<)

    for (let x = 0; x < this.genotype.length; x++) {
      for (let y = 0; y < this.genotype[x].floor; y++) {
        //let andarRandom = random(this.genotype[x].floors[y]);
        let nAndarRandom = int(random(0, this.genotype[x].floor));
        let andarRandom = this.genotype[x].floors[nAndarRandom];

        let ornamentoRandom;

        if (nAndarRandom == 0) {
          let prob = random(0, 1);
          if (prob < 0.5) {
            print("trocou Base Fundo");
            ornamentoRandom = andarRandom.base;
            ornamentoRandom.shape = random(bases);
            //ornamentoRandom.drawBase;
          } else {
            print("trocou Porta");
            ornamentoRandom = andarRandom.door;
            ornamentoRandom.shape = random(portas);
          }
        }

        if (nAndarRandom > 0 && nAndarRandom < this.genotype[x].floor) {
          let prob = random(0, 1);

          if (prob < 0.5) {
            print("trocou Base Meio");
            ornamentoRandom = andarRandom.base;
            ornamentoRandom.shape = random(bases);
          } else {
            print("trocou Janela");
            ornamentoRandom = andarRandom.window;
            ornamentoRandom.shape = random(janelas);
          }
        }

        if (nAndarRandom == this.genotype[x].floor - 1) {
          ornamentoRandom = andarRandom.roof;
          ornamentoRandom.shape = random(telhados);
        }
      }
    }
  }
}
