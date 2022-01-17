module.exports = class Contact {
  #createdAt;
  #updatedAt;
  #detail;
  #tag;
  #reply;
  #fixed;

  constructor() {
    this.#createdAt = null;
    this.#updatedAt = null;
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
};
