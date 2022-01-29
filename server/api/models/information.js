const Base = require("./base");

module.exports = class Information extends Base {
  constructor() {
    super();
    this.detail = null;
  }

  toJson() {
    const json = {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      detail: this.detail
    };
  }
};
