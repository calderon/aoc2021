import Binary from "./binary.js";

class BinaryCollection {
  constructor(binaries) {
    this.binaries = binaries.map(binary => new Binary(binary));
  }

  mostCommonBitAtPosition(index) {
    const row = this.row(index).join("");
    const binary = new Binary(row);

    const oneCount = binary.count(1);
    const zeroCount = binary.size() - oneCount;

    if (oneCount === zeroCount) {
      return 1;
    }

    return Number(!Number(zeroCount > oneCount));
  }

  lessCommonBitAtPosition(index) {
    const row = this.row(index).join("");
    const binary = new Binary(row);

    const oneCount = binary.count(1);
    const zeroCount = binary.size() - oneCount;

    if (oneCount === zeroCount) {
      return 0;
    }

    return Number(zeroCount > oneCount);
  }

  row(index) {
    return this.binaries.map(binary => binary.getBit(index));
  }

  filterWithBitAtIndex(bit, index) {
    return this.binaries.filter(binary => binary.getBit(index) === `${bit}`);
  }

  size() {
    return this.binaries.length;
  }
}

export default BinaryCollection;
