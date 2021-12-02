class Submarine {
  constructor() {
    this.horizontal = 0;
    this.depth = 0;
    this.aim = 0;
  }

  execute(...orders) {
    orders.flat(1).forEach(order => this[order.name](order.units));
  }

  forward(units) {
    this.horizontal += units
    this.depth += this.aim * units;
  }

  down(units) {
    this.aim += units
  }

  up(units) {
    this.aim -= units
  }

  getInfo() {
    console.log('\nInformation');
    console.log('===========');
    console.log('Horizontal: ', this.horizontal);
    console.log('Depth: ', this.depth);
    console.log('Total: ', this.horizontal * this.depth);
  }
}

export default Submarine;
