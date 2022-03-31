const Base = require("./base");

module.exports = class Information extends Base {
  constructor() {
    super();
    this.title = null;
    this.detail = null;
  }

  toJson() {
    const json = {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      title: this.title,
      detail: this.detail
    };
  }
};
