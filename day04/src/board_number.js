class BoardNumber {
  constructor(args) {
    this.number = args.number;
    this.row = args.row;
    this.column = args.column;
    this.drawn = false;
  }

  draw() {
    this.drawn = true;
  }
}

export default BoardNumber;
