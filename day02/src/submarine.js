class Submarine {
  /**
   * Represents a submarine
   * @constructor
   * @param {args} Object - arguments
   */
  constructor() {
    /** @type {number} */
    this.horizontal = 0;

    /** @type {number} */
    this.depth = 0;

    /** @type {number} */
    this.aim = 0;
  }

  /**
   * Execute orders
   * @param {Order|Array<Order>} orders
   */
  execute(...orders) {
    orders.flat(1).forEach(order => this[order.name](order.units));
  }

  /**
   * Go forward, submarine!
   * @param {number} units
   */
  forward(units) {
    this.horizontal += units
    this.depth += this.aim * units;
  }

  /**
   * Down, submarine!
   * @param {number} units
   */
  down(units) {
    this.aim += units
  }

  /**
   * Up, submarine!
   * @param {number} units
   */
  up(units) {
    this.aim -= units
  }

  /**
   * Print information about the current situation
   */
  getInfo() {
    console.log('\nInformation');
    console.log('===========');
    console.log('Horizontal: ', this.horizontal);
    console.log('Depth: ', this.depth);
    console.log('Total: ', this.horizontal * this.depth);
  }
}

export default Submarine;
