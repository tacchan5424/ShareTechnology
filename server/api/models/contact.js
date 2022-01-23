const Base = require("./base");

module.exports = class Contact extends Base {
  #detail;
  #tag;
  #reply;
  #fixed;

  constructor() {
    super();
    this.#detail = null;
    this.#tag = null;
    this.#reply = null;
    this.#fixed = null;
  }

  get detail() {
    return this.#detail;
  }
  get tag() {
    return this.#tag;
  }
  get reply() {
    return this.#reply;
  }
  get fixed() {
    return this.#fixed;
  }

  set detail(detail) {
    this.#detail = detail;
  }
  set tag(tag) {
    this.#tag = tag;
  }
  set reply(reply) {
    this.#reply = reply;
  }
  set fixed(fixed) {
    this.#fixed = fixed;
  }

  toJson() {
    const json = {
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      detail: this.#detail,
      tag: this.#tag,
      reply: this.#reply,
      fixed: this.#fixed
    };
    return JSON.stringify(json);
  }
};
