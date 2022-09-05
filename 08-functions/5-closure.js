function greetingFactory() {
  // closure
  let symbol = '!';

  return () => {
    console.log('hello' + symbol)
  }
}

let greetingFunction = greetingFactory();

greetingFunction();
