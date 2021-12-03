import Binary from "./binary.js";

class InputParser {
  constructor(input) {
    this._input = input;
    this._data = input.split(/\r?\n/).filter(entry => /\S/.test(entry)).map((i) => new Binary(i));
  }

  get data() {
    return this._data;
  }

  get lines() {
    return this._data.length;
  }

  mostCommonBitAtPosition(index) {
    const binary = new Binary(this.bitsAtPosition(index).join(""));

    const oneCount = binary.count(1);

    return Number(oneCount > (binary.size() - oneCount));
  }

  bitsAtPosition(index) {
    return this._data.map(binary => binary.getPosition(index));
  }
}

export default InputParser;
