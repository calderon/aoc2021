class Report {
  /**
   * Represents a Report
   * @constructor
   * @param {args} Object - arguments
   */
  constructor(data) {
    /** @type {Array} */
    this.data = data || [];
  }

  /**
   * Returns the number of times the sum of measurements in this sliding window increases
   * @private
   * @returns {number}
   */
  increments() {
    let counter = 0;

    this.data.reduce((previous, current) => {
      counter += current > previous | 0;

      return current;
    });

    return counter;
  }

  /**
   * Returns the number of times the sum of measurements in this sliding window decreases
   * @private
   * @returns {number}
   */
  decrements() {
    let counter = 0;

    this.data.reduce((previous, current) => {
      counter += previous > current | 0;

      return current;
    });

    return counter;
  }
}

export default Report;
