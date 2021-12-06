import Line from "./line.js";
import Diagram from "./diagram.js";

class Vent {
  /**
   * Represents a vent
   * @param {Array<Array<Object>} data
   */
  constructor(data) {
    this.data = data;
    this.lines = this._buildLines();
    this.diagram = new Diagram();
  }

  /**
   * Build lines from data
   * @returns {Array<Line>}
   */
  _buildLines() {
    return this.data.map(lineData => new Line(lineData));
  }
}

export default Vent;
