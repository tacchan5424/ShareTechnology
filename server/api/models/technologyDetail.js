const Base = require("./base");

module.exports = class TechnologyDetail extends Base {
  #detail;
  #tags;
  #linkTitles;
  #links;
  #technologId;

  constructor() {
    super();
    this.#detail = null;
    this.#tags = null;
    this.#linkTitles = null;
    this.#links = null;
    this.#technologId = null;
  }

  get detail() {
    return this.#detail;
  }
  get tags() {
    return this.#tags;
  }
  get linkTitles() {
    return this.#linkTitles;
  }
  get links() {
    return this.#links;
  }
  get technologyId() {
    return this.#technologId;
  }

  set detail(detail) {
    this.#detail = detail;
  }
  set tags(tags) {
    this.#tags = tags;
  }
  set linkTitles(linkTitles) {
    this.#linkTitles = linkTitles;
  }
  set links(links) {
    this.#links = links;
  }
  set technologyId(technologyId) {
    this.#technologId = technologyId;
  }

  toJson() {
    const json = {};
    return;
  }
};
