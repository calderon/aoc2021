class Order {
  constructor(order) {
    order = order.split(" ");

    this._name = order[0];
    this._units = Number(order[1]);
  }

  get name() {
    return this._name;
  }

  get units() {
    return this._units;
  }
}

export default Order;
