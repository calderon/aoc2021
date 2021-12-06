import Coordinate from "./coordinate.js";
import Step from "./step.js";

class Line {
  constructor(data) {
    this.from = new Coordinate({
      x: data[0].x,
      y: data[0].y
    });

    this.to = new Coordinate({
      x: data[1].x,
      y: data[1].y
    });

    this.path = this._buildPath();
  }

  /**
   * Build the path from two coordinates
   * @returns {Array<Coordinate>}
   */
  _buildPath() {
    let path = [this.from];
    let next;

    do {
      const lastCoveredCoordinate = path[path.length - 1];
      next = Step.next(lastCoveredCoordinate, this.to);
      path.push(next);
    } while (!next.equalTo(this.to));

    return path;
  }

  /**
   * Let us know if a line is horizontal
   * @returns {boolean}
   */
  horizontal() {
    return this.from.x == this.to.x;
  }

  /**
   * Let us know if a line is vertical
   * @returns {boolean}
   */
  vertical() {
    return this.from.y == this.to.y;
  }
}

export default Line;
