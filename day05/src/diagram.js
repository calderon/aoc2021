import Coordinate from './coordinate.js';
import DiagramCoordinate from './diagram_coordinate.js';

class Diagram {
  /**
   * Represents a diagram
   */
  constructor()  {
    /** @type {Array<DiagramCoordinate>} */
    this.matrix = [];

    /** @type {number} */
    this.rows = 0;

    /** @type {number} */
    this.columns = 0;
  }

  /**
   * Find a coordinate in the "matrix"
   * @param {Coordinate} coordinate
   * @returns {Coordinate|null}
   */
  find(coordinate) {    
    return this.matrix.find(diagramCoordinate => diagramCoordinate.equalTo(coordinate));
  }

  /**
   * Increase overlappings counter.
   * If it's the first time we treat the coodinate, we add it to our "matrix".
   * Also, check if coordinate point x/y is bigger than our stored values
   * This is just for fun and used on the print method.
   * @param {Coordinate} coordinate
   * @returns {Coordinate|null}
   */
  increase(coordinate) {
    let diagramCoordinate = this.find(coordinate);

    if (!diagramCoordinate) {
      diagramCoordinate = new DiagramCoordinate(coordinate);
      this.matrix.push(diagramCoordinate);
    }

    if (coordinate.x > this.columns) {
      this.columns = coordinate.x;
    }

    if (coordinate.y > this.rows) {
      this.rows = coordinate.y;
    }

    diagramCoordinate.increase();
  }

  /**
   * Get how many overlappings we have bigger than argument, by default 2
   * @param {number} overlappings 
   * @returns {number}
   */
  overlappings(overlappings = 2) {
    return this.matrix.filter(diagramCoordinate => diagramCoordinate.overlappings >= overlappings).length;
  }

  /**
   * Print the result.
   * DO NOT USE WITH REAL INPUT
   */
  print() {
    for (let y = 0; y <= this.rows; y++) {
      let rowToPrint = '';

      for (let x = 0; x <= this.columns; x++) {
        const coordinate = new Coordinate({ x, y });
        const diagramCoordinate = this.find(coordinate);

        let character = '.';

        if (diagramCoordinate) {
          character = diagramCoordinate.overlappings;
        }

        rowToPrint += character;
      }

      console.log(rowToPrint);
    }
  }
}

export default Diagram;
