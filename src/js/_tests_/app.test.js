// прописать import все файлы JS
import Pers from '../Pers';
import Team from '../app';
// начать тесты

test('created Team and add Pers', () => {
  const team = new Team();
  const person = new Pers('Лучник', 'Bowman', 50, 1, 40, 10);
  team.add(person);
  expect(team.heroes[0]).toEqual(person);
});

test('created Team and add Pers', () => {
  const team = new Team();
  const heroesArr = [];
  heroesArr.push(new Pers({
    name: 'Маг', type: 'Magician', health: 100, level: 2, attack: 20, defense: 15,
  }));
  heroesArr.push(new Pers({
    name: 'Воин', type: 'Demon', health: 200, level: 2, attack: 20, defense: 15,
  }));
  heroesArr.push(new Pers({
    name: 'Лучник', type: 'Wolf', health: 50, level: 2, attack: 20, defense: 15,
  }));

  for (const hero of heroesArr) {
    team.add(hero);
  }

  let counter = 0;
  for (const hero of team) {
    expect(hero).toEqual(heroesArr[counter += 1]);
  }
});
