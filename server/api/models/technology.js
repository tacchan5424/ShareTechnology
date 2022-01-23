const Base = require("./base");

module.exports = class Technology extends Base {
  #name;
  #used;

  constructor() {
    super();
    this.#name = null;
    this.#used = null;
  }

  get name() {
    return this.#name;
  }
  get used() {
    return this.#used;
  }

  set name(name) {
    this.#name = name;
  }
  set used(used) {
    this.#used = used;
  }

  tpJson() {
    const json = {
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      name: this.#name,
      used: this.#used
    };
    return JSON.stringify(json);
  }
};
