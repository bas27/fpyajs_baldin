import { calculateTotal } from '../calculate.js';

test('basic test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('calculateTotal sum without discount', () => {
    const list = [
        {
            id: 456,
            name: 'book',
            count: 3,
            price: 400
        },
        {
            id: 789,
            name: 'book2',
            count: 56,
            price: 1000
        },
    ];

    const result = calculateTotal(list);
    expect(result).toBe(57200);

});

test('calculateTotal sum with discount', () => {
    const list = [
        {
            id: 456,
            name: 'book',
            count: 3,
            price: 400
        },
        {
            id: 789,
            name: 'book2',
            count: 56,
            price: 1000
        },
    ];

    const result = calculateTotal(list, true);
    expect(result).toBe(28600);

});