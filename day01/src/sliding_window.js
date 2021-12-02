class SlidingWindow {
  /**
   * Represents a SlidingWindow
   * @constructor
   * @param {args} Object - arguments
   */
  constructor(args) {
    /** @type {Array<number>} */
    this.measures = args.data.slice(args.from, args.to);
  }

  /**
   * Returns sum of measures from the sliding window
   * @return {number}
   */
  sum() {
    return this.measures.reduce((previous, current) => previous + current || 0);
  }

  /**
   * Returns sum of measures from the sliding window
   * @param {SlidingWindow} slidingWindow - sliding window to compare
   * @return {boolean} true if is bigger than sliding window passed as argument
   */
  gth(slidingWindow) {
    if (!(slidingWindow instanceof SlidingWindow)) {
      throw new Error(`[SlidingWindow] To compare you need another sliding window`);
    }

    return this.sum() > slidingWindow.sum();
  }
}

export default SlidingWindow;
