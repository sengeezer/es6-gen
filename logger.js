function logger() {
  console.log('start');
  console.log('end');
}

function* glogger() {
  console.log('start');
  yield;
  console.log('end');
}

const vlogger = glogger();

// logger()
vlogger.next();
vlogger.next();
