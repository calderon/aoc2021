class Binary {
  constructor(number) {
    this.number = number;
  }

  count(value) {
    const regExp = new RegExp(value, 'g');

    return this.number.match(regExp).length;
  }

  getInverted() {
    return this.number.replace(/\d/g, (bit) => Number(!Number(bit)))
  }

  toDecimal() {
    return Number.parseInt(this.number, 2);
  }

  size() {
    return this.number.length;
  }

  getPosition(index) {
    return this.number[index];
  }
}

export default Binary;
