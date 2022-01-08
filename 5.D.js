// Dependency Inversion Principle
'use strict';

class Fetch {
  request(url) {
    return Promise.resolve('data from fetch');
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from Local Storage';
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }
}
class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }
  clientGet(key) {
    return this.localStorage.get(key);
  }
}
class Database {
  constructor(client) {
    //this.fetch = new Fetch();
    //this.localStorage = new localStorage();
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const db = new Database(new LocalStorageClient());
console.log(db.getData('rand'));
