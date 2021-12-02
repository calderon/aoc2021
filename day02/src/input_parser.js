import Order from './order.js'
class InputParser {
  /**
   * Parse input from file
   * @static
   * @return {Array<Order>}
   */
  static parse(input) {
    const orders = input.split(/\r?\n/).filter(entry => /\S/.test(entry));

    return orders.map(line => new Order(line));
  }
}

export default InputParser;
