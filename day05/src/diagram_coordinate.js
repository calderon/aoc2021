import Coordinate from "./coordinate.js";

class DiagramCoordinate extends Coordinate {
  /**
   * Represents a coordinate point on diagram
   * @param {Object} coordinate
   */
  constructor(coordinate) {
    super(coordinate);

    /** @type {number} */
    this.overlappings = 0;
  }

  /**
   * Increase overlappings counter
   */
  increase() {
    this.overlappings++;
  }
}

export default DiagramCoordinate;
