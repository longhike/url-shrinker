module.exports = class MinifyURL {

  constructor(id, url, alias) {
    this.id = id;
    this.target_url = url;
    this.alias = alias
    this.alias_hash = this.hashAlias(id, alias);
    this.base = "http://mi.ni/";
    this.mini_url = this.getMini()
  }

  getInfo() {
    return {
      id: this.id,
      target_url: this.target_url,
      alias: this.alias,
      alias_hash: this.alias_hash,
      base: this.base,
      mini_url: this.mini_url
    };
  }

  getMini() {
    return this.base + this.alias_hash;
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
