import Character from '../class/character';
import Team from '../class/team';

test('Add character', () => {
  const character = new Character();
  const team = new Team();
  const members = new Set();
  members.add(character);
  const result = {
    members,
  };
  team.add(character);
  expect(team).toEqual(result);
});

test('Add exicting character', () => {
  const character = new Character();
  const team = new Team();

  team.add(character);
  expect(() => {
    team.add(character);
  }).toThrow();
});

test('All members to Array', () => {
  const character1 = new Character();
  const character2 = new Character();
  const team = new Team();
  const result = [character1, character2];

  team.add(character1);
  team.add(character2);
  expect(team.toArray()).toEqual(result);
});

test('Add all members to Team', () => {
  const character1 = new Character();
  const character2 = new Character();
  const members = new Set();
  members.add(character1);
  members.add(character2);
  const result = {
    members,
  };
  const team = new Team();

  team.addAll(character1, character2, character1);
  expect(team).toEqual(result);
});
