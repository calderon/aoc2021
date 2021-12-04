import Board from "./board.js";

class Bingo {
  constructor(args) {
    this._lastCalledNumber = null;
    this.boards = this._buildBoards(args);
  }

  _buildBoards(args) {
    let boards = [];

    const boardsCount = args.boardsData.length / args.boardSize;

    for (let index = 0; index < boardsCount; index++) {
      const start = 5 * index;
      const end = 5 * index + args.boardSize;
      const data = args.boardsData.slice(start, end).map(row => row.match(/\d+/g))

      boards.push(new Board({
        index,
        data,
        size: args.boardSize
      }));
    }

    return boards;
  }

  get firstAwardedBoard() {
    return this.boards.find(board => board.awarded);
  }

  get awardedBoards() {
    return this.boards.filter(board => board.awarded);
  }

  get lastCalledNumber() {
    return this._lastCalledNumber;
  }

  set lastCalledNumber(number) {
    this._lastCalledNumber = number;
  }

  callNumber(number, index) {
    this.lastCalledNumber = number;
    this.boards.forEach(board => board.callNumber(number));
  }

  getBoard(index) {
    return this.boards[index];
  }

  allBoardsAwarded() {
    return this.boards.every(board => board.awarded);
  }

  lastAwardedBoard() {
    return this.awardedBoards[this.awardedBoards.length - 1];
  }
}

export default Bingo;
