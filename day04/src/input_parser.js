class InputParser {
  constructor(input) {
    this._input = input;
  }

  toArray() {
    return this._input.split(/\r?\n/).filter(entry => !!entry);
  }

  get drawNumbers() {
    return this.toArray()[0].split(",");
  }

  get boardsData() {
    return this.toArray().slice(1);
  }
}

export default InputParser;
