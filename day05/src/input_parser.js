class InputParser {
  /**
   * Helps us to parse our input data from the file
   * @param {String} input
   */
  constructor(input) {
    this._input = input;
  }

  /**
   * Returns an array with our parsed data
   * @returns {Array<Array<Object>}
   */
  toArray() {
    return this._input.split(/\r?\n/).filter(entry => !!entry).map(line => {
      return line.split(" -> ").map(coordinate => {
        coordinate = coordinate.split(",")

        return {
          x: Number(coordinate[0]),
          y: Number(coordinate[1])
        }
      });
    });
  }
}

export default InputParser;
