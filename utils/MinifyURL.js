module.exports = class MinifyURL {
  base = "http://mi.ni/";
  constructor(id, url, alias) {
    this.url = url;
    this.id = id;
    this.alias = this.hashAlias(id, alias);
  }

  getInfo() {
    return {
      id: this.id,
      url: this.url,
      alias: this.alias,
    };
  }

  getMini() {
    return this.base + this.alias;
  }

  hashAlias(id, alias) {
    let r = "";
    for (let i = 0; i < alias.length; i++) {
      if (id[i] === "-") {
        continue;
      } else {
        if (r.length > 8) {
          break;
        }
        r += alias[i] + id[id.length - (i + 1)];
      }
    }
    return r;
  }
};
