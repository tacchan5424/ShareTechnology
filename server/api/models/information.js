const Base = require("./base");

module.exports = class Information extends Base {
  #detail;

  constructor() {
    super();
    this.#detail = null;
  }

  get detail() {
    return this.#detail;
  }

  set detail(detail) {
    this.#detail = detail;
  }

  toJson() {
    const json = {
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      detail: this.#detail
    };
  }
};
