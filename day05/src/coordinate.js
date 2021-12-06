class Coordinate {
  /**
   * Represents a coordinate point
   * @param {Object} coordinate
   */
  constructor(coordinate) {
    /** @type {number} */
    this.x = coordinate && coordinate.x;

    /** @type {number} */
    this.y = coordinate && coordinate.y;
  }

  /**
   * To know if a coordinate is equal to another passed by argument
   * @returns {boolean}
   */
  equalTo(coordinate) {
    return this.x === coordinate.x && this.y === coordinate.y;
  }

  /**
   * Coordinate to array
   * @returns {Array<integer>}
   */
  toArray() {
    return [this.x, this.y];
  }
}

export default Coordinate;
