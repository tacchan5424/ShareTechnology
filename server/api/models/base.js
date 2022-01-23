module.exports = class Base {
  _createdAt;
  _updatedAt;

  constructor() {
    this._createdAt = null;
    this._updatedAt = null;
  }

  get createdAt() {
    return this._createdAt;
  }
  get updatedAt() {
    return this._updatedAt;
  }

  set createdAt(createdAt) {
    this._createdAt = createdAt;
  }
  set updatedAt(updatedAt) {
    this._updatedAt = updatedAt;
  }
};
