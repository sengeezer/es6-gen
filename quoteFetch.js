const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const fetch = require('node-fetch');
// const chelper = require('co');

function* createQuoteFetcher() {
  const response = yield fetch(url);
  const quote = yield response.json();
  return `${quote.quoteText} -${quote.quoteAuthor}`;
}

// npm module co can sub for helper
// replace helper with chelper

const helper = (gen) => {
  const generator = gen();

  const handle = (result) => {
    if (result.done) {
      return Promise.resolve(result.value);
    }
    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)));
  }

  return handle(generator.next());
}

const quoteFetcher = helper(createQuoteFetcher);

// stepping through the generator's inner workings:
quoteFetcher.then(quote => console.log(quote));
