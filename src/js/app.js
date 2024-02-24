//  import Pers from './Pers';

class Team {
  constructor() {
    this.heroes = [];
    this.quantity = 0;
  }

  add(pers) {
    this.heroes.push(pers);
    this.quantity += 1;
  }

  [Symbol.iterator]() {
    const { heroes, last } = this;
    let current = 0;
    function* next() {
      for (current = 0; current < last; current += 1) {
        yield heroes[current];
      }
    }
    return next();
  }
}

/* const team = new Team();
team.add(new Pers('niki'));
team.add(new Pers('moko'));
console.log(team); */

export default Team;
