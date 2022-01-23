const Base = require("./base");

module.exports = class Admin extends Base {
  #userId;
  #password;

  constructor() {
    super();
    this.#userId = null;
    this.#password = null;
  }

  get userId() {
    return this.#userId;
  }
  get password() {
    return this.#password;
  }

  set userId(userId) {
    this.#userId = userId;
  }
  set password(password) {
    this.#password = password;
  }

  toJson() {
    const json = {
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      userId: this.#userId,
      password: this.#password
    };
  }
};
