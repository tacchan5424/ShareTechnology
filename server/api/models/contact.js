const Base = require("./base");

module.exports = class Contact extends Base {
  constructor() {
    super();
    this.detail = null;
    this.tag = null;
    this.reply = null;
    this.fixed = null;
  }

  toJson() {
    const json = {
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      detail: this.detail,
      tag: this.tag,
      reply: this.reply,
      fixed: this.fixed
    };
    return JSON.stringify(json);
  }
};
