import InputReader from './src/input_reader.js';
import InputParser from './src/input_parser.js';
import Submarine from './src/submarine.js';
import Order from './src/order.js';

const main = async() => {
  try {
    const input = await InputReader.get('./data/input');
    const orders = InputParser.parse(input);

    const submarine = new Submarine();
    submarine.execute(orders);

    submarine.getInfo();
  } catch (error) {
    console.log(error);
  }
};

main();
