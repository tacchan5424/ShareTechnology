const Base = require("./base");

module.exports = class Technology extends Base {
  constructor() {
    super();
    this.name = null;
    this.detail = null;
    this.tags = null;
    this.linkTitles = null;
    this.links = null;
    this.usedCount = null;
  }

  toJson() {
    const json = {
      _id: this._id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this.name,
      detail: this.detail,
      tags: this.tags,
      linkTitles: this.linkTitles,
      links: this.links,
      usedCount: this.usedCount
    };
    return JSON.stringify(json);
  }
};
