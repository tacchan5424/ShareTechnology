const Base = require("./base");

module.exports = class Admin extends Base {
  constructor() {
    super();
    this.userId = null;
    this.password = null;
  }

  toJson() {
    const json = {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      userId: this.userId,
      password: this.password
    };
  }
};
