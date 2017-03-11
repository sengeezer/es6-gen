function* createOtherCounter() {
    yield 3;
    yield 4;
}

function* createCounter() {
  yield 1;
  yield 2;
  yield* createOtherCounter();
  yield 5;
}



const counter = createCounter();
for (let i of counter) {
  console.log(i);
}
