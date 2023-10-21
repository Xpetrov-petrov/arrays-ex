function modifyArray(input) {
  const initialArray = input.shift().split(' ').map(Number);

  for (const command of input) {
    if (command === 'end') break;

    const [action, index1, index2] = command.split(' ');
    const i1 = Number(index1);
    const i2 = Number(index2);

    if (action === 'swap') {
      [initialArray[i1], initialArray[i2]] = [initialArray[i2], initialArray[i1]];
    } else if (action === 'multiply') {
      initialArray[i1] *= initialArray[i2];
    } else if (action === 'decrease') {
      for (let i = 0; i < initialArray.length; i++) {
        initialArray[i] -= 1;
      }
    }
  }

  return initialArray.join(', ');
}

const input = [
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
];

const result = modifyArray(input);
console.log(result);
  