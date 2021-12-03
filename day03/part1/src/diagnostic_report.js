import Binary from "./binary.js";

class DiagnosticReport {
  constructor(input) {
    this.input = input;

    this.gamma = this.setGamma();
    this.epsilon = new Binary(this.gamma.getInverted());
  }

  setGamma() {
    let gamma = '';

    for (let index = 0; index < this.input.data[0].size(); index++) {
      const mostCommon = this.input.mostCommonBitAtPosition(index);

      gamma += mostCommon;
    }

    return new Binary(gamma);
  }

  get powerConsumtion() {
    return this.gamma.toDecimal() * this.epsilon.toDecimal();
  }

  showInfo() {
    console.log("Gamma:", this.gamma.toDecimal());
    console.log("Epsillon:", this.epsilon.toDecimal());
    console.log("Epsillon:", this.powerConsumtion);
  }
}

export default DiagnosticReport;
