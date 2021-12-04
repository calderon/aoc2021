
import BoardNumber from "./board_number.js";

class Board {
  constructor(args) {
    this._calledNumber = null;
    this._size = args.size;

    this.index = args.index;
    this.numbers = this._buildNumbers(args);
  }

  _buildNumbers(args) {
    let numbers = [];

    for (let row = 0; row < this._size; row++) {
      for (let column = 0; column < this._size; column++) {
        numbers.push(new BoardNumber({
          number: args.data[row][column],
          row,
          column,
        }));
      }
    }

    return numbers;
  }

  get score() {
    return Number.parseInt(this.calledNumber) * this.sumUnmarked();
  }

  get unmarkedNumbers() {
    return this.numbers.filter(boardNumber => !boardNumber.drawn);
  }

  get awarded() {
    let awarded = false;

    for (let index = 0; index < this._size; index++) {
      awarded = awarded || this.rowDrawn(index) || this.columnDrawn(index);

      if (awarded) {
        break;
      }
    }

    return awarded;
  }

  get calledNumber() {
    return this._calledNumber;
  }

  set calledNumber(number) {
    this._calledNumber = number;
  }

  sumUnmarked() {
    let sum = Number.parseInt(this.unmarkedNumbers[0].number);

    this.unmarkedNumbers.reduce((previous, current) => {
      sum += Number.parseInt(current.number);

      return current;
    });

    return sum;
  }

  row(row) {
    return this.numbers.filter(boardNumber => boardNumber.row === row);
  }

  column(column) {
    return this.numbers.filter(boardNumber => boardNumber.column === column);
  }

  rowDrawn(row) {
    return this.row(row).every(boardNumber => boardNumber.drawn);
  }

  columnDrawn(column) {
    return this.column(column).every(boardNumber => boardNumber.drawn);
  }

  callNumber(number) {
    this.calledNumber = number;

    this.numbers
      .filter(boardNumber => boardNumber.number === number)
      .forEach(boardNumber => {
        boardNumber.draw()
      });
  }
}

export default Board;
