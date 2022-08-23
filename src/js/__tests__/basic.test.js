import orderByProps from '../basic';
import obj from '../characters';

test('orderByProps: count of params < count of props', () => {
  expect(orderByProps(obj, ['name', 'level'])).toEqual([
    { name: 'мечник' },
    { level: 2 },
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
  ]);
});

test('orderByProps: count of params = count of props', () => {
  expect(orderByProps(obj, ['defence', 'name', 'health', 'level', 'attack'])).toEqual([
    { defence: 40 },
    { name: 'мечник' },
    { health: 10 },
    { level: 2 },
    { attack: 80 },
  ]);
});
