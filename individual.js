class Individual {
  constructor(genotype, fitness = 0) {
    this.genotype = genotype;
    this.fitness = fitness;
    this.pg = null;
  }

  getPhenotype(i, w = 500, h = 500) {
    this.pg = createGraphics(w, h);
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

  crossover(parent1) {
    // defines um ponto de corte random (entre 1 e max: número de torres)
    // p.ex 3 e max 5
    // offspring = [parent1, parent1, parent1, parent2, parent2]
    // offspring = copia deste individuo

    const offspring = new Individual(this.genotype, 0);

    if (Math.random < crossoverP) {
      const cutPoint = Math.random(1, this.genotype.length - 1);
      for (let i = 0; i < cutPoint; i++) {
        offspring.genotype[i] = parent1.genotype[i];
      }
    }

    return offspring;
  }

  mutation() {
    // para cada uma das torre random < mutationP
    // escolher um andar random (dentro da torre)
    // escolher um tipo de ornamento random
    // mudar o ornamento radnom
  }
}
