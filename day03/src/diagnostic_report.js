import Binary from "./binary.js";
import BinaryCollection from "./binary_collection.js";

class DiagnosticReport {
  constructor(input) {
    this.input = input;

    this.gamma = this.getGamma();
    this.epsilon = new Binary(this.gamma.getInverted());
    this.oxygenGeneratorRating = this.getOxygenGeneratorRating();
    this.co2ScrubberRating = this.getCo2ScrubberRating();
  }

  getGamma() {
    let gamma = '';

    for (let index = 0; index < this.input.binaries[0].size(); index++) {
      const mostCommon = this.input.mostCommonBitAtPosition(index);

      gamma += mostCommon;
    }

    return new Binary(gamma);
  }

  getOxygenGeneratorRating() {
    let rating = this.input;
    let index = 0;

    do {
      const commonBitAtPosition = rating.mostCommonBitAtPosition(index);
      rating = rating.filterWithBitAtIndex(commonBitAtPosition, index);
      rating = new BinaryCollection(rating.map(binary => binary.number));

      index++;
    } while (rating.size() > 1 && index < rating.binaries[0].size());

    return rating.binaries[0];
  }

  getCo2ScrubberRating() {
    let rating = this.input;
    let index = 0;

    do {
      const commonBitAtPosition = rating.lessCommonBitAtPosition(index);
      rating = rating.filterWithBitAtIndex(commonBitAtPosition, index);
      rating = new BinaryCollection(rating.map(binary => binary.number));

      index++;
    } while (rating.size() > 1 && index < rating.binaries[0].size());

    return rating.binaries[0];
  }

  get powerConsumtion() {
    return this.gamma.toDecimal() * this.epsilon.toDecimal();
  }

  get lifeSupportRating() {
    return this.oxygenGeneratorRating.toDecimal() * this.co2ScrubberRating.toDecimal();
  }

  showInfo() {
    console.log("Gamma:", this.gamma.toDecimal());
    console.log("Epsillon:", this.epsilon.toDecimal());
    console.log("Power Consumption:", this.powerConsumtion);
    console.log("===");
    console.log("Oxygen generator rating:", this.oxygenGeneratorRating.toDecimal());
    console.log("CO2 scrubber rating:", this.co2ScrubberRating.toDecimal());
    console.log("Life support rating:", this.lifeSupportRating);
  }
}

export default DiagnosticReport;
