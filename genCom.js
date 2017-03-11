// generator -> instance

function* genHello() {
  yield 'hello';
}

const hello = genHello();
console.log(hello.next());
console.log(hello.next());

// instance -> generator

function* genHullo() {
  const word = yield;
  console.log(`And today's word is: ${word}`);
}

const hullo = genHullo();
console.log(hullo.next());
console.log(hullo.next('words'));
