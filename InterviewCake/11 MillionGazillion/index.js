class SiteCache {
  constructor() {
    this.cache = {};
  }

  add(site) {
    var path = site.split(''); // ['w', 'w', 'w', '.', ... ]
    var location = this.cache;
    for (let i = 0; i < path.length; i++) {
      if (!location.hasOwnProperty(path[i])) {
        location[path[i]] = {};
      }
      location = location[path[i]];
    }
    location['*'] = true;
  }

  contains(site) {
    var path = site.split(''); // ['w', 'w', 'w', '.', ... ]
    var location = this.cache;
    for (let i = 0; i < path.length; i++) {
      if (!location.hasOwnProperty(path[i])) {
        return false;
      }
      location = location[path[i]];
    }
    return location['*'] || false;
  }
}

module.exports = SiteCache;
