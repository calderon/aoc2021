import SlidingWindow from './sliding_window.js';

class Report {
  /**
   * Represents a Report
   * @constructor
   * @param {args} Object - arguments
   */
  constructor(args) {
    /** @type {Array} */
    this._data = args.data || [];

    /** @type {number} */
    this._window = args.window || 1;

    if (this._window > this._data.length - 1) {
      throw new Error(`Window cannot be superior to ${this._data.length - 1}`);
    }

    const slidingWindows = [];

    for (let index = 0; index < this._data.length - this._window + 1; index++) {
      const slidingWindow = new SlidingWindow({
        data: this._data,
        from: index,
        to: index + this._window
      })

      slidingWindows.push(slidingWindow);
    }

    /** @type {Array<SlidingWindow>} */
    this.slidingWindows = slidingWindows;
  }

  /**
   * Returns the number of times the sum of measurements in this sliding window increases
   * @return {number}
   */
  increments() {
    let counter = 0;

    this.slidingWindows.reduce((previous, current) => {
      counter += current.gth(previous) | 0;

      return current;
    });

    return counter;
  }

  /**
   * Returns the number of times the sum of measurements in this sliding window decreases
   * @return {number}
   */
  decrements() {
    let counter = 0;

    this.slidingWindows.reduce((previous, current) => {
      counter += previous.gth(current) | 0;

      return current;
    });

    return counter;
  }
}

export default Report;
