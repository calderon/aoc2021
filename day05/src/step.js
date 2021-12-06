import Coordinate from "./coordinate.js";

/**
 * Step class won't work for part 2 of this challenge.
 * I have to refactor or modify comlpetly some parts of this code
 * @class
 */
class Step {
  /**
   * Let us know which coordinate we should move for the next step
   * @static
   * @param {Coordinate} from
   * @param {Coordinate} to
   * @returns {'x'|'y'}
   */
  static axisToMove(from, to) {
    const distanceX = Math.abs(from.x - to.x);
    const distanceY = Math.abs(from.y - to.y);

    return ['y', 'x'][Number(distanceX >= distanceY)];
  }

  /**
   * Let us know which axis is fixed
   * @returns {'x'|'y'}
   */
  static fixedAxis(axisToMove) {
    return {
      'x': 'y',
      'y': 'x'
    }[axisToMove];
  }

  /**
   * Get next coordinate step
   * @static
   * @param {Coordinate} from
   * @param {Coordinate} to
   * @returns {Coordinate}
   */
  static next(from, to) {
    const axisToMove = this.axisToMove(from, to);
    const fixedAxis = this.fixedAxis(axisToMove);

    const start = [to[axisToMove], from[axisToMove]][Number(from[axisToMove] > to[axisToMove])];
    const distance = [1, -1][Number(from[axisToMove] > to[axisToMove])];

    const next = new Coordinate();
    next[fixedAxis] = from[fixedAxis];
    next[axisToMove] = from[axisToMove] + distance;

    return next;
  }
}

export default Step;
