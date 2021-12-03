class Order {
  /**
   * Represents a order
   * @constructor
   * @param {args} order - line input from the file
   */
  constructor(order) {
    order = order.split(" ");

    /** @type {string} */
    this._name = order[0];

    /** @type {number} */
    this._units = Number(order[1]);
  }

  /**
   * Go forward, submarine!
   * @readonly
   * @returns {string} Order name
   */
  get name() {
    return this._name;
  }

  /**
   * Go forward, submarine!
   * @readonly
   * @returns {string} Units of the order
   */
  get units() {
    return this._units;
  }
}

export default Order;
