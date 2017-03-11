function* genHullo() {
  try {
    const word = yield;
    console.log(`And today's word is: ${word}`);
  } catch(err) {
    console.log('Error: ', err);
  }
}

const hullo = genHullo();

console.log(hullo.next());
console.log(hullo.throw('words'));
