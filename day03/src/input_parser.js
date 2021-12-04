import BinaryCollection from "./binary_collection.js";

class InputParser {
  constructor(input) {
    this._input = input;
    this._data = new BinaryCollection(this.toArray());
  }

  toArray() {
    return this._input.split(/\r?\n/).filter(entry => !!entry);
  }

  get data() {
    return this._data;
  }

  get size() {
    return this._data.length;
  }
}

export default InputParser;
